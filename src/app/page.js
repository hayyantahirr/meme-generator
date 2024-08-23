import axios from "axios"; // Importing axios for making HTTP requests
import Link from "next/link"; // Importing Link from Next.js to create navigable links

// This is an async function named 'Home' that acts as the main component of this page
export default async function Home() {
  // Making an HTTP GET request to the Imgflip API to fetch a list of memes
  const res = await axios("https://api.imgflip.com/get_memes");

  // Extracting the 'memes' array from the response data and storing it in the 'products' variable
  const products = await res.data.data.memes;

  // Logging the array of memes to the console for debugging purposes
  console.log(products);

  // Returning the JSX that defines the structure of the webpage
  return (
    <main>
      {/* Main heading of the webpage */}
      <h1 className="text-5xl text-center pt-8">MemeVerse</h1>

      {/* Subtitle/description of the webpage */}
      <p className="text-center text-lg opacity-60 mt-2 mb-6">
        Generate Your Memes with MemeVerse!
      </p>

      {/* Container for displaying memes, with some styling applied */}
      <div className="flex flex-wrap justify-center gap-[35px] border-solid border-white border-2 mx-[50px] rounded-3xl border-opacity-35 backdrop-blur-md bg-opacity-50">
        {/* Mapping over the 'products' array to create a card for each meme */}
        {products.map((item) => {
          return (
            <div className="flex flex-col items-center justify-center ">
              {/* Displaying the meme image */}
              <img src={item.url} alt="" className="w-40 h-40 mt-5 " />

              {/* Link to the detail page for creating a meme using this template */}
              <Link href={`detail/${item.id}`}>
                <button className="btn btn-outline btn-primary mt-5 rounded-full mb-5">
                  Create{" "}
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
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}

// ### Detailed Explanation:

// 1. **Imports**:
//    - `axios`: This library allows you to make HTTP requests from the browser or Node.js.
//    - `Link`: This is a component from Next.js that enables navigation between different pages of your application without a full page reload, enhancing performance.

// 2. **Function Declaration**:
//    - The `Home` function is an asynchronous function that serves as the main component for the homepage. This function fetches data from an API and renders the main content of the page.

// 3. **Fetching Data**:
//    - `const res = await axios("https://api.imgflip.com/get_memes");`: This line sends a request to the Imgflip API to get a list of available meme templates. The `await` keyword is used because the request is asynchronous, meaning it takes some time to complete, and the function should wait for it before continuing.

// 4. **Extracting Data**:
//    - `const products = await res.data.data.memes;`: The response from the API contains a lot of information, but we're only interested in the array of memes (`res.data.data.memes`). This line extracts that array and stores it in the `products` variable.

// 5. **Logging for Debugging**:
//    - `console.log(products);`: This line prints the `products` array to the console, which helps you see what data has been fetched and verify that the API request worked correctly.

// 6. **Returning JSX**:
//    - The `return` statement provides the structure of the webpage using JSX, which looks like HTML but can include JavaScript expressions.
//    - The `main` tag wraps the content of the homepage.

// 7. **Heading and Subtitle**:
//    - The `h1` tag displays the main title of the webpage ("MemeVerse").
//    - The `p` tag shows a brief description encouraging users to generate memes.

// 8. **Meme Display Container**:
//    - The `div` with class names sets up a container that will hold all the meme cards. It uses utility classes from Tailwind CSS to control layout, spacing, borders, and background blur.

// 9. **Mapping Through Memes**:
//    - `{products.map((item) => { ... })}`: This code maps through each item in the `products` array (each `item` is a meme object). For each item, a new `div` is created, which includes the meme image and a button.

// 10. **Meme Image**:
//     - `<img src={item.url} alt="" className="w-40 h-40 mt-5 " />`: This displays the image of the meme template, using the `url` from each `item`.

// 11. **Link to Meme Creation**:
//     - The `Link` component wraps a button that takes the user to the detail page (`detail/${item.id}`) for that specific meme. The button is styled and includes an SVG icon for visual appeal.

// 12. **Exporting the Function**:
//     - The `Home` function is exported as the default export, making it accessible for import in other parts of your application.

// This code fetches meme templates from an API, displays them on the homepage, and provides a link to create a custom meme using each template.
