"use client"

import React from "react"
import { SparklesIcon } from "lucide-react"
import { Badge } from "./badge"
import ImageCursorTrail from "./image-cursortrail"

// Business and technology consulting related images
const businessImages = [
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format", // Modern office
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format", // Business meeting
  "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format", // Team collaboration
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format", // Data analytics
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format", // Technology consulting
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format", // Strategic planning
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format", // Digital transformation
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format", // Business solutions
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format", // Professional consulting
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format", // Innovation
]

export function CursorTrailDemo() {
  return (
    <section className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
      <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px]">
        <ImageCursorTrail
          items={businessImages}
          maxNumberOfImages={5}
          distance={25}
          imgClass="sm:w-40 w-28 sm:h-48 h-36"
          className="max-w-4xl rounded-3xl"
        >
          <article className="relative z-50 flex flex-col items-center justify-center py-16">
            <Badge
              variant="outline"
              className="mb-3 rounded-[14px] border border-black/10 bg-white text-base"
            >
              <SparklesIcon className="fill-[#EEBDE0] stroke-1 text-neutral-800 w-4 h-4 mr-1" />
              Interactive Experience
            </Badge>
            <h1 className="max-w-2xl text-center text-5xl font-semibold tracking-tight">
              Discover Our Consulting Excellence
            </h1>
            <p className="mt-4 max-w-xl text-center text-lg text-gray-600">
              Move your cursor to explore our world of innovative business solutions
            </p>
          </article>
        </ImageCursorTrail>
      </div>
    </section>
  )
}
