"use client";
import { useState } from "react";
import Reviews from "../componants/reviews";
import Image from "next/image";

export default function Pricing() {
  const [plan, setPlan] = useState("Monthly");
  const [cost, setCost] = useState(22000);
  const [counter1, setCounter1] = useState(2);
  const [counter2, setCounter2] = useState(1);
  const [counter3, setCounter3] = useState(1);
  return (
    <div>
      <div className="bg-primary px-32 py-40 text-white text-center m-auto flex flex-col gap-8 items-center">
        <h1 className="text-6xl font-bold">Plans & Pricing</h1>
        <div className="flex p-1 text-black font-semibold rounded-full bg-violet-300 mt-4 w-60 justify-between cursor-pointer">
          <div
            onClick={() => {
              setPlan("Monthly");
              setCost(22000);
            }}
            className={`p-2 px-6 rounded-full ${
              plan === "Monthly" ? "bg-white text-black" : ""
            }`}
          >
            Monthly
          </div>
          <div
            onClick={() => {
              setPlan("Yearly");
              setCost(220000);
            }}
            className={`p-2 px-6 rounded-full ${
              plan === "Yearly" ? "bg-white text-black" : ""
            }`}
          >
            Yearly
          </div>
          <div className="absolute right-[530px] top-[18.5rem]">
            <Image src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/659e6ac0790d84119822bcea_save%20upto%2020%25%20.svg" alt="icon" width={100} height={100} />
          </div>
        </div>
        <div className="flex gap-8 justify-center items-center text-3xl">
          <h1>Your Estimate</h1>
          <h1 className="text-2xl p-2 px-10 rounded-full bg-gray-800">
            INR {cost+counter1*1000+counter2*2000+counter3*3000}/{plan}
          </h1>
        </div>
      </div>
      <div className="bg-primary rounded-b-full h-32 mb-96 relative">
        <div className="flex gap-8 absolute -top-20 left-60">
          <div className="flex flex-col gap-8 bg-violet-100 w-[320px] text-center rounded-3xl p-10 items-center justify-between">
            <h1 className="font-semibold text-2xl">WORKFLOWS</h1>
            <Image src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/659d2e9e24c249c32f835718_Workflow%20Infograph.svg" alt="icon" width={150} height={150} />
            <p>
              Easily create your own S&OP workflows, replicate and automate your
              current excel based process. Our workflow builder tool, Helix
              consists of multi-functional cards which can be assembled and
              configured to streamline your planning processes.
            </p>
            <div className="flex justify-between w-full p-2 px-4 rounded-full bg-white">
              <h1 className="font-semibold">Count</h1>
              <div className="flex gap-2">
                <h1 onClick={counter1>2?()=>setCounter1(counter1-1):()=>setCounter1(2)} className="font-semibold p-1 rounded-full w-6 h-6 bg-violet-300 flex items-center justify-center cursor-pointer">-</h1>
                <h1>{counter1}</h1>
                <h1 onClick={()=>setCounter1(counter1+1)} className="font-semibold p-1 rounded-full w-6 h-6 bg-violet-300 flex items-center justify-center cursor-pointer">+</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 bg-violet-100 w-[320px] text-center rounded-3xl p-10 items-center justify-between">
            <h1 className="font-semibold text-2xl">WORKFLOWS</h1>
            <Image src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/659d2e9e24c249c32f835718_Workflow%20Infograph.svg" alt="icon" width={150} height={150} />
            <p>
              Easily create your own S&OP workflows, replicate and automate your
              current excel based process. Our workflow builder tool, Helix
              consists of multi-functional cards which can be assembled and
              configured to streamline your planning processes.
            </p>
            <div className="flex justify-between w-full p-2 rounded-full bg-white">
              <h1 className="font-semibold">Count</h1>
              <div className="flex gap-2">
                <h1 onClick={counter2>1?()=>setCounter2(counter2-1):()=>setCounter2(1)} className="font-semibold p-1 rounded-full w-6 h-6 bg-violet-300 flex items-center justify-center cursor-pointer">-</h1>
                <h1>{counter2}</h1>
                <h1 onClick={()=>setCounter2(counter2+1)} className="font-semibold p-1 rounded-full w-6 h-6 bg-violet-300 flex items-center justify-center cursor-pointer">+</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 bg-violet-100 w-[320px] text-center rounded-3xl p-10 items-center justify-between">
            <h1 className="font-semibold text-2xl">WORKFLOWS</h1>
            <Image src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/659d2e9e24c249c32f835718_Workflow%20Infograph.svg" alt="icon" width={150} height={150} />
            <p>
              Easily create your own S&OP workflows, replicate and automate your
              current excel based process. Our workflow builder tool, Helix
              consists of multi-functional cards which can be assembled and
              configured to streamline your planning processes.
            </p>
            <div className="flex justify-between w-full p-2 rounded-full bg-white">
              <h1 className="font-semibold">Count</h1>
              <div className="flex gap-2">
                <h1 onClick={counter3>1?()=>setCounter3(counter3-1):()=>setCounter3(1)} className="font-semibold p-1 rounded-full w-6 h-6 bg-violet-300 flex items-center justify-center cursor-pointer">-</h1>
                <h1>{counter3}</h1>
                <h1 onClick={()=>setCounter3(counter3+1)} className="font-semibold p-1 rounded-full w-6 h-6 bg-violet-300 flex items-center justify-center cursor-pointer">+</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  );
}
