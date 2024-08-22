
import axios from "axios";
// import { useRef } from "react";


const detail = async ({ params }) => {
  const { id } = params;
  console.log("id is" + id);
 
  
 

  return (
    <>
      <div>
        <form method="post">
        <input type="text" placeholder="Enter Text 1" />
        <input type="text"placeholder="Enter Text 2" />
        <button >Generate</button>
        </form>
      </div>
    </>
  );
};

export default detail;
