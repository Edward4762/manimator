"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Play, Plus } from "lucide-react";

function HeaderBar() {
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm font-normal text-muted-foreground">Preview</p>
      <div className="flex items-center gap-4">
        {/* <p className="text-sm font-normal text-muted-foreground">Invite</p> */}
        <Button size='sm' variant="outline" onClick={() => console.log("Invite clicked")}>Invite</Button>
        <Button size="sm" onClick={() => console.log("Export clicked")}>Export</Button>
      </div>
    </div>
  );
}

function VideoPreview() {
  return (
    <div className="w-full max-w-[1800px] mx-auto aspect-video bg-background rounded-2xl shadow-lg overflow-hidden">
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-muted-foreground"></p>
      </div>
    </div>
  );
}

function VariantPreviewBoxes() {
  return (
    <div className="flex items-center gap-4">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="w-[91px] h-[92px] bg-popover border border-border rounded-lg" />
      ))}
    </div>
  );
}

function VariantSection() {
    return (
      <div className="flex flex-col items-center justify-center gap-3 w-full max-w-[1800px] px-2">
        <p className="text-sm font-normal text-muted-foreground text-center">Preview all variants</p>
        <div className="flex items-center gap-4">
          <VariantPreviewBoxes />
          <Button
            variant="outline"
            size="icon"
            className="opacity-50 bg-background rounded-full w-8 h-8 p-0 flex items-center justify-center hover:bg-neutral-100"
            onClick={() => console.log("Add clicked")}
            aria-label="Add"
          >
            <Plus className="w-4 h-4 text-foreground" />
          </Button>
        </div>
      </div>
    );
  }
  

function FloatingPlayButton() {
  return (
    <div className="absolute bottom-8 right-8">
      <Button
        size="icon"
        className="w-16 h-16 bg-background rounded-full shadow-lg hover:bg-neutral-100"
        aria-label="Play"
        onClick={() => console.log("Play clicked")}
      >
        <Play className="w-9 h-9 text-primary" />
      </Button>
    </div>
  );
}

export default function MediaPreviewInterface() {
  return (
    <div className="relative w-full h-full flex flex-col">
      <div className="flex-1 flex flex-col bg-muted p-4 lg:p-6 overflow-hidden rounded-2xl m-4">
        <div className="flex flex-col gap-3 max-w-[1800px] w-full mx-auto">
          <HeaderBar />
          <Separator />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-6 lg:gap-8 overflow-auto p-2">
          <VideoPreview />
          <VariantSection />
        </div>
      </div>
    </div>
  );
}
