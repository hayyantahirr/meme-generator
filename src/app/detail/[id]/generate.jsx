"use client";

import axios from "axios";
import { useRef, useState } from "react";
import Link from "next/link";

const Generate = ({ memeSelected }) => {
  const memeBrought = memeSelected;
  const memeInput1 = useRef();
  const memeInput2 = useRef();
  const [meme, setMeme] = useState(null);

  function generateMeme(e) {
    e.preventDefault();
    const username = "hayyantahirr";
    const password = "htmgmeme";

    axios(
      `https://api.imgflip.com/caption_image?template_id=${memeBrought.id}&username=${username}&password=${password}&text0=${memeInput1.current.value}&text1=${memeInput2.current.value}`
    )
      .then((res) => {
        console.log(res);
        setMeme(res.data.data.url);
      })
      .catch((err) => {
        console.log(err);
      });

    memeInput1.current.value = "";
    memeInput2.current.value = "";
  }

  const downloadMeme = async () => {
    if (meme) {
      try {
        const response = await fetch(meme);
        if (response.status !== 200) {
          console.log("Error fetching image");
          return;
        }
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "generated-meme.jpg";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url); // Clean up the object URL after download
      } catch (error) {
        console.log("An error occurred:", error);
      }
    } else {
      console.log("No image available to download");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#222630] flex flex-col items-center justify-center">
      <form
        method="post"
        onSubmit={generateMeme}
        className="flex flex-col items-center"
      >
        <h1 className="text-2xl mt-5 text-white">Generate A Meme Now !</h1>
        <img src={memeBrought.url} alt="" className="w-1/4 mt-5" />
        <h1 className="text-2xl mt-5 text-white">“{memeBrought.name} Meme”</h1>
        <input
          type="text"
          placeholder="Enter Text 1"
          ref={memeInput1}
          className="bg-[#222630] px-4 py-3 outline-none w-1/2 text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] mt-5"
        />
        <input
          type="text"
          placeholder="Enter Text 2"
          ref={memeInput2}
          className="bg-[#222630] px-4 py-3 outline-none w-1/2 text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] mt-5"
        />
        <button
          type="submit"
          className="btn btn-outline btn-primary rounded-full mt-4"
        >
          Generate
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
        </button>

        {meme && (
          <>
            <img src={meme} alt="Generated Meme" className="w-1/4 mt-5" />
            <button
              type="button"
              onClick={downloadMeme}
              className="mt-5 mb-5 cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="24px"
                width="24px"
              >
                <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="Interface / Download">
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      stroke="#f1f1f1"
                      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                      id="Vector"
                    ></path>
                  </g>
                </g>
              </svg>
              Download
              <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                Download
              </div>
            </button>
          </>
        )}

        <Link href="/">
          <button
            type="button"
            className="bg-white text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group mt-10 mb-5"
          >
            <div className="bg-purple-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000000"
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                ></path>
                <path
                  fill="#000000"
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                ></path>
              </svg>
            </div>
            <p className="translate-x-2">Go Back</p>
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Generate;
