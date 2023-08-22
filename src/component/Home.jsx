import React from "react";
import Image from "next/image";
import { Dancing_Script, Oleo_Script } from "next/font/google";

const Dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const Merriweather = Oleo_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const HomePage = () => {
  return (
    <div>
      <header className="relative">
        <div className="relative">
          <Image src="/banner pc.png" width={1920} height={1080} />
          <Image
            className="absolute bottom-20 left-32"
            src="/Layer 1.png"
            width={900}
            height={900}
          />
        </div>
        <div className="absolute top-32 right-64 text-center ">
          <p className="text-xl text-white bg-yellow-600 text-center rounded-full uppercase px-4 py-1">
            Hà nội muốn giãn dân nội đô: cần cơ chế đột phá
          </p>
          <p className={`text-8xl text-white  ${Dancing.className}`}>
            ~ Kỳ cuối ~
          </p>
          <p
            className={`text-5xl text-white mt-4 uppercase ${Merriweather.className}`}
          >
            Đừng lấy số m2 sàn nhà <br /> <span className="">để quy định</span>{" "}
            <br />
            ai là người dân thủ đô
          </p>
        </div>
        <div className="w-full">
          <ul className="w-full absolute flex justify-around bottom-3 text-white uppercase text-lg p-2">
            <li>dmagazine</li>
            <li>dân trí</li>
            <li>giãn dân nội đô</li>
            <li>2023</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
