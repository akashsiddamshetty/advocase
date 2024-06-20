import Image from "next/image";
import { FC } from "react";

interface MenAtWorkProps {}

const MenAtWork: FC<MenAtWorkProps> = ({}) => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className=" text-2xl capitalize font-bold  flex items-center flex-col text-center">
        <Image
          src="/menatwork.jpg"
          alt="men at work"
          height={100}
          width={100}
        />
        <p>Work in Progress</p>
      </div>
    </div>
  );
};
export default MenAtWork;
