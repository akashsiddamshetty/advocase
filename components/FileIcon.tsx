import { FaFilePdf, FaFileWord, FaFileExcel, FaFileAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

interface FileIconProps {
  fileName: string;
}

const FileIcon: React.FC<FileIconProps> = ({ fileName }) => {
  const getIconAndColor = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase();
    switch (extension) {
      case "pdf":
        return { icon: <FaFilePdf />, color: "text-red-500" };
      case "doc":
      case "docx":
        return { icon: <FaFileWord />, color: "text-blue-500" };
      case "xls":
      case "xlsx":
        return { icon: <FaFileExcel />, color: "text-green-500" };
      default:
        return { icon: <FaFileAlt />, color: "text-gray-500" };
    }
  };

  const { icon, color } = getIconAndColor(fileName);

  return (
    <div className="flex py-1 px-2 rounded-lg items-center space-x-2 bg-gray-100 ">
      <span className={`text-2xl ${color}`}>{icon}</span>
      <span>{fileName}</span>
      <IoIosClose />
    </div>
  );
};

export default FileIcon;
