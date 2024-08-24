"use client"; // Indicates this is a client-side component for Next.js

import axios from "axios"; // Importing axios for making HTTP requests
import { useRef, useState } from "react"; // Importing hooks from React
import Link from "next/link"; // Importing Link from Next.js for navigation
import Image from "next/image";

// The Generate component is responsible for creating and downloading memes
const Generate = ({ memeSelected }) => {
  const memeBrought = memeSelected; // Store the selected meme in a constant

  // Creating references for the two input fields to get their values later
  const memeInput1 = useRef();
  const memeInput2 = useRef();

  // State to store the generated meme URL
  const [meme, setMeme] = useState(null);

  // Function to generate a meme when the form is submitted
  function generateMeme(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const username = "hayyantahirr"; // Username for the Imgflip API
    const password = "htmgmeme"; // Password for the Imgflip API

    // Making a request to the Imgflip API to generate a meme
    axios(
      `https://api.imgflip.com/caption_image?template_id=${memeBrought.id}&username=${username}&password=${password}&text0=${memeInput1.current.value}&text1=${memeInput2.current.value}`
    )
      .then((res) => {
        console.log(res); // Log the response for debugging
        setMeme(res.data.data.url); // Update the state with the generated meme URL
      })
      .catch((err) => {
        console.log(err); // Log any errors
      });

    // Clear the input fields after generating the meme
    memeInput1.current.value = "";
    memeInput2.current.value = "";
  }

  // Function to download the generated meme
  const downloadMeme = async () => {
    if (meme) {
      try {
        const response = await fetch(meme); // Fetch the image from the generated URL
        if (response.status !== 200) {
          console.log("Error fetching image");
          return;
        }
        const blob = await response.blob(); // Convert the image to a blob
        const url = URL.createObjectURL(blob); // Create a temporary URL for the blob
        const a = document.createElement("a"); // Create a link element to trigger the download
        a.href = url;
        a.download = "generated-meme.jpg"; // Set the download filename
        document.body.appendChild(a);
        a.click(); // Simulate a click to start the download
        document.body.removeChild(a); // Remove the link element after download
        URL.revokeObjectURL(url); // Clean up the temporary URL
      } catch (error) {
        console.log("An error occurred:", error); // Log any errors
      }
    } else {
      console.log("No image available to download"); // If no meme is generated, log this message
    }
  };

  // Rendering the component UI
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
      <form
        method="post"
        onSubmit={generateMeme}
        className="flex flex-col items-center"
      >
        <h1 className="text-2xl mt-5 text-white">Generate A Meme Now !</h1>
        
        <Image
          src={memeBrought.url}
          alt=""
          className="w-1/4 mt-5"
          width={0}
          height={0}
          sizes="100vw"
          priority
        />
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

        {/* Display the generated meme and download button if a meme is available */}
        {meme && (
          <>
            
            <Image
              src={meme}
              alt="Generated Meme"
              className="w-1/4 mt-5"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
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

        {/* Button to go back to the homepage */}
        <Link href="/">
          <button
            type="button"
            className="bg-white text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group mt-10 mb-5"
          >
            <div
              className="bg-purple-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-

500"
            >
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

export default Generate; // Exporting the Generate component as the default export

// ### Explanation

// 1. **Imports and Setup**:
//    - `use client`: Marks the file as a client-side component for Next.js.
//    - `axios`: This is a library for making HTTP requests, like fetching data from APIs.
//    - `useRef` and `useState`: These are React hooks. `useRef` is used to get the value from input fields, and `useState` is used to manage the state of variables inside the component.
//    - `Link`: This is from Next.js, used for navigating between pages.

// 2. **Component Definition**:
//    - The `Generate` component is responsible for displaying a form that allows users to generate a meme and then download it. It takes `memeSelected` as a prop, which contains information about the meme template the user has chosen.

// 3. **References for Input Fields**:
//    - `memeInput1` and `memeInput2` are created using `useRef` to store references to the text input fields. These references allow you to access the values entered by the user when generating the meme.

// 4. **State Management**:
//    - `meme` is a state variable that stores the URL of the generated meme. Initially, it’s set to `null`.

// 5. **generateMeme Function**:
//    - This function is triggered when the user submits the form. It prevents the default form submission behavior (refreshing the page) using `e.preventDefault()`.
//    - The function then sends a request to the Imgflip API using `axios`, including the `template_id` of the selected meme and the text entered by the user in the two input fields.
//    - If the request is successful, the URL of the generated meme is stored in the `meme` state.
//    - After the meme is generated, the input fields are cleared.

// 6. **downloadMeme Function**:
//    - This function is responsible for downloading the generated meme.
//    - It first checks if a meme has been generated (`if (meme)`).
//    - If a meme exists, it fetches the image, converts it to a blob, creates a temporary URL, and triggers a download using a dynamically created link element (`<a>`).
//    - The temporary URL is cleaned up after the download.

// 7. **Rendering the UI**:
//    - The component returns a form that allows the user to input text and generate a meme.
//    - If a meme has been generated (`{meme && ...}`), it displays the meme and a button to download it.
//    - There’s also a button at the bottom that links back to the homepage.

// 8. **Exporting the Component**:
//    - Finally, the `Generate` component is exported as the default export of the module so it can be used in other parts of the application.
