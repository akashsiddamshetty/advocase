import { Dispatch, FC, SetStateAction, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import FileIcon from "./FileIcon";
import { cn } from "@/utils/utils";

const titles = [
  { id: 1, name: "Case Desc" },
  { id: 2, name: "Acts & Laws" },
  { id: 3, name: "Judgement" },
  { id: 4, name: "Templates" },
  { id: 5, name: "Questions" },
  { id: 6, name: "Support" },
];
interface Screen2Props {
  files: {
    name: string;
  }[];
  setScreen: Dispatch<SetStateAction<string>>;
}

const Screen2: FC<Screen2Props> = ({ setScreen, files }) => {
  const [selected, setSelected] = useState("Questions");
  return (
    <>
      <div className="bg-white p-4 h-full w-72 rounded-xl">
        <div className="flex items-center justify-between gap-4 ">
          <div className="bg-gray-100 rounded-full p-2">
            <FaChevronLeft />
          </div>
          <button
            onClick={() => setScreen("screen1")}
            className="bg-blue-600 text-white flex-1 px-6 py-2 rounded-lg"
          >
            Back To Home
          </button>
        </div>
        <div className="my-4 space-y-2">
          <h1 className="font-bold text-lg">Given Informations</h1>
          <div className="h-[2px] w-full  bg-gray-300"></div>
        </div>
        <div className="my-4 space-y-2">
          <h1 className="font-bold text-lg">Text Entered</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            libero enim culpa.
          </p>
          <div className="h-[2px]  w-full bg-gray-300"></div>
        </div>
        <div className="space-y-2">
          <h1 className="font-bold text-lg">Uploads</h1>
          <div className="bg-paleBlue p-4 rounded-xl">
            <h1 className="font-bold">
              uploaded files <span className="p-2  text-blue-400">3/5</span>
            </h1>
            <div className="space-y-2 my-2">
              {files.map((file, i) => {
                return (
                  <div key={i} className="bg-gray-100 rounded-lg p-2">
                    <FileIcon fileName={file.name}></FileIcon>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="my-4">
          <button
            onClick={() => setScreen("screen3")}
            className="w-full py-2 rounded-xl bg-blue-600 text-white"
          >
            Check Case Flow
          </button>
        </div>
      </div>
      <div className=" relative overflow-scroll rounded-xl h-full  flex-1">
        <div className="flex items-center justify-center">
          {titles.map((item) => {
            return (
              <button
                className={cn(
                  "flex-1 text-center bg-white rounded-t-xl p-2 font-semibold text-sm",
                  {
                    "bg-blue-600 text-white": item.name === selected,
                  }
                )}
                key={item.id}
                onClick={() => setSelected(item.name)}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        <div className="bg-white p-4  h-full overflow-hidden">
          <h1 className="text-lg font-bold">Questions</h1>
          <div className="space-x-2">
            <button className="bg-blue-600 text-white px-6 py-1 rounded-full">
              By Petitioner
            </button>
            <button className="border-2 px-6 py-1  rounded-full">
              By Respondent
            </button>
          </div>
          <div className="overflow-hidden ">
            <div className="space-y-2 py-2">
              <p className="font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                totam unde, beatae harum, explicabo necessitatibus placeat illo
                quasi non cupiditate doloremque nulla voluptatum iusto debitis
                libero itaque odio quis. Porro!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                veniam obcaecati, quasi quidem, possimus inventore aliquid
                praesentium molestiae at dicta deleniti vel nesciunt! Harum,
                libero fugit? Illum quaerat quasi quisquam!
              </p>
              <div className="w-full h-1 border-2"></div>
            </div>
            <div className="space-y-2 py-2">
              <p className="font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                totam unde, beatae harum, explicabo necessitatibus placeat illo
                quasi non cupiditate doloremque nulla voluptatum iusto debitis
                libero itaque odio quis. Porro!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                veniam obcaecati, quasi quidem, possimus inventore aliquid
                praesentium molestiae at dicta deleniti vel nesciunt! Harum,
                libero fugit? Illum quaerat quasi quisquam!
              </p>
              <div className="w-full h-1 border-2"></div>
            </div>
            <div className="space-y-2 py-2">
              <p className="font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                totam unde, beatae harum, explicabo necessitatibus placeat illo
                quasi non cupiditate doloremque nulla voluptatum iusto debitis
                libero itaque odio quis. Porro!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                veniam obcaecati, quasi quidem, possimus inventore aliquid
                praesentium molestiae at dicta deleniti vel nesciunt! Harum,
                libero fugit? Illum quaerat quasi quisquam!
              </p>
              <div className="w-full h-1 border-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Screen2;
