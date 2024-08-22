import axios from "axios";
import Link from "next/link";

export default async function Home() {
  const res = await axios("https://api.imgflip.com/get_memes");
  const products = await res.data.data.memes;
  console.log(products);

  return (
    <main>
      <h1>Meme Generator</h1>
      <div className="flex flex-wrap justify-center gap-[35px] border-solid border-white border-2 mx-[50px] rounded-3xl border-opacity-35 ">
        {products.map((item) => {
          return (
            <div className="flex flex-col items-center justify-center ">
              <img src={item.url} alt="" className="w-40 h-40 mt-5 " />
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
