
import Questions from "./componants/questions";
import Reviews from "./componants/reviews";
import ProblemTarget from "./componants/problem-target";
import Corousel from "./componants/corousel";
import Blog from "./componants/blog";
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
    </div>
  );
}
