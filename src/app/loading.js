"use client";
import React from "react";

function Loading() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center w-full h-full">
      {/* Skeleton for the main heading */}
      <div className="h-12 w-64 bg-[#222630] rounded-md mx-auto mt-8 animate-pulse"></div>

      {/* Skeleton for the subtitle/description */}
      <div className="h-6 w-48 bg-[#222630] rounded-md mx-auto mt-2 mb-6 animate-pulse"></div>

      {/* Skeleton container for displaying memes */}
      <div className="flex flex-wrap justify-center gap-[35px] border-solid border-white border-2 mx-[50px] rounded-3xl border-opacity-35 backdrop-blur-md bg-opacity-50 p-4">
        {/* Simulate loading of multiple items */}
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            {/* Skeleton for the meme image */}
            <div className="w-40 h-40 bg-[#222630] rounded-md mt-5 animate-pulse"></div>

            {/* Skeleton for the button */}
            <div className="w-24 h-10 bg-[#222630] rounded-full mt-5 mb-5 animate-pulse"></div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Loading;
