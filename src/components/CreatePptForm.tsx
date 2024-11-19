'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreatePptFromPdf, CreatePptFromText } from './CreatePptTabContent'
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import parsePdf from '@/utils/parsePdf'

interface CreatePptFormProps {
  setParsedText: React.Dispatch<React.SetStateAction<string | null>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setShowProcessingDialog: React.Dispatch<React.SetStateAction<boolean>>
  setProgress: React.Dispatch<React.SetStateAction<number>>
  loading: boolean
  slideCount: number
  setSlideCount: React.Dispatch<React.SetStateAction<number>>
}

export default function CreatePptForm({
  setParsedText,
  setLoading,
  setShowProcessingDialog,
  setProgress,
  loading,
  setSlideCount,
  slideCount
} : CreatePptFormProps) {
  const [pastedText, setPastedText] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [activeTab, setActiveTab] = useState<string>("pdf")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setParsedText(null)
    setErrorMessage(null)
    if (value === "pdf") {
      setPastedText('')
    } else {
      setFile(null)
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (activeTab === "pdf" && !file) {
      setErrorMessage("Please upload a PDF file.")
      setLoading(false)
      return
    }

    if (activeTab === "text" && !pastedText) {
      setErrorMessage("Please paste some text.")
      setLoading(false)
      return
    }

    setErrorMessage(null)
    setParsedText("")
    setLoading(true)
    setShowProcessingDialog(true)
    setProgress(0)

    try {
      if (activeTab === "pdf" && file) {
        const text = await parsePdf(file)
        setParsedText(text)
      } else if (activeTab === "text" && pastedText) {
        setParsedText(pastedText)
      }
    } catch (error) {
      console.error('Error processing content:', error)
      setErrorMessage("An error occurred while processing the content.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-2 ">
          <TabsTrigger value="pdf">PDF Upload</TabsTrigger>
          <TabsTrigger value="text">Text Paste</TabsTrigger>
        </TabsList>

        <TabsContent value="pdf">
          <CreatePptFromPdf file={file} setFile={setFile} loading={loading} />
        </TabsContent>

        <TabsContent value="text">
          <CreatePptFromText pastedText={pastedText} setPastedText={setPastedText} loading={loading} />
        </TabsContent>
      </Tabs>

      <div className="space-y-2">
        <Label htmlFor="slide-count">Slide Count (approximate)</Label>
        <Slider
          id="slide-count"
          min={5}
          max={50}
          step={5}
          value={[slideCount]}
          onValueChange={(value: number[]) => setSlideCount(value[0])}
          disabled={loading}
        />
        <p className="text-sm"> Approximate slide count: {slideCount} slides</p>
      </div>

      <Button
        type="submit"
        className="w-full py-4 mb-0 text-lg rounded-lg"
      >
        {loading ? 'Creating your presentation!' : 'Create Presentation'}
      </Button>

      {errorMessage && <p className="text-red-600 text-sm mt-2">{errorMessage}</p>} {/* Display error message */}
    </form>
  )
}
