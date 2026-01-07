"use client";
import { Input } from "@/components/ui/input";
import { Meteors } from "@/components/ui/meteor";
import { Button } from "@/components/ui/moving-border";

function page() {
  return (
    <div className="py-8 flex justify-center">
      <form className="flex flex-col gap-4 py-4 w-full max-w-3xl z-40">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold pt-24 text-white">
          Contact Us
        </h1>

        <p className="text-base md:text-lg text-white text-center mb-4">
          We're here to help with any questions about our courses, programs, or
          events. Reach out & let us know how we can assist you in your musical
          journey.
        </p>

        <Input
          type="email"
          placeholder="Email"
          className="w-full bg-black h-12"
        />

        <div className="flex flex-col items-start gap-4">
          <textarea
            placeholder="Message"
            className="
            w-full h-56
            resize-none
            rounded-lg
            border border-white/20
bg-black
            text-white
              p-4
              focus:outline-none
              focus:ring-2
              focus:ring-white/20
             "
          />

          <Button className="bg-black">Send Message</Button>
        </div>
      </form>
      <Meteors number={100} className="" />
    </div>
  );
}

export default page;
