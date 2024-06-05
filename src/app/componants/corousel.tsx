"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a2c8d8b6a42e610f78e10d_expert%201-p-1600.png",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d486cea3f09_Focus%20on%20KPIs%20that%20matter.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5150ea3f0a_Ease%20of%20use.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dab14ea3f0b_Purpose-built%20%26%20ever-improving%20tech.svg",
];
export default function Corousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<any>();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    slideRef.current.style.transition = "transform 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex]);

  return (
    <div className="p-32 bg-gray-200/65">
      <h1 className="text-4xl font-bold text-center">Get Crest and get...</h1>
      <div className="my-12 flex gap-12 justify-center">
        <button onClick={prevSlide}>left</button>
        <div className="w-4/5 rounded-3xl bg-white p-6 relative overflow-hidden py-28">
          <div className="flex gap-4" ref={slideRef}>
            {images.map((image, index) => (
              <div className="flex gap-10 p-8 w-full flex-shrink-0">
                <div key={index}>
                  <Image
                    src={image}
                    alt={`Slide ${index}`}
                    width={400}
                    height={450}
                  />
                </div>
                <div className="w-2/3 pe-16 pt-10">
                    <h1 className="text-3xl py-8 font-semibold">Deep domain expertise</h1>
                    <p>Our team members have years of experience leading supply chains for businesses ranging from $10M to $10B.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={nextSlide}>right</button>
      </div>
    </div>
  );
}
