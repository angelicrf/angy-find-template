import { useEffect, useState } from "react";

export const FindTemplate = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [userInput, setInputText] = useState("");
  const [textDisplay, setTextDisplay] = useState("");

  const sumbitRequest = (e) => {
    e.preventDefault();

    console.log(userInput);

    setIsClicked(true);
  };

  useEffect(() => {
    console.log(isClicked);
    const createRequest = async (thisPrompt, apiKey) => {
      setTextDisplay("");
      try {
        const response = await fetch("https://api.openai.com/v1/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo-instruct", //
            prompt: `${thisPrompt}`,
            max_tokens: 150, // Maximum number of tokens in the response
          }),
        });
        console.log(response);
        if (response.status == 200) {
          const responseData = await response.json();
          console.log(responseData.choices[0].text.trim());
          setTextDisplay(responseData.choices[0].text.trim());
          //setIsClicked(false);
        }
      } catch (error) {
        console.error("Error fetching response from GPT API:", error);
      }
    };
    if (isClicked) {
      createRequest(userInput, "myname");
    }
  }, [isClicked]);
  return (
    <div className="my-4 mx-4">
      <form onSubmit={sumbitRequest}>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="My Text"
          type="text"
          value={userInput}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-3 rounded">
          Find
        </button>
      </form>
      <div>{textDisplay && textDisplay}</div>
    </div>
  );
};
