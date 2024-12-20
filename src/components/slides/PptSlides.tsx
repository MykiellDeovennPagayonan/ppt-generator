"use client"

import React, { useState, useRef } from "react";
import HeaderSubheaderSlide from "./HeaderSubheaderSlide";
import EnumerationSlide from "./EnumerationSlide";
import DefinitionSlide from "./DefinitionSlide";
import ParagraphSlide from "./ParagraphSlide";
import ComparisonSlide from "./ComparisonSlide";
// import TimelineSlide from "./TimelineSlide";
import { Slide } from "@/lib/types";
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PptSlidesProps {
  slides: Slide[];
}

const PptSlides: React.FC<PptSlidesProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const totalSlides = slides.length;
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const slideRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const handleBack = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  function renderSlide(slide: Slide | undefined) {
    if (!slide) {
      return <div>Slide not found</div>;
    }

    switch (slide.type) {
      case "Header & Subheader Slide":
        return (
          <HeaderSubheaderSlide
            title={slide.content.title}
            subtitle={slide.content.subtitle}
          />
        );
      case "Enumeration Slide":
        return (
          <EnumerationSlide
            title={slide.content.title}
            bullets={slide.content.bullets}
          />
        );
      case "Definition Slide":
        return (
          <DefinitionSlide
            term={slide.content.term}
            definition={slide.content.definition}
          />
        );
      case "Paragraph Slide":
        return <ParagraphSlide paragraph={slide.content.paragraph} />;
      case "Comparison Slide":
        return (
          <ComparisonSlide
            title={slide.content.title}
            comparisonItems={slide.content.comparisonItems}
          />
        );
      // case "Timeline Slide":
      //   return (
      //     <TimelineSlide 
      //       title={slide.content.title}
      //       milestones={slide.content.milestones}
      //     />
      //   );
      default:
        return <div>Unsupported slide type</div>;
    }
  };

  return (
    <div className="flex flex-col flex-grow items-center w-[250px] sm:w-[450px] md:w-[550px] justify-center">
      <div
        className="relative w-full h-full"
        style={{ paddingBottom: "56.25%" }}
        ref={slideRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-white rounded-lg overflow-hidden">
          {renderSlide(slides[currentSlide])}
        </div>
        {isHovering &&
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 bottom-2 opacity-70 hover:opacity-100"
              onClick={handleBack}
              aria-label="Previous card"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground">
              {currentSlide + 1} of {totalSlides}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 bottom-2 opacity-70 hover:opacity-100"
              onClick={handleNext}
              aria-label="Next card"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        }
      </div>
    </div >
  );
};

export default PptSlides;