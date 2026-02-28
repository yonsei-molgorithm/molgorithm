"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
    alt: "Coding on a laptop screen",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    alt: "Close-up of circuit board",
  },
  {
    src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
    alt: "Programming workspace with monitors",
  },
  {
    src: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1600&q=80",
    alt: "Team discussing in front of whiteboard",
  },
];

export function GalleryCarouselSection() {
  return (
    <section className="mx-auto w-full px-4 py-14">
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {galleryImages.map((image) => (
            <CarouselItem key={image.src} className="basis-full md:basis-1/2 lg:basis-1/3">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-[280px] w-full object-cover md:h-[460px]"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3 top-1/2 border-white/30 bg-black/40 text-white hover:bg-black/60" />
        <CarouselNext className="right-3 top-1/2 border-white/30 bg-black/40 text-white hover:bg-black/60" />
      </Carousel>
    </section>
  );
}
