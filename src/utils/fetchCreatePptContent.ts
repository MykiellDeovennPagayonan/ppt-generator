import { Slide } from "@/lib/types";

export default async function fetchCreatePptContents(content: string, numberOfSlides: number) : Promise<Slide[]> {
  try {
    const response = await fetch('/api/ppt/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content,
        numberOfSlides,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json()
    return data.message;
  } catch (error) {
    console.error('Error creating quiz:', error);
    throw error;
  }
}