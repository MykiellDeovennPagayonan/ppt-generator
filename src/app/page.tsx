'use client'
import dynamic from 'next/dynamic';
import { useState } from "react";
import { Slide } from "@/lib/types";
import Ppt from "@/components/Ppt";

const CreatePpt = dynamic(() => import('@/components/CreatePpt'), { ssr: false });

export default function Home() {
  const [slides, setSlides] = useState<Slide[]>([]);

  return (
    <div className="min-h-screen w-full p-16">
      {slides.length === 0 ? (
        <CreatePpt setSlides={setSlides} />
      ) : (
        <Ppt slides={slides} />
      )}
    </div>
  );
}
