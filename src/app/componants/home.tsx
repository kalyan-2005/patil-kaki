import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex bg-primary gap-8 text-white pt-24 min-h-dvh">
        <div className="ps-32 flex flex-col gap-8 pe-24">
          <h1 className="text-6xl font-semibold leading-relaxed pe-32 pt-4">
            Every order fulfilled, <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r via-pink-400 from-[#F48D88] to-violet-400">on time.</span>
          </h1>
          <p>
            Eliminate overstocking and under-stocking with Crest. Built by
            supply-chain experts, it brings the same technology used by large
            global brands to power fast-growing startups. In short, we make
            supply meet demand, and then help you grow both.
          </p>
          <div className="pt-4 relative">
            <button className="p-2 px-4 rounded-full border-pink-300 border-2 inline-block text-transparent hover:text-white bg-clip-text hover:bg-clip-border hover:border-none bg-gradient-to-r via-pink-400 from-[#F48D88] to-violet-400">
              Get started with Crest
            </button>
            <Image className="absolute right-56 top-8" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d1777671aadb7b8492b5f9_hero-home-cta%20right%20to%20left.svg"  alt="hero" width={200} height={600} />
          </div>
        </div>
        <div>
          <Image
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg"
            className="w-[1800px]"
            alt="hero"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="bg-primary rounded-b-full w-full h-24"></div>
    </>
  );
}
