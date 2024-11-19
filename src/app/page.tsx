'use client'
import CreatePpt from "@/components/CreatePpt"
import { useState } from "react"
import { Slide } from "@/lib/types"
import Ppt from "@/components/Ppt"

export default function Home() {
  const [slides, setSlides] = useState<Slide[]>([])

  return (
    <div className="min-h-screen w-full p-16">
      {slides.length === 0 ?
        <CreatePpt setSlides={setSlides} />
        :
        <Ppt slides={slides} />
      }
    </div>
  )
}