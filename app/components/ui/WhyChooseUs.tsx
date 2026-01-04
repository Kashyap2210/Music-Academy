import { musicSchoolContent } from "@/app/data/why_choose_us";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export default function WhyChooseUs() {
  return (
    <div className="h-full">
      <StickyScroll content={musicSchoolContent}></StickyScroll>
    </div>
  );
}
