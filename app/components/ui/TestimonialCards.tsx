import { musicSchoolTestimonials } from "@/app/data/testimonial_cards";
import { GridBackgroundDemo } from "@/components/ui/grid-background-demo";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function MusicSchoolTestimonialCards() {
  return (
    <div className="h-160 w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <GridBackgroundDemo>
        <h2 className="text-3xl font-bold text-center mb-8">
          Hear our Harmony: Voices Of Success
        </h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={musicSchoolTestimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </GridBackgroundDemo>
    </div>
  );
}
