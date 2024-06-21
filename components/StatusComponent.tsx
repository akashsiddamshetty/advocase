import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RiProgress3Fill } from "react-icons/ri";
import { IoCloseCircle } from "react-icons/io5";

interface StatusProps {
  status: string;
}

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
      <div className="bg-orange-100 text-orange-400 flex items-center gap-1 justify-center">
        <RiProgress3Fill />
        <span>In Progress</span>
      </div>
    );

  if (status === "failed")
    return (
      <div className="bg-red-100 text-red-400 flex items-center gap-1 justify-center">
        <IoCloseCircle />
        <span>Failed</span>
      </div>
    );

  return <></>;
};

const StatusComponent: React.FC<StatusProps> = ({ status }) => {
  return <div>{checkStatus(status)}</div>;
};

export default StatusComponent;
