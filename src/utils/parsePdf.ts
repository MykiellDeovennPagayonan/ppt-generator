/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDocument, GlobalWorkerOptions, version } from "pdfjs-dist";
import type { PDFDocumentProxy } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.min.mjs`

export default async function parsePdf(file: File): Promise<string> {
  const fileReader = new FileReader();

  return new Promise((resolve, reject) => {
    fileReader.onload = async () => {
      if (fileReader.result) {
        try {
          const pdfDoc = (await getDocument({ data: fileReader.result })
            .promise) as PDFDocumentProxy;
          let fullText = "";

          for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
            const page = await pdfDoc.getPage(pageNum);
            const textContent = await page.getTextContent();
            const pageText = textContent.items
              .map((item: any) => item.str)
              .join(" ");

            fullText += `\n${pageText}`;
          }

          resolve(fullText);
        } catch (error) {
          console.error("Failed to parse PDF:", error);
          reject("Failed to parse PDF");
        }
      }
    };

    fileReader.onerror = () => {
      reject("Failed to read file");
    };

    fileReader.readAsArrayBuffer(file);
  });
}
