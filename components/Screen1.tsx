import { Dispatch, FC, SetStateAction, useState } from "react";
import StatusComponent from "./StatusComponent";
import { useForm } from "react-hook-form";
import { FaNewspaper } from "react-icons/fa";
import FileIcon from "./FileIcon";
import { IoIosClose } from "react-icons/io";

interface Screen1Props {
  recentstudies: {
    id: number;
    title: string;
    last_updated: string;
    status: string;
  }[];
  files: {
    name: string;
  }[];
  setScreen: Dispatch<SetStateAction<string>>;
}

const Screen1: FC<Screen1Props> = ({ recentstudies, files, setScreen }) => {
  const [textCount, setTextCout] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit(() => {
    setScreen("screen2");
  });
  return (
    <>
      <div className="bg-white  rounded-xl p-4 h-full">
        <p className="font-bold">Recent Studies</p>
        <div className="my-2">
          {recentstudies.map((studies) => {
            const { id, title, last_updated, status } = studies;
            return (
              <div key={id} className="w-80 my-2 border-2 rounded-xl p-4">
                <p className="text-blue-400 font-bold capitalize ">{`"${title}"`}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span>{last_updated}</span>
                  <span className="capitalize font-bold text-sm">
                    <StatusComponent status={status} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <form
        onSubmit={onSubmit}
        className="relative h-full rounded-xl bg-white p-4 flex-1"
      >
        <p className="flex items-center gap-4 text-lg font-bold">
          <span className="text-blue-400 text-2xl">
            <FaNewspaper />
          </span>
          <span>
            Get complete info about any case from AI-driven research assistance
          </span>
        </p>
        <div className="relative overflow-hidden border-2 my-4 w-full h-20 rounded-xl">
          <textarea
            className="h-full w-full focus:outline-none p-2"
            id="text"
            maxLength={80}
            placeholder="Ex : Land dispute, Mumbai, recent judgment"
            {...register("text", {
              required: true,
              maxLength: 80,
              onChange: (e) => setTextCout(e.target.value.length),
            })}
          />
          <div className="absolute right-2 bottom-2 text-sm text-gray-400">
            {textCount}/80
          </div>
        </div>
        {errors.text?.type === "required" && (
          <p className="text-red-400">Text Is Required</p>
        )}

        <div className="w-full text-center flex items-center cursor-pointer font-bold justify-center flex-col gap-4 h-40 border-2 rounded-xl bg-gray-100 border-dotted">
          <p>
            Drag and drop here or click here to{" "}
            <span className="text-blue-400 underline capitalize">
              upload file
            </span>
          </p>
          <div>
            <h1>Maximum uploads : 1</h1>
            <p>File formats : JPG, PNG, docx, Pdf etc.</p>
          </div>
        </div>
        <div className="my-4">
          <h1 className="font-bold">
            Uploaded Files{" "}
            <span className="bg-blue-100 mx-4 rounded-lg px-2 text-blue-400">
              3/5
            </span>
          </h1>
          <div className="space-y-2 my-4 text-lg">
            {files.map((file, i) => {
              return (
                <div key={i} className="py-1 px-2 rounded-lg items-center gap-2 bg-gray-100 flex justify-between">
                  <FileIcon fileName={file.name} />
                  <IoIosClose />
                </div>
              );
            })}
          </div>
        </div>
        <button className="absolute rounded-full h-10  w-48 py-2 bg-custom-gradient text-white right-4 bottom-4">
          Start
        </button>
      </form>
    </>
  );
};
export default Screen1;
