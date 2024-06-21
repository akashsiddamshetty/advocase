import { Dispatch, FC, SetStateAction } from "react";
import { FaCheckCircle, FaChevronLeft } from "react-icons/fa";
import StatusComponent from "./StatusComponent";
import { IoDocumentText } from "react-icons/io5";
import { cn } from "@/utils/utils";

const levels = [
  {
    id: 1,
    name: "start",
    status: "completed",
  },
  { id: 2, name: "continue", status: "completed" },
  { id: 3, name: "analysis", status: "completed" },
  { id: 4, name: "additional documents", status: "pending" },
  { id: 5, name: "relief suggestions", status: "pending" },
  { id: 6, name: "first draft", status: "pending" },
  { id: 7, name: "Q & A", status: "pending" },
  { id: 8, name: "final draft", status: "pending" },
];

interface Screen3Props {
  recentstudies: {
    id: number;
    title: string;
    last_updated: string;
    status: string;
  }[];
  setScreen: Dispatch<SetStateAction<string>>;
}

const Screen3: FC<Screen3Props> = ({ setScreen, recentstudies }) => {
  return (
    <>
      <div className="h-full p-4 bg-white rounded-xl w-72">
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
          <h1 className="font-bold text-lg">Your search</h1>
          <p>Lorem</p>
        </div>
        <div className="space-y-2">
          <h1 className="font-bold text-lg">Recents</h1>
          <div className="space-y-2 my-2">
            {recentstudies.map((studies) => {
              const { id, title, last_updated, status } = studies;
              return (
                <div
                  key={id}
                  className=" space-y-2 text-sm my-2 border-2 rounded-xl p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold">DEEDS</span>
                    <span className="capitalize font-bold text-sm">
                      <StatusComponent status={status} />
                    </span>
                  </div>
                  <p className="text-blue-400 font-bold capitalize ">{`"${title}"`}</p>
                  <span>{last_updated}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" overflow-hidden bg-white h-full space-y-2 rounded-xl p-4 flex-1">
        <div>
          <h1 className="text-lg font-bold ">Case Flow</h1>
          <p className="text-blue-400 font-bold">Select document for draft</p>
        </div>
        <div className="flex flex-col  gap-4 h-full">
          <div className="  flex gap-4 items-start justify-start">
            <div className="h-full flex flex-col items-center justify-center">
              <div className="h-4 w-4 bg-blue-600 rounded-full"></div>
              <div className=" flex-1 w-1 border-2"></div>
            </div>
            <div className=" flex w-full gap-2 flex-col">
              <h1 className="font-bold">Pre litigation</h1>
              <div className="flex-1 flex gap-2 border-2 w-full p-2 rounded-xl ">
                <IoDocumentText />
                <div className="truncate">
                  <h1 className="font-bold">Legal Notice</h1>
                  <p className=" w-80 truncate ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores dolorum sed velit dolorem ut nam aut iste laudantium
                    quibusdam et. Harum sint aliquam suscipit possimus quasi
                    fugiat eos! Ipsam, ab!
                  </p>
                </div>
              </div>
              <div className="flex-1 flex gap-2 border-2 w-full p-2 rounded-xl ">
                <IoDocumentText />
                <div className="truncate">
                  <h1 className="font-bold">Legal Notice</h1>
                  <p className=" w-80 truncate ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores dolorum sed velit dolorem ut nam aut iste laudantium
                    quibusdam et. Harum sint aliquam suscipit possimus quasi
                    fugiat eos! Ipsam, ab!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="  flex gap-4 items-start justify-start">
            <div className="h-full flex flex-col items-center justify-center">
              <div className="h-4 w-4 bg-blue-600 rounded-full"></div>
              <div className=" flex-1 w-1 border-2"></div>
            </div>
            <div className=" flex w-full gap-2 flex-col">
              <h1 className="font-bold">Pre litigation</h1>
              <div className="flex-1 flex gap-2 border-2 w-full p-2 rounded-xl ">
                <IoDocumentText />
                <div className="truncate">
                  <h1 className="font-bold">Legal Notice</h1>
                  <p className=" w-80 truncate ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores dolorum sed velit dolorem ut nam aut iste laudantium
                    quibusdam et. Harum sint aliquam suscipit possimus quasi
                    fugiat eos! Ipsam, ab!
                  </p>
                </div>
              </div>
              <div className="flex-1 flex gap-2 border-2 w-full p-2 rounded-xl ">
                <IoDocumentText />
                <div className="truncate">
                  <h1 className="font-bold">Legal Notice</h1>
                  <p className=" w-80 truncate ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores dolorum sed velit dolorem ut nam aut iste laudantium
                    quibusdam et. Harum sint aliquam suscipit possimus quasi
                    fugiat eos! Ipsam, ab!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="  flex gap-4 items-start  justify-start">
            <div className="h-full flex flex-col items-center justify-center">
              <div className="h-4 w-4 bg-blue-600 rounded-full"></div>
              <div className=" flex-1 w-1 border-2"></div>
            </div>
            <div className=" flex w-full gap-2 flex-col">
              <h1 className="font-bold">Pre litigation</h1>
              <div className="flex-1 flex gap-2 border-2 w-full p-2 rounded-xl ">
                <IoDocumentText />
                <div className="truncate">
                  <h1 className="font-bold">Legal Notice</h1>
                  <p className=" w-80 truncate ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores dolorum sed velit dolorem ut nam aut iste laudantium
                    quibusdam et. Harum sint aliquam suscipit possimus quasi
                    fugiat eos! Ipsam, ab!
                  </p>
                </div>
              </div>
              <div className="flex-1 flex gap-2 border-2 w-full p-2 rounded-xl ">
                <IoDocumentText />
                <div className="truncate">
                  <h1 className="font-bold">Legal Notice</h1>
                  <p className=" w-80 truncate ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores dolorum sed velit dolorem ut nam aut iste laudantium
                    quibusdam et. Harum sint aliquam suscipit possimus quasi
                    fugiat eos! Ipsam, ab!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col flex p-4 justify-between h-full bg-white rounded-xl w-60">
        <div>
          {levels.map((level, i) => {
            const { id, name, status } = level;
            return (
              <div
                key={id}
                className={cn(
                  "h-12 flex items-start justify-start text-gray-400  text-sm capitalize w-full gap-2",
                  {
                    "text-blue-500 font-bold": status === "completed",
                  }
                )}
              >
                <div className="flex flex-col text-lg  gap-[1px] items-center h-full">
                  <div className="h-4 w-4">
                    <FaCheckCircle />
                  </div>
                  {id !== levels.length && (
                    <div
                      className={cn("h-full w-[2px] border-2 rounded-full ", {
                        "border-blue-400": status === "completed",
                      })}
                    ></div>
                  )}
                </div>
                <div>{name}</div>
              </div>
            );
          })}
        </div>
        <button className="w-full rounded-full p-2 text-white bg-blue-600">
          Continue
        </button>
      </div>
    </>
  );
};
export default Screen3;
