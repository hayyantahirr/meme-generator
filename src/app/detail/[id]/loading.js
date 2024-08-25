"use client";
import React from "react";

function Loading() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center w-full h-full"
      style={{
        backgroundImage: `
          radial-gradient(black 55%, transparent),
          linear-gradient(135deg, red, orange, yellow, lime, cyan, blue, indigo, deeppink)
        `,
        backgroundSize: "100% 0.5%, contain",
      }}
    >
      {/* Skeleton for the first heading */}
      <div className="h-10 w-64 mt-5 bg-[#222630] rounded-md animate-pulse opacity-60"></div>

      {/* Skeleton for the image */}
      <div className="w-1/4 h-48 mt-5 bg-[#222630] rounded-md animate-pulse"></div>

      {/* Skeleton for the second heading */}
      <div className="h-10 w-64 mt-5 bg-[#222630] rounded-md animate-pulse"></div>

      {/* Skeletons for the input fields */}
      <div className="bg-[#222630] px-4 py-3 w-1/2 mt-5 rounded-lg animate-pulse"></div>
      <div className="bg-[#222630] px-4 py-3 w-1/2 mt-5 rounded-lg animate-pulse"></div>

      {/* Skeleton for the generate button */}
      <div className="btn btn-outline w-36 h-12 mt-4 rounded-full bg-[#222630] animate-pulse"></div>

      {/* Skeleton for the download button (only if the meme is available) */}
      <div className="w-48 h-12 mt-5 mb-5 rounded-3xl bg-[#222630] animate-pulse"></div>

      {/* Skeleton for the Go Back button */}
      <div className="w-48 h-14 mt-10 mb-5 rounded-2xl bg-[#222630] animate-pulse"></div>
    </div>
  );
}

export default Loading;
