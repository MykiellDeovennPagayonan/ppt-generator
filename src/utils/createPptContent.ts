import OpenAI from "openai"
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { Slide } from "@/lib/types";
import functionCallingTools from "./openai/functionCallingTools";

import * as dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey,
});

export default async function createPptContent(content: string, numberOfSidles: number) : Promise<Slide[]> {

  const messages: ChatCompletionMessageParam[] = [
    {
      role: 'system',
      content: `Create a power point presentation with ${numberOfSidles} from the information I give you`,
    },
    {
      role: 'user',
      content,
    }
  ]

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: messages,
    temperature: 1,
    max_tokens: 15010,
    tools: functionCallingTools,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })

  if (response.choices[0].message.tool_calls && response.choices[0].message.tool_calls[0].function.name === "create_ppt_slides") {
    const data = response.choices[0].message.tool_calls[0].function.arguments
    const parsedData = JSON.parse(data)
    console.log(parsedData.slides)
    return parsedData.slides as Slide[];
  }

  return []
}
