"use client";
import { featuredWebinars } from "@/app/data/featured_webinars";
import { HoverEffect } from "@/components/ui/card-hover-effects";
import { HoverBorderGradient } from "@/components/ui/hover-button-gradient";
import Link from "next/link";

function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: `/webinars/${webinar.slug}`,
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <HoverBorderGradient>
            <Link href={"/courses"}>View All Courses</Link>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
