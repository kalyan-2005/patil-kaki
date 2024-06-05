import Image from "next/image";
import Header from "./componants/header";
import Questions from "./componants/questions";
import Reviews from "./componants/reviews";
import ProblemTarget from "./componants/problem-target";
import Corousel from "./componants/corousel";
import Blog from "./componants/blog";
import GrowFaster from "./componants/grow-faster";
import Footer from "./componants/footer";
import Home from "./componants/home";

export default function Page() {
  return (
    <div>
      <Home/>
      <Questions/>
      <Reviews/>
      <ProblemTarget/>
      <Corousel/>
      <Blog/>
      <GrowFaster/>
      <Footer/>
    </div>
  );
}
