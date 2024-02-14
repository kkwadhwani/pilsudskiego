/* eslint-disable */
import Image from "next/image";

export default function Bannner() {
  return (
    <div
      style={{ backgroundColor: "" }}
      className=" m-2   bg-white sm:flex sm:flex-col items-center h-auto md:flex-row "
    >
      <div className="md:w-1/3 sm:w-full">
        <div className="text-xl text-amber-500 font-semibold text-center">
          Welcome
        </div>
        <div
          style={{ fontFamily: "initial", fontStyle: "italic" }}
          className="text-4xl text-center p-5 text-slate-600"
        >
          Looking to stay in the heart of{" "}
          <span className="text-5xl">Wroclaw?</span>
        </div>
      </div>
      <div className="md:w-2/3 ml-12 sm:w-full">
        <Image
          src={"/city/Wroclaw_city.jpg"}
          width={700}
          height={500}
          alt="wroclaw city"
        />
      </div>
    </div>
  );
}
