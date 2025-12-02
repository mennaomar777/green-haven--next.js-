import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-4 z-10">
      <Image
        src={logo}
        height={60}
        width={60}
        quality={100}
        alt="Green Haven logo"
      />
      <span className="text-md sm:text-xl font-semibold text-primary-100">
        Green Haven
      </span>
    </Link>
  );
}

export default Logo;
