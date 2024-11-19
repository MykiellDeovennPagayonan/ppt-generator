import { Button } from "@/components/ui/button"
import { Upload, X } from 'lucide-react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React from "react"

interface CreatePptFromPdfProps {
  file: File | null
  setFile: React.Dispatch<React.SetStateAction<File | null>>
  loading: boolean
}

export function CreatePptFromPdf({ file, setFile, loading }: CreatePptFromPdfProps) {

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFile = event.target.files[0]
      setFile(selectedFile)
    }
  }

  const handleRemoveFile = () => {
    setFile(null)
  }

  return (
    <div className="space-y-2">
      <Label htmlFor="pdf-upload">Upload PDF</Label>
      {!file &&
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="pdf-upload"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-4 " />
              <p className="mb-2 text-sm">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
            </div>
            <Input
              id="pdf-upload"
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleFileChange}
              disabled={loading}
            />
          </label>
        </div>
      }
      {file && (
        <div className="flex items-center justify-between">
          <p className="text-sm">Selected file: {file.name}</p>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleRemoveFile}
            disabled={loading}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}

interface CreatePptFromTextProps {
  pastedText: string
  setPastedText: React.Dispatch<React.SetStateAction<string>>
  loading: boolean
}

export function CreatePptFromText({pastedText, setPastedText, loading} : CreatePptFromTextProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="text-input" className="">Paste Text</Label>
      <Textarea
        id="text-input"
        placeholder="Paste your text here..."
        value={pastedText}
        onChange={(e) => setPastedText(e.target.value)}
        className="h-64 min-h-[16rem] rounded-md"
        disabled={loading}
      />
    </div>
  )
}