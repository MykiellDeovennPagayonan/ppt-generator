interface BaseSlide {
  type: SlideType;
}

type SlideType =
  | "Header & Subheader Slide"
  | "Enumeration Slide"
  | "Definition Slide"
  | "Paragraph Slide"
  | "Timeline Slide"
  | "Comparison Slide";

interface HeaderSubheaderSlide extends BaseSlide {
  type: "Header & Subheader Slide";
  content : {
    title: string;
    subtitle: string;
  }
}

interface EnumerationSlide extends BaseSlide {
  type: "Enumeration Slide";
  content: {
    title: string;
    bullets: string[];
  }
}

interface DefinitionSlide extends BaseSlide {
  type: "Definition Slide";
  content: {
    term: string;
    definition: string;
  }
}

interface ParagraphSlide extends BaseSlide {
  type: "Paragraph Slide";
  content: {
    paragraph: string;
  }
}

interface Milestone {
  eventTitle: string;
  date: string;
  description: string;
}

interface ComparisonItem {
  header: string;
  points: string[];
}

interface ComparisonSlide extends BaseSlide {
  type: "Comparison Slide";
  content: {
    title: string;
    comparisonItems: ComparisonItem[];
  }
}

type Slide =
  | HeaderSubheaderSlide
  | EnumerationSlide
  | DefinitionSlide
  | ParagraphSlide
  | ComparisonSlide;

interface CreatePptSlidesParams {
  slides: Slide[];
}

export {
  SlideType,
  BaseSlide,
  HeaderSubheaderSlide,
  EnumerationSlide,
  DefinitionSlide,
  ParagraphSlide,
  Milestone,
  ComparisonItem,
  ComparisonSlide,
  Slide,
  CreatePptSlidesParams
};