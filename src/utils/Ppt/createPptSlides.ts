import type pptxgen from "pptxgenjs";
import { Slide } from "@/lib/types";

export function createPptHeaderSlide(pptx: pptxgen, slideContent: Slide): void {
  const pptSlide = pptx.addSlide();

  pptSlide.background = { path: "/images/header-bg.png" };

  if (slideContent.type === "Header & Subheader Slide") {
    pptSlide.addText(slideContent.content.title, {
      x: 0.5,
      y: 0.5,
      w: 9,
      h: 2.5,
      fontSize: 60,
      bold: true,
      valign: "bottom",
      align: "center",
      color: "FFFFFF",
    });

    pptSlide.addText(slideContent.content.subtitle, {
      x: 0.5,
      y: 3.3,
      w: 9,
      h: 2.2,
      fontSize: 28,
      align: "center",
      valign: "top",
      color: "FFFFFF",
    });
  }
}

export function createPptParagraphSlide(
  pptx: pptxgen,
  slideContent: Slide
): void {
  const pptSlide = pptx.addSlide();
  pptSlide.background = { color: "FFFFFF" };

  if (slideContent.type === "Paragraph Slide") {
    pptSlide.addText(slideContent.content.paragraph, {
      x: 1,
      y: 1.3,
      w: 8,
      h: 3,
      fontSize: 24,
      align: "center",
      color: "333333",
    });
  }
}

export function createPptEnumerationSlide(
  pptx: pptxgen,
  slideContent: Slide
): void {
  const pptSlide = pptx.addSlide();
  pptSlide.background = { color: "FFFFFF" };

  if (slideContent.type === "Enumeration Slide") {
    pptSlide.addText(slideContent.content.title, {
      x: 0.7,
      y: 0.5,
      w: 9,
      h: 1,
      fontSize: 28,
      bold: true,
      align: "left",
      color: "333333",
    });

    slideContent.content.bullets.forEach(
      (bullet: string | pptxgen.TextProps[], index: number) => {
        pptSlide.addText(bullet, {
          x: 0.7,
          y: 1.5 + index * 0.7,
          w: 8,
          h: 0.6,
          fontSize: 20,
          align: "left",
          color: "333333",
        });
      }
    );
  }
}

export function createPptDefinitionSlide(
  pptx: pptxgen,
  slideContent: Slide
): void {
  const pptSlide = pptx.addSlide();
  pptSlide.background = { color: "FFFFFF" };

  if (slideContent.type === "Definition Slide") {
    pptSlide.addText(slideContent.content.term, {
      x: 0.5,
      y: 0.5,
      w: 9,
      h: 2,
      fontSize: 48,
      bold: true,
      align: "center",
      valign: "bottom",
      color: "333333",
    });

    pptSlide.addText(slideContent.content.definition, {
      x: 1,
      y: 2.8,
      w: 8,
      h: 2,
      fontSize: 24,
      align: "center",
      valign: "top",
      color: "555555",
    });
  }
}

// export function createPptTimelineSlide(
//   pptx: pptxgen,
//   slideContent: Slide
// ): void {
//   const pptSlide = pptx.addSlide();
//   pptSlide.background = { color: "FFFFFF" };

//   if (slideContent.type === "Timeline Slide") {
//     pptSlide.addText(slideContent.content.title, {
//       x: 0.5,
//       y: 0.5,
//       w: 9,
//       h: 1,
//       fontSize: 28,
//       bold: true,
//       align: "center",
//       color: "333333",
//     });
  
//     slideContent.content.milestones.forEach(
//       (
//         milestone: { eventTitle: string; date: string; description: string },
//         index: number
//       ) => {
//         const yPos = 2 + index * 1.5;
  
//         pptSlide.addShape(pptx.ShapeType.rect, {
//           x: 0.5,
//           y: yPos,
//           w: 9,
//           h: 1.2,
//           fill: { color: "F7F7F7" },
//           line: { color: "DADADA", width: 1 },
//         });
  
//         pptSlide.addText(
//           [
//             {
//               text: milestone.eventTitle,
//               options: { fontSize: 20, bold: true, color: "333333" },
//             },
//             {
//               text: `\n${milestone.date}`,
//               options: { fontSize: 18, italic: true, color: "555555" },
//             },
//             {
//               text: `\n${milestone.description}`,
//               options: { fontSize: 16, color: "777777" },
//             },
//           ],
//           {
//             x: 1,
//             y: yPos + 0.2,
//             w: 8,
//             h: 1,
//           }
//         );
//       }
//     );
//   }
// }

export function createComparisonSlide(
  pptx: pptxgen,
  slideContent: Slide
): void {
  const pptSlide = pptx.addSlide();
  pptSlide.background = { color: "FFFFFF" };

  if (slideContent.type === "Comparison Slide") {
    pptSlide.addText(slideContent.content.title, {
      x: 0.5,
      y: 0.5,
      w: 9,
      h: 1,
      fontSize: 28,
      bold: true,
      align: "center",
      color: "333333",
    });
  
    const columnWidth = 4.7;
    slideContent.content.comparisonItems.forEach(
      (item: { header: string; points: string[] }, index: number) => {
        const xPos = 0.2 + index * (columnWidth + 0.2);
  
        pptSlide.addShape(pptx.ShapeType.roundRect, {
          x: xPos,
          y: 1.5,
          w: columnWidth,
          h: 3.7,
          fill: { color: "F9F9F9" },
          line: { color: "E0E0E0", width: 1 },
          rectRadius: 0.1,
        });
  
        pptSlide.addText(item.header, {
          x: xPos + 0.2,
          y: 1.7,
          w: columnWidth - 0.4,
          h: 0.5,
          fontSize: 22,
          bold: true,
          align: "left",
          valign: "top",
          color: "333333",
        });
  
        item.points.forEach(
          (point: string | pptxgen.TextProps[], pointIndex: number) => {
            pptSlide.addText(point, {
              x: xPos + 0.2,
              y: 2.3 + pointIndex * 0.5,
              w: columnWidth - 0.4,
              h: 0.4,
              fontSize: 18,
              align: "left",
              color: "555555",
            });
          }
        );
      }
    );
  }
}
