'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import fetchCreatePptContents from '@/utils/fetchCreatePptContent'
import { LoadingBar, LoadingPopUp } from './Loading'
import CreatePptForm from './CreatePptForm'
import { Slide } from '@/lib/types'

interface CreatePptProps {
  setSlides: React.Dispatch<React.SetStateAction<Slide[]>>
}

export default function CreatePpt({setSlides}: CreatePptProps) {
  const [slideCount, setSlideCount] = useState<number>(10)
  const [parsedText, setParsedText] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [showProcessingDialog, setShowProcessingDialog] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchPpt()

    async function fetchPpt() {
      if (parsedText && parsedText.length > 0) {
        try {
          setLoading(true)
          const slides = await fetchCreatePptContents(parsedText, slideCount + 5)
          console.log(slides)
          setSlides(slides)
          setLoading(false)
          setShowProcessingDialog(false)
        } catch (error) {
          console.error(error)
          setLoading(false)
          setShowProcessingDialog(false)
          setError('Failed to create PPT, try again')
        }
      }
    }
  }, [parsedText])

  return (
    <Card className="w-full max-w-3xl mx-auto rounded-xl shadow-md p-6 py-10 my-auto border border-[#e0dcc7]">
      <CardContent className='py-0'>

        <CreatePptForm
          setParsedText={setParsedText}
          setLoading={setLoading}
          setShowProcessingDialog={setShowProcessingDialog}
          setProgress={setProgress}
          setSlideCount={setSlideCount}
          slideCount={slideCount}
          loading={loading}
        />
        {loading && (
          <LoadingBar progress={progress} />
        )}
        <LoadingPopUp setShowProcessingDialog={setShowProcessingDialog} progress={progress} showProcessingDialog={showProcessingDialog} />
        {error && 
          <div className="text-red-500 text-sm mt-2">{error}</div>
        }
      </CardContent>
    </Card>
  )
}