"use Client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { HoverBorderGradient } from "@/components/ui/hover-button-gradient";
import Link from "next/link";
import courseData from "../../data/music_courses.json";

export interface ICourse {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

export default function FeaturedCourses() {
  const featuredCourses: ICourse[] = courseData.courses.filter(
    (course: ICourse) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With The Best
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course) => (
            <div key={course.id} className="flex justify-center ">
              <BackgroundGradient
                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm"
                animate={true}
              >
                <div className="p-4 sm:p-6 flex flex-col items-center text-center grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 grow">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <HoverBorderGradient>
            <Link href={"/courses"}>View All Courses</Link>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
}
