export default async function fetchParsePdf(file: File) {
  const formData = new FormData();
  formData.append("pdf", file);

  try {
    const response = await fetch("/api/pdf-parse", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to parse PDF");
    }

    const result = await response.json();
    return result.text;
  } catch (error) {
    console.error("Error uploading PDF:", error);
    throw error;
  }
};
