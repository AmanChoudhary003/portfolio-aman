import Link from "next/link";

import { MoveRight } from "lucide-react";
import { workSectionData } from "@/constant/constant";
export default function Work() {
  return (
    <div className="p-10">
      <div className="flex justify-between items-end">
        <h2 className="highlightFont text-white text-6xl md:text-9xl font-bold">
          SELECTED <br /> WORKS
          <span className="text-(--highlightColor)">.</span>
        </h2>

        <Link
          href={``}
          className="w-50 h-10 font-medium p-5  text-black bg-white flex items-center  rounded-4xl"
        >
          <div className="flex items-center">
            <p className="mr-1">View all my work</p>
            <MoveRight />
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-2">
        {workSectionData.map((work, index) => {
          return (
            <div className="col-span-1">
              <div className="w-full h-full relative">{/* <Image /> */}</div>
              <div>
                <p className="text-white mb-1 font-medium text-xl">{`${work.name}-${work.date}`}</p>
                <p>{work.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
