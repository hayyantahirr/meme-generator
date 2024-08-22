import axios from "axios";
import Generate from "./generate";

const detail = async ({ params }) => {
  const { id } = params;
  console.log("id is" + id);
  const res = await axios(`https://api.imgflip.com/get_memes`);
  const meme = await res.data.data.memes;
  console.log(meme);
  const memeSelected = meme.find((meme) => meme.id === id);

  return (
    <>
      <Generate memeSelected={memeSelected} />
    </>
  );
};

export default detail;
