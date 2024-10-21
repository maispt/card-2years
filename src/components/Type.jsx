import React from "react";
import { ReactTyped } from "react-typed";

const Type = () => {
    return (
        <div className="text-center pt-6 pb-6 bg-black text-white">
            <p className="mb-2">Want to eat</p>
            <ReactTyped
                className="text-4xl font-bold"
                strings={["Sushi", "Kaitod", "Shabu", 'Somtam', 'Mala', 'Ramen', 'Steak', "Tempura", 'Tonkutsu']}
                typeSpeed={150}
                backSpeed={150}
                loop
            />
            <p className="mt-2">In 20xx</p>
        </div>
    )
}

export default Type;