/* eslint-disable @typescript-eslint/no-explicit-any */
import pptxgen from "pptxgenjs";
import { Slide } from "@/lib/types";
import {
  createPptHeaderSlide,
  createComparisonSlide,
  createPptDefinitionSlide,
  createPptParagraphSlide,
  createPptEnumerationSlide
} from "./Ppt/createPptSlides";

export default function downloadPpt(slides: Slide[]) {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";

  pptx.theme = { bodyFontFace: "Arial" }

  slides.forEach((slide) => {

    switch (slide.type) {
      case "Header & Subheader Slide":
        createPptHeaderSlide(pptx, slide);
        break;
      case "Paragraph Slide":
        createPptParagraphSlide(pptx, slide);
        break;
      case "Enumeration Slide":
        createPptEnumerationSlide(pptx, slide)
        break;
      case "Definition Slide":
        createPptDefinitionSlide(pptx, slide)
        break;
      // case "Timeline Slide":
      //   createPptTimelineSlide(pptx, slide)
      //   break;
      case "Comparison Slide":
        createComparisonSlide(pptx, slide)
        break;
    }
  });

  pptx.writeFile({ fileName: "presentation.pptx" });
}
