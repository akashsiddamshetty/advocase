import Image from "next/image";
import { FC } from "react";
import { IoNotifications, IoSettings } from "react-icons/io5";

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
  return (
    <div className="flex text-2xl cursor-pointer items-center justify-center gap-4">
      <IoSettings />
      <IoNotifications />
      <div className="relative rounded-full  h-10 w-10 overflow-hidden">
        <Image
          src="/profile.png"
          alt="profile"
          height={10}
          width={10}
          className="object-fill h-full w-full"
        />
      </div>
    </div>
  );
};
export default Menu;
