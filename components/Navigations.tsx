"use client";
import { cn } from "@/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface NavigationsProps {}

import {
  FaHome,
  FaComments,
  FaNewspaper,
  FaPeopleArrows,
} from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const nav = [
  {
    id: 1,
    icon: <FaNewspaper />,
    name: "News Feed",
    route: "/newsfeed",
  },
  {
    id: 2,
    icon: <IoIosPeople />,
    name: "Find Lawyers",
    route: "/findlawyers",
  },
  {
    id: 3,
    icon: <FaHome />,
    name: "Home",
    route: "/",
  },
  {
    id: 4,
    icon: <FaPeopleArrows />,
    name: "Connections",
    route: "/connections",
  },
  {
    id: 5,
    icon: <FaComments />,
    name: "Chats",
    route: "/chats",
  },
];

const Navigations: FC<NavigationsProps> = ({}) => {
  const path = usePathname();
  return (
    <div className="flex items-center">
      {nav.map((items) => {
        const { id, name, icon, route } = items;
        return (
          <Link
            className={cn(
              "flex items-center font-bold text-sm px-8 py-2 gap-3",
              {
                "bg-custom-gradient text-white rounded-full": path === route,
              }
            )}
            href={route}
            key={id}
          >
            <span className="text-xl">{icon}</span>
            <span>{name}</span>
          </Link>
        );
      })}
    </div>
  );
};
export default Navigations;
