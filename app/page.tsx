"use client";
import FileIcon from "@/components/FileIcon";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheckCircle, FaFilePdf, FaNewspaper } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { RiProgress3Fill } from "react-icons/ri";

const checkStatus = (status: string) => {
  if (status === "completed")
    return (
      <div className="bg-green-100 flex items-center justify-center gap-1 text-green-400">
        <FaCheckCircle />
        <span>Completed</span>
      </div>
    );
  if (status === "in progress")
    return (
      <div className="bg-orange-100 text-orange-400 flex items-center  gap-1 justify-center">
        <RiProgress3Fill />
        <span>In Progress</span>
      </div>
    );

  if (status === "failed")
    return (
      <div className="bg-red-100 text-red-400 flex items-center gap-1  justify-center">
        <IoCloseCircle />
        <span>failed</span>
      </div>
    );
};

const recentstudies = [
  {
    id: 1,
    title: "Dog bite complaint",
    last_updated: "2 days ago",
    status: "completed",
  },
  {
    id: 2,
    title: "The Cyberbullying Conspiracy",
    last_updated: "1 day ago",
    status: "in progress",
  },
  {
    id: 3,
    title: "Financial Fraud Investigation",
    last_updated: "3 days ago",
    status: "failed",
  },
  {
    id: 4,
    title: "Market Research Analysis",
    last_updated: "5 days ago",
    status: "completed",
  },
];

export default function Home() {
  const [textCount, setTextCout] = useState(0);
  const files = [
    {
      name: "case document.pdf",
    },
    {
      name: "case document.docx",
    },
    { name: "case document.docx" },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
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
                    {checkStatus(status)}
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
              return <FileIcon key={i} fileName={file.name} />;
            })}
          </div>
        </div>
        <button className="absolute rounded-full h-10  w-48 py-2 bg-custom-gradient text-white right-4 bottom-4">
          Start
        </button>
      </form>
    </>
  );
}
