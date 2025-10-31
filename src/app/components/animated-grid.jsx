"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedImageGrid({ images }) {
    const [borderRadius, setBorderRadius] = useState(30);
    const [cornerSize, setCornerSize] = useState(40);
    const [direction, setDirection] = useState("increasing");

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setBorderRadius((prevBorderRadius) => {
    //             if (prevBorderRadius >= 100) {
    //                 setDirection("decreasing");
    //             } else if (prevBorderRadius <= 20) {
    //                 setDirection("increasing");
    //             }

    //             return direction === "increasing"
    //                 ? prevBorderRadius + 1
    //                 : prevBorderRadius - 1;
    //         });
    //     }, 20);

    //     return () => clearInterval(interval);
    // }, [direction]);

    return (
        <div className="min-h-screen bg-green-200 flex justify-center items-center">
            <div className="grid grid-cols-2 gap-8 relative">
                <div className="absolute w-36 h-36 hover:scale-125 transition-transform z-40 rounded-full text-3xl font-semibold text-green-600 flex justify-center bg-white items-center transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    Hi
                </div>
                {images.map((image, index) => (
                    <motion.img
                        key={index}
                        src={image.src}
                        className={`w-48 ${image.position}`}
                        alt={image.alt || ""}
                        style={{
                            "--r": `${borderRadius}px`,
                            "border-radius": `${borderRadius}px`,
                            "--s": `${cornerSize}px`,
                            "--_m": `/calc(2 * ${borderRadius}px) calc(2 * ${borderRadius}px) radial-gradient(#000 70%, #0000 72%) no-repeat`,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                ))}
            </div>
        </div>
    );
}
