import Link from "next/link";
import ProjectSection from "@/component/work";
import { MoveRight } from "lucide-react";
import Tool from "@/component/tool";
import ClientReview from "@/component/clientreview";

export default function Work() {


  return (
    <div className="w-full h-full  p-5 md:p-15 pt-30 md:pt-40 ">
      <div className="mb-20">
        <div className="flex justify-between items-end flex-wrap">
          <h2 className="highlightFont text-white text-6xl md:text-9xl font-bold mb-10 sm:mb-0 ">
            SELECTED <br /> WORKS
            <span className="text-(--highlightColor)">.</span>
          </h2>
          <Link
            href={`/work`}
            className="w-50 h-10 font-medium p-5  text-black bg-white flex items-center  rounded-4xl"
          >
            <div className="flex items-center">
              <p className="mr-1">View all my work</p>
              <MoveRight />
            </div>
          </Link>
        </div>
        <ProjectSection />
      </div>
      <div className="my-5 ">
        <p className="highlightFont text-4xl text-center mb-20">
          TOOLS I WORK WITH
        </p>
        <Tool />
      </div>
      <ClientReview />
    </div>
  );
}
