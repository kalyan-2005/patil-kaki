"use client";

import Image from "next/image";
import { useState } from "react";

const features = [
  {
    name: "Accurate Demand Forecasting",
    img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-500.webp",
    desc: "Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts don't: trends, real-time market signals, promotional activities, and even logistics disruptions.",
  },
  {
    name: "HELIX: Workflow Automation",
    img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64b9dd79c71fad2f6ea24_S%26OP-p-500.webp",
    desc: "Build and automate custom S&OP workflows to enhance productivity and streamline your processes. Crest helps you get a bird's eye view of your supply chain, and help you do things a spreadsheet never can.",
  },
  {
    name: "Automated Purchase Planning",
    img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bd0e4b4b78267e66b04_Purchase%20planning-p-500.webp",
    desc: "Never miss an order, and know exactly how much to order, when, and from whom. This is made possible with constant inventory tracking and automated PO generation. What's more, Crest improves with every planning cycle as the data set gets richer.",
  },
  {
    name: "Automated Distribution Planning",
    img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d89a9ea3f05_distribution%2520planning%2520type-2%2520-p-500.webp",
    desc: "Faster replenishment cycles mean more working capital for you. Granular warehouse and store-level insights help you optimally allocate materials and inventory. Say goodbye to stock-outs and excess inventory.",
  },
  {
    name: "Easy Integration",
    img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d3395ea3f06_integration%2520type-2-p-500.webp",
    desc: "From all online store solutions to cloud ERPs, Crest integrates seamlessly with your current tech and ops stack. What's more? Connecting them to Crest will give you actionable insights.",
  },
  {
    name: "Custom Dashboards",
    img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64366b9b4373ee32f68ac19c_dashboard%20ss-p-500.webp",
    desc: "Create customised dashboards to identify important trends, patterns, and insights. Tailor them to match the unique requirements of your team, empowering them to extract data in a user-friendly format that can be easily comprehended.",
  },
  {
    name: "Consensus Planning",
    img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/6634db1d80804c8f875b196c_consen%20home%20-p-500.png",
    desc: "Get inputs from all major stakeholders for the forecast numbers with a multi-level approval process. Compare & visualise the impact of the numbers on major KPIs in real time and take informed decisions with Scenario Planning",
  },
];
export default function ProblemTarget() {
  const [featureNo, setFeatureNo] = useState<number>(0);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-28">
        Things your spreadsheet wishes it could do
      </h1>
      <div className="flex">
        <div className="w-1/2 px-32">
          {features.map((feature, index) => {
            return (
              <div
                className="py-6 border-b border-gray-300 cursor-pointer"
                onClick={() => setFeatureNo(index)}
              >
                <h1 className="text-2xl font-semibold">{feature.name}</h1>
                {index === featureNo && (
                  <>
                    <p className="pt-4">{feature.desc}</p>
                    <h1 className="py-2 font-semibold">Learn more</h1>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <div className="w-1/2 rounded-l-xl bg-purple-100">
            <Image src={features[featureNo].img} className="block m-auto mt-40 w-4/5" alt="image" width={500} height={500} />
        </div>
      </div>
      <div className="m-auto py-14 flex justify-center"><button className="p-2 px-4 rounded-full border">View all features</button></div>
    </div>
  );
}
