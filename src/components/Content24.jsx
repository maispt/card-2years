import React from "react";
import { Carousel } from "@material-tailwind/react";

const Content24 = () => {
    return (
        <div className="mb-10">
            <div className="flex justify-center relative">
                <div className="w-[90%] mt-10">
                    <Carousel className="rounded-full" navigation={false} loop>
                        <img
                            src="2024/sushi-24.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="2024/itim-24.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="2024/rice-24.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="2024/rice2-24.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="2024/mukrata-24.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="2024/itim2-24.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="2024/kaitod-24.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="2024/mala-24.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="2024/sushi2-24.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="2024/sushi3-24.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="2024/shabu-24.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="2024/mala2-24.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="2024/tea-24.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </Carousel>
                    <div className="absolute bottom-4 left-4 text-left text-black">
                        <p className="text-6xl font-bold" style={{ WebkitTextStroke: '2px white'}}>2024</p>
                    </div>
                    <div className="absolute top-4 right-4 right-right text-black">
                        <p className="text-xl font-bold">3th</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content24;