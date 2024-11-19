import createPptContent from "@/utils/createPptContent";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {content, numberOfSlides} = body

    console.log({content, numberOfSlides})

    const response = await createPptContent(content, numberOfSlides);
    return new Response(JSON.stringify({ message: response }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
