import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex bg-primary gap-8 text-white pt-24 min-h-dvh">
        <div className="ps-32 flex flex-col gap-8 pe-24">
          <h1 className="text-6xl font-semibold leading-relaxed pe-32 pt-4">
            Every order fulfilled, <span>on time.</span>
          </h1>
          <p>
            Eliminate overstocking and under-stocking with Crest. Built by
            supply-chain experts, it brings the same technology used by large
            global brands to power fast-growing startups. In short, we make
            supply meet demand, and then help you grow both.
          </p>
          <div className="pt-4">
            <button className="p-2 px-4 rounded-full border">
              Get started with Crest
            </button>
          </div>
        </div>
        <div className="">
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
