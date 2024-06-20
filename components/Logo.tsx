import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="logo" height={50} width={150} />
    </Link>
  );
};
export default Logo;
