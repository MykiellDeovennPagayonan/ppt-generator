import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import React from "react"

interface LoadingBarProps {
  progress: number
}

export function LoadingBar({ progress }: LoadingBarProps) {
  return (
    <div className="mt-4">
      <Progress value={progress} className="w-full" />
      <p className="mt-2 text-sm text-center ">Creating your presentation...</p>
    </div>
  )
}

interface LoadingPopUpProps {
  showProcessingDialog: boolean
  setShowProcessingDialog: React.Dispatch<React.SetStateAction<boolean>>
  progress: number
}

export function LoadingPopUp({ showProcessingDialog, setShowProcessingDialog, progress }: LoadingPopUpProps) {
  return (
    <Dialog open={showProcessingDialog} onOpenChange={setShowProcessingDialog}>
      <DialogContent className="rounded-xl shadow-md border ">
        <DialogHeader>
          <DialogTitle className="">Creating your PPT!</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <Progress value={progress} className="w-full" />
        </div>
      </DialogContent>
    </Dialog>
  )
}