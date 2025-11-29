"use client";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Eye() {
  const emojiRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const emojiFaceRef = useRef<HTMLDivElement>(null);

  // extra refs for pupils and eyes
  const leftPupilRef = useRef<SVGGElement | null>(null);
  const rightPupilRef = useRef<SVGGElement | null>(null);
  const leftEyeRef = useRef<SVGSVGElement | null>(null);
  const rightEyeRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const emoji = emojiRef.current;
    const emojiFace = emojiFaceRef.current;
    const lp = leftPupilRef.current;
    const rp = rightPupilRef.current;
    const le = leftEyeRef.current;
    const re = rightEyeRef.current;

    if (!wrapper || !emoji || !emojiFace || !lp || !rp || !le || !re) return;

    const emojiMaxDisplacement = 50;
    const emojiFaceMaxDisplacement = 75;

    const clamp = (v: number, a: number, b: number) =>
      Math.max(a, Math.min(b, v));

    const moveEvent = (e: MouseEvent) => {
      const wrapperRect = wrapper.getBoundingClientRect();

      // whole face displacement (keeps previous behavior)
      const relX = e.clientX - (wrapperRect.left + wrapperRect.width / 2);
      const relY = e.clientY - (wrapperRect.top + wrapperRect.height / 2);

      const emojiDisplacementX = (relX / wrapperRect.width) * emojiMaxDisplacement;
      const emojiDisplacementY = (relY / wrapperRect.height) * emojiMaxDisplacement;
      const emojiFaceDisplacementX =
        (relX / wrapperRect.width) * emojiFaceMaxDisplacement;
      const emojiFaceDisplacementY =
        (relY / wrapperRect.height) * emojiFaceMaxDisplacement;

      gsap.to(emoji, {
        x: emojiDisplacementX,
        y: emojiDisplacementY,
        ease: "power3.out",
        duration: 0.35,
      });

      gsap.to(emojiFace, {
        x: emojiFaceDisplacementX,
        y: emojiFaceDisplacementY,
        ease: "power3.out",
        duration: 0.35,
      });

      // PUPIL FOLLOW logic (each pupil is a <g> so we can set x/y)
      const movePupil = (
        eyeSvg: SVGSVGElement,
        pupilGroup: SVGGElement,
        maxPx = 8
      ) => {
        const eyeRect = eyeSvg.getBoundingClientRect();
        const centerX = eyeRect.left + eyeRect.width / 2;
        const centerY = eyeRect.top + eyeRect.height / 2;

        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;

        // normalize by half-size so edge -> ~1, then clamp, then multiply by allowed pixels
        const nx = clamp(dx / (eyeRect.width / 2), -1, 1);
        const ny = clamp(dy / (eyeRect.height / 2), -1, 1);

        const px = nx * maxPx;
        const py = ny * maxPx;

        gsap.to(pupilGroup, {
          x: px,
          y: py,
          ease: "power3.out",
          duration: 0.25,
        });
      };

      movePupil(le, lp, 9); // left pupil up to 9px
      movePupil(re, rp, 9); // right pupil up to 9px
    };

    const leaveEvent = () => {
      // reset face + pupils
      gsap.to([emoji, emojiFace], {
        x: 0,
        y: 0,
        ease: "power3.out",
        duration: 1,
      });

      gsap.to([leftPupilRef.current, rightPupilRef.current], {
        x: 0,
        y: 0,
        ease: "power3.out",
        duration: 0.6,
      });
    };

    wrapper.addEventListener("mousemove", moveEvent);
    wrapper.addEventListener("mouseleave", leaveEvent);

    return () => {
      wrapper.removeEventListener("mousemove", moveEvent);
      wrapper.removeEventListener("mouseleave", leaveEvent);
    };
  }, []);

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] py-8"
      ref={wrapperRef}
    >
      {/* Sphere: tinted to #8B5CF6 via gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full"
        ref={emojiRef}
        style={{
          background:
            "radial-gradient(circle at 30% 25%, #A992FF 0%, #8B5CF6 45%, #6F3FE0 100%)",
          boxShadow:
            "inset 0 -12px 40px rgba(0,0,0,0.12), 0 8px 30px rgba(139,92,246,0.22)",
        }}
      >
        {/* face container - keep exact same positioning/size as your original */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[225px] h-[200px] flex flex-col"
          ref={emojiFaceRef}
        >
          {/* eyes row */}
          <div className="flex flex-1 justify-between items-center px-4">
            {/* Left eye SVG: white eye with black pupil as a <g> we move */}
            <svg
              ref={leftEyeRef}
              width="80"
              height="60"
              viewBox="0 0 80 60"
              xmlns="http://www.w3.org/2000/svg"
              className="block"
            >
              {/* white eye shape */}
              <rect
                x="4"
                y="6"
                rx="16"
                ry="16"
                width="72"
                height="48"
                fill="#F3F4F6"
              />
              {/* small highlight */}
              <circle cx="28" cy="20" r="4" fill="#ffffff" opacity="0.9" />
              {/* pupil group (we translate this group) */}
              <g
                ref={(node) => {
                  leftPupilRef.current = node;
                }}
                transform="translate(0,0)"
              >
                <circle cx="40" cy="32" r="16" fill="#000000" />
              </g>
            </svg>

            {/* Right eye SVG */}
            <svg
              ref={rightEyeRef}
              width="80"
              height="60"
              viewBox="0 0 80 60"
              xmlns="http://www.w3.org/2000/svg"
              className="block"
            >
              <rect
                x="4"
                y="6"
                rx="16"
                ry="16"
                width="72"
                height="48"
                fill="#F3F4F6"
              />
              <circle cx="28" cy="20" r="4" fill="#ffffff" opacity="0.9" />
              <g
                ref={(node) => {
                  rightPupilRef.current = node;
                }}
                transform="translate(0,0)"
              >
                <circle cx="40" cy="32" r="16" fill="#000000" />
              </g>
            </svg>
          </div>

          {/* mouth area: "wow" gesture via scale (scale up & down) */}
          <div className="flex flex-1 justify-center items-start pt-2">
            <motion.div
              animate={{
                scale: [1, 1.6, 1],
                transition: {
                  duration: 1.6,
                  ease: [0.22, 1, 0.36, 1],
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
              className="w-10 h-10 rounded-full bg-black"
              style={{ transformOrigin: "center" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
