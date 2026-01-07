"use client";
import { useEffect, useState } from "react";
import { cn } from "../../app/utils/cn";

type MeteorConfig = {
  left: number;
  delay: string;
  duration: string;
};

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteors, setMeteors] = useState<MeteorConfig[]>([]);

  useEffect(() => {
    const configs = Array.from({ length: number }).map((_, idx) => {
      const spread = 1200; // full screen width spread
      return {
        left: (idx / number) * spread - spread / 2,
        delay: `${Math.random() * 5}s`,
        duration: `${5 + Math.random() * 5}s`,
      };
    });

    setMeteors(configs);
  }, [number]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {meteors.map((meteor, idx) => (
        <span
          key={idx}
          className={cn(
            "animate-meteor-effect absolute top-[-40px] h-1 w-0.5 rotate-[25deg] rounded-full bg-slate-400",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-slate-400 before:to-transparent before:content-['']",
            className
          )}
          style={{
            left: `${meteor.left}px`,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        />
      ))}
    </div>
  );
};
