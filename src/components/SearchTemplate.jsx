import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

export const SearchTemplate = () => {
  const [thisInfo, setThisInfo] = useState("");
  const [thisResult, setThisResult] = useState();

  const getResult = async () => {
    const myApi = import.meta.env.VITE_API_KEY;
    console.log(myApi);
    if (myApi !== undefined) {
      console.log("isOk");
      /*   const genAI = new GoogleGenerativeAI(myApi);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `${thisInfo}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      setThisResult(text); */
    } else {
      console.log("myAPI_KEY is null");
    }
  };

  return (
    <div className="mx-3 my-3">
      <input
        type="text"
        className="bg-gray-50 my-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700"
        value={thisInfo}
        onChange={(e) => setThisInfo(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-3 rounded"
        onClick={getResult}
      >
        Search Data
      </button>
      <div>{thisResult && thisResult}</div>
    </div>
  );
};
