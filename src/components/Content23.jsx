import React from "react";
import { Carousel } from "@material-tailwind/react";

const Content23 = () => {
  return (
    <div>
      <div className="flex justify-center relative mt-10">
        <div className="w-[90%]">
          <Carousel
            className="rounded-full"
            navigation={false}
            loop
          >
            <img
                src="2023/kaitod-23.jpg"
                alt=""
                className="h-full w-full object-cover"
            />
            <img
                src="2023/shabu-23.jpg"
                alt=""
                className="h-full w-full object-cover"
            />
            <img
                src="2023/eatamare-23.jpg"
                alt=""
                className="h-full w-full object-cover"
            />
            <img
                src="2023/cake-23.jpg"
                alt=""
                className="h-full w-full object-cover"
            />
            <img
                src="2023/shabu2-23.jpg"
                alt=""
                className="h-full w-full object-cover"
            />
            <img
                src="2023/kaitod2-23.jpg"
                alt=""
                className="h-full w-full object-cover"
            />
            <img
                src="2023/corndog-23.jpg"
                alt=""
                className="h-full w-full object-cover"
            />
            <img
                src="2023/somtam-23.jpg"
                alt=""
                className="h-full w-full object-cover"
            />
            <img
                src="2023/somtam2-23.jpg"
                alt=""
                className="h-full w-full object-cover"
            />
            <img
                src="2023/sandwich-23.jpg"
                alt=""
                className="h-full w-full object-cover"
            />
            <img
                src="2023/dimsum-23.jpg"
                alt=""
                className="h-full w-full object-cover"
            />
            <img
                src="2023/itim-23.jpg"
                alt=""
                className="h-full w-full object-cover"
            />
            <img
                src="2023/kaitod3-23.jpg"
                alt=""
                className="h-full w-full object-cover"
            />
            <img
                src="2023/itim2-23.jpg"
                alt=""
                className="h-full w-full object-cover"
            />
            <img
                src="2023/ramen-23.jpg"
                alt=""
                className="h-full w-full object-cover"
            />
            <img
                src="2023/shabu3-23.jpg"
                alt=""
                className="h-full w-full object-cover"
            />
            <img
                src="2023/kaitod4-23.jpg"
                alt=""
                className="h-full w-full object-cover"
            />
            <img
                src="2023/bingsu-23.jpg"
                alt=""
                className="h-full w-full object-cover"
            />
            <img
                src="2023/kaitod5-23.jpg"
                alt=""
                className="h-full w-full object-cover"
            />
            <img
                src="2023/kaitod6-23.jpg"
                alt=""
                className="h-full w-full object-cover"
            />
            <img
                src="2023/eatamare2-23.jpg"
                alt=""
                className="h-full w-full object-cover"
            />
          </Carousel>
          <div className="absolute bottom-4 right-4 text-right text-black">
                <p className="text-6xl font-bold" style={{ WebkitTextStroke: '2px white'}}>2023</p>
          </div>
          <div className="absolute top-4 left-4 left-right text-black">
                <p className="text-xl font-bold">2nd</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content23;