/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChatCompletionTool } from "openai/resources/index.mjs";
import createPpt from "./function-calling-tools/createPpt"
const functionCallingTools: ChatCompletionTool[] = [
  createPpt,
]

export default functionCallingTools;