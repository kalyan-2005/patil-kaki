"use client";
import { profile } from "console";
import Image from "next/image";
import { useState } from "react";

const images = [
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958d1b6be6bd4e44c51_sylvi.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958030e4b24786a6907_tahiliya.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/652673d679d1942e616b3675_everloom.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471d9f187d3886afcf0c_swtantra.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471d19ebc9f547ee13d1_aroka.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ef2f2ec313a3f5557_athlos.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471e19ebc9f547ee1453_the%20whole%20truth.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ebeab55128d85b2a8_zavya.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ec91cc7a39f32fdd8_drip%20project.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abd73c0bc5eae6cf1aa65e_samosa%20party%20logo.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aabb032484e3993df3d_wow.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aaac27309c4dfd77888_pilgrim%201.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb510685690c8d8b1bdc_rr%20cable.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb4280dc875e2081fcc1_PLIX.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c8d12e2df177eeec2_ajanta.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77ce4473d4ee696e286_TAILOR%20AND%20CIRCUS.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c2b88fe75cb4e9e62_BLUE%20TRIBE.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c7ce8d5a488d39c51_maisha.svg",
];
const reviews = [
  {
    name: "Diksha Pande",
    profile:
      "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp",
    company: "Co-founder, Samosa Party",
    logo: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a48634ed59555eb9125770_samosa.svg",
    review:
      "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
    img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddc11c29c3652662f0739_samosa%20party%20image.webp",
    points: [
      { tag: "upto 95%", desc: "Demand Fulfilment" },
      { tag: "< 3%", desc: "Daily Stock-out" },
    ],
  },
  {
    name: "Kirti Goel",
    profile:
      "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddd1080709540ff764308_P-Tal%20founder.jpg",
    company: "Co-founder, P-TAL",
    logo: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664d8f654c71b6204bdf301c_P%20TAL%20logo.svg",
    review:
      "As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked.While we had already implemented Crest I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have.",
    img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664c90f75b0f0e735016706b_P-tal.webp",
    points: [
      { tag: "Automated Invoice Reconciliation" },
      { tag: "Channel wise Sales Classification" },
    ],
  },
];

export default function Reviews() {
  const [reviewNo, setReviewNo] = useState<number>(0);
  return (
    <div className="overflow-hidden">
      <div className="flex gap-28 animate-marquee whitespace-nowrap">
        {images.map((image) => (
          <Image
            key={image}
            src={image}
            alt="image"
            width={130}
            height={150}
            className="inline-block"
          />
        ))}
      </div>
      <div className="flex px-32 justify-between">
        <div className="w-3/5">
          <p>{reviews[reviewNo].review}</p>
          <div className="flex justify-between pt-12 items-center">
            <div className="flex gap-4 items-center">
              <div>
                <Image
                  src={reviews[reviewNo].profile}
                  className="rounded-full"
                  alt="profile"
                  width={60}
                  height={60}
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold">
                  {reviews[reviewNo].name}
                </h1>
                <h1>{reviews[reviewNo].company}</h1>
              </div>
            </div>
            <div>
              <Image
                src={reviews[reviewNo].logo}
                alt="logo"
                className={`w-24 ${reviewNo === 1 && "w-14"}`}
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className="flex gap-6 py-6">
            <button
              onClick={
                reviewNo === 0
                  ? () => setReviewNo(reviews.length - 1)
                  : () => setReviewNo((reviewNo - 1) % reviews.length)
              }
            >
              <Image
                src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
                alt="arrow"
                className="transform rotate-180"
                width={30}
                height={30}
              />
            </button>
            <button
              onClick={() => setReviewNo((reviewNo + 1) % reviews.length)}
            >
              <Image
                src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
                alt="arrow"
                width={30}
                height={30}
              />
            </button>
          </div>
          <div className="flex flex-wrap gap-4 mt-20">
            {reviews[reviewNo].points.map((point) => {
              return (
                <div className="min-w-[250px] max-w-[300px] rounded-xl p-4 bg-[#F1E9FC] text-center">
                  <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
                    {point.tag}
                  </h1>
                  {point.desc && <p className="pt-4">{point.desc}</p>}
                </div>
              );
            })}
          </div>
        </div>
        <div className="border-2 border-pink-300 rounded-2xl w-[400px]">
          <Image
            src={reviews[reviewNo].img}
            className="rounded-2xl h-full object-cover object-right"
            alt="image"
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  );
}
