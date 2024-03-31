import { FindTemplate } from "./components/FindTemplate";
import { SearchTemplate } from "./components/SearchTemplate";

function App() {
  return (
    <>
      {/* <FindTemplate /> */}
      <SearchTemplate
        thisPrompt={
          "fix any typos, and grammatical error in this text and rewrite it in a professional format in English: "
        }
        btnText={"Fix Typos En"}
      />
      <SearchTemplate
        thisPrompt={"translate this text in French in a professional format: "}
        btnText={"Find Template"}
      />
      <SearchTemplate
        thisPrompt={
          "fix any typos, and grammatical error in this text and rewrite it in a professional format in French: "
        }
        btnText={"Fix Typos Fr"}
      />
    </>
  );
}

export default App;
