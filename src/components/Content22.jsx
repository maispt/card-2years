import React from "react";
import { Carousel } from "@material-tailwind/react";

const Content22 = () => {
    return (
        <div>
            <div className="flex justify-center relative mt-10">
                <div className="w-[90%]">
                    <Carousel className="rounded-full" navigation={false} loop>
                        <img
                            src="2022/kokun-22.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="2022/buntown-22.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="2022/mukatra-22.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="2022/buntown2-22.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="2022/eatamare-22.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </Carousel>
                    <div className="absolute bottom-4 left-4 text-left text-black">
                        <p className="text-6xl font-bold" style={{ WebkitTextStroke: '2px white'}}>2022</p>
                    </div>
                    <div className="absolute top-4 right-4 text-right text-black">
                        <p className="text-xl font-bold">1st</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content22;
