import { AboutSection } from "@/components/main/about-section";
import { GalleryCarouselSection } from "@/components/main/gallery-carousel-section";
import { HeroSection } from "@/components/main/hero-section";

export default function MainPage() {
  return (
    <div>
      <HeroSection />
      <GalleryCarouselSection />
      <AboutSection />
    </div>
  );
}
