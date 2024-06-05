import Image from "next/image";

export default function Questions() {
  return (
    <div className="my-16 mx-32">
      <h1 className="text-4xl font-bold text-center">
        Four key questions answered by Crest
      </h1>
      <div className="flex justify-between mt-20">
        <div className="flex flex-col gap-4 p-6 bg-[rgb(241,233,252)] rounded-2xl border w-[280px]">
          <Image src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg" alt="icon" width={50} height={50} />
          <h1 className="text-2xl font-semibold">What to order</h1>
          <h1>
            Get accurate demand and days to stock out. Automate purchase
            planning so you can always have what you need for your next sales
            cycle.
          </h1>
        </div>
        <div className="flex flex-col gap-4 p-6 bg-[rgb(241,233,252)] rounded-2xl border w-[280px]">
          <Image src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg" alt="icon" width={50} height={50} />
          <h1 className="text-2xl font-semibold">When to order</h1>
          <h1>
            Have up-to-date inventory, storage, sales velocity, and demand. Get
            timely order suggestions so you're never left guessing.
          </h1>
        </div>
        <div className="flex flex-col gap-4 p-6 bg-[rgb(241,233,252)] rounded-2xl border w-[280px]">
          <Image src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg" alt="icon" width={50} height={50} />
          <h1 className="text-2xl font-semibold">How much to stock</h1>
          <h1>
            Get inventory requirements for every node, for every SKU. So you
            avoid out-of-stock situations, even during demand spikes.
          </h1>
        </div>
        <div className="flex flex-col gap-4 p-6 bg-[rgb(241,233,252)] rounded-2xl border w-[280px]">
          <Image src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg" alt="icon" width={50} height={50} />
          <h1 className="text-2xl font-semibold">Where to place</h1>
          <h1>
            Our tool suggests how to move stock within your supply chain. So
            you'll always have products available across cities.
          </h1>
        </div>
      </div>
    </div>
  );
}
