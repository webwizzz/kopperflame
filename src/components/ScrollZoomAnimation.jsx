"use client"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollZoomAnimation() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const rightPersonRef = useRef(null);
  const leftPersonRef = useRef(null);
  const rightNameRef = useRef(null);
  const leftNameRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const rightPerson = rightPersonRef.current;
    const leftPerson = leftPersonRef.current;
    const rightName = rightNameRef.current;
    const leftName = leftNameRef.current;

    if (!container || !image || !rightPerson || !leftPerson || !rightName || !leftName) return;

    console.log("ScrollZoomAnimation Initialized");

    // ✅ Clear old animations
    ScrollTrigger.getAll().forEach((st) => st.kill());
    gsap.killTweensOf("*");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1,
      },
    });

    gsap.set(image, { scale: 2, xPercent: -30, transformOrigin: "center center" });
    gsap.set([rightPerson, rightName], { autoAlpha: 1 });
    gsap.set([leftPerson, leftName], { autoAlpha: 0 });

    tl.to(image, { scale: 1, xPercent: 0, duration: 1, ease: "none" })
      .to([rightPerson, rightName], { autoAlpha: 0, duration: 0.5, ease: "power2.inOut" }, "<")
      .to(image, { scale: 2, xPercent: 50, duration: 1, ease: "none" })
      .to([leftPerson, leftName], { autoAlpha: 1, duration: 0.5, ease: "power2.inOut" }, "<+=0.5");

    return () => {
      console.log("ScrollZoomAnimation Cleanup");
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf("*");
    };
  }, []); // Only runs on mount

  return (
    <div className="relative h-screen mx-auto mt-10 w-full overflow-hidden bg-black" ref={containerRef}>
      <div
        ref={imageRef}
        className="h-full w-full bg-contain bg-center bg-no-repeat transition-opacity duration-500 opacity-100"
        style={{ backgroundImage: `url('/IMG_2874.JPG')` }}
      />
      <div ref={rightNameRef} className="absolute top-16 right-7 text-white bg-[#171717] bg-opacity-70 p-4 rounded-md">
        <h2 className="text-4xl font-bold font-playfair">Shruti Mohan</h2>
      </div>
      <div ref={rightPersonRef} className="absolute bottom-0 right-16 text-white bg-[#171717] bg-opacity-70 p-8 rounded-md max-w-[30rem]">
        <p className="text-sm lg:text-md md:text-md font-lato leading-[1.4]">
          The <span className="font-semibold">Chief Operating Officer</span> of Kopper Flame  is the operational backbone of Kopper Flame . With her expertise in building and scaling processes, Shruti ensures seamless execution across all verticals of the agency. Her leadership has driven the company to adapt and thrive in a rapidly changing digital environment, delivering consistent results for clients.

        </p>
      </div>
      <div ref={leftNameRef} className="absolute top-16 left-7 text-white bg-[#171717] bg-opacity-70 p-4 rounded-md">
        <h2 className="text-4xl font-bold font-playfair">Rishabh Suman Kapoor</h2>
      </div>
      <div ref={leftPersonRef} className="absolute bottom-0 left-9 text-white bg-[#171717] bg-opacity-70 p-8 rounded-md max-w-md">
        <p className="text-sm lg:text-md md:text-md font-lato leading-[1.4]">
          The <span className="font-semibold">Chief Executive Officer</span> of Kopper Flame  , is the visionary mind behind Kopper Flame ’s growth. His deep understanding of marketing strategy, design, and technology has been instrumental in positioning the agency as a leader in the industry. Rishabh’s unwavering focus on innovation and client success has shaped the agency’s philosophy of delivering measurable impact with every project.

        </p>
      </div>
    </div>
  );
}
