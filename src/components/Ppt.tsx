'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download } from 'lucide-react'
import { CreatePptSlidesParams } from '@/lib/types'
import PptSlides from './slides/PptSlides'
import downloadPpt from "@/utils/downloadPpt"

export default function Ppt({ slides }: CreatePptSlidesParams) {

  return (
    <div className="flex flex-col items-center space-y-4">
      <Card className='p-0'>
        <PptSlides slides={slides} />
      </Card>
      <Button onClick={() => downloadPpt(slides)} variant="default">
        <Download className="mr-2 h-4 w-4" /> Download PowerPoint
      </Button>
    </div>
  )
}