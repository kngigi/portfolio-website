import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  demoUrl,
}: {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  demoUrl: string;
}) => {
  return (
    <div>
      <div
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-52 md:h-72 rounded-t-xl relative group"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center gap-x-2">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white hover:text-white group/link"
            target="_blank"
          >
            {" "}
            <CodeBracketIcon className="h-10 w-10 text-[#adb7be] cursor-pointer hover:white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </Link>
          <Link
            href={demoUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white hover:text-white group/link"
            target="_blank"
          >
            {" "}
            <EyeIcon className="h-10 w-10 text-[#adb7be] cursor-pointer hover:white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 mt-3">
        <h5 className="font-semibold mb-2 text-xl">{title}</h5>
        <p className="text-[#adb7be]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
