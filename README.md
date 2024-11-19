# PPT Generator

This project is a PowerPoint (PPT) generator built with [Next.js](https://nextjs.org). Users can upload a PDF or paste text, and the application will automatically generate a PowerPoint presentation that they can download as a template for their presentation.

## Getting Started

To run the development server, follow these steps:

1. Clone the repository to your local machine.

2. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3. Create a `.env` file in the root directory of the project and add your OpenAI API key:

    ```env
    OPENAI_API_KEY=your-api-key-here
    ```

4. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## How It Works

- Users can upload a PDF or paste text into the provided input area.
- The app processes the input and generates a PPT presentation based on the content.
- The generated presentation can be downloaded as a PowerPoint template for use in presentations.

## Deploy on Vercel

If you'd like to deploy this app, the easiest way is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).