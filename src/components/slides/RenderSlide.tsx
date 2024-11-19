import { Slide } from "@/lib/types";

export default function RenderSlide(slide: Slide) {
  switch (slide.type) {
    // case "Header & Subheader Slide":
    //   return (
    //     <HeaderSubheaderSlide
    //       title={slide.content.title}
    //       subtitle={slide.content.subtitle}
    //     />
    //   );
    // case "Enumeration Slide":
    //   return (
    //     <EnumerationSlide
    //       title={slide.content.title}
    //       bullets={slide.content.bullets}
    //     />
    //   );
    // case "Definition Slide":
    //   return (
    //     <DefinitionSlide
    //       term={slide.content.term}
    //       definition={slide.content.definition}
    //     />
    //   );
    // case "Paragraph Slide":
    //   return <ParagraphSlide paragraph={slide.content.paragraph} />;
    // case "Comparison Slide":
    //   return (
    //     <ComparisonSlide
    //       title={slide.content.title}
    //       comparisonItems={slide.content.comparisonItems}
    //     />
    //   );
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