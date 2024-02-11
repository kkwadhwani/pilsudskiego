/* eslint-disable */
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <div
      style={{ backgroundColor: "#FAFAFA" }}
      className="flex  w-full justify-between items-center p-4"
    >
      <div className="">
        <Link href="#">
          <Image src={"/logo/Wroclaw glowny.png"} width={150} height={150} />
        </Link>
      </div>
      <div className="flex justify-normal space-x-2 ">
        <Link
          className="p-3 rounded-lg  text-gray-700 hover:text-blue-900"
          href={"#about_me"}
        >
          Who am I?
        </Link>
        <Link
          className="p-3 rounded-lg  text-gray-700 hover:text-blue-900"
          href={"#"}
        >
          House Location
        </Link>
        <Link
          className="  p-3 rounded-lg text-gray-700 hover:text-blue-900"
          href={"#"}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
