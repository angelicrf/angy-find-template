import express from "express";
import path from "path";
import cors from "cors";
import Bard from "bard-ai";
import fetch from "node-fetch";
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const Secure_1PSID =
  "g.a000iAjhUAjvLGi_hDdidMwgFQeTK2ESO4DwBobK_ciZ1SYwLzkhOm5NXcDf7XfSO2KTQat1qQACgYKAfQSAQASFQHGX2Mi35q-R3U-8lV_Sdo1zlLpHxoVAUF8yKoapO_2X-be40jJqA1ZnuQx0076";
//SSID: AiDLf0NypgrU5waCP
const PSIDTS =
  "sidts-CjIB7F1E_EromBMS4uHCo3autyWhv_iQvMxZCMknAiSW8Quycdt1PXu1yBRrq7Ohbj9iYRAA";
//"sidts-CjIB7F1E_DFOvqGWATuRUHcX4vUzKEmgLwTO3O46uDwW-ydUcDskQ7o5oGIdoSB2GF3j_RAA";

const getBard = async () => {
  let myBard = new Bard({
    "__Secure-1PSID": Secure_1PSID,
    "__Secure-3PSIDTS": PSIDTS,
  });
  console.log(myBard);
  let response = await myBard.ask("what is the capital of India?");
  return response;
};

const getData = async () => {
  const headers = {
    Host: "gemini.google.com",
    "X-Same-Domain": "1",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    Origin: "https://gemini.google.com",
    Referer: "https://gemini.google.com/app",
    Cookie: "__Secure-1PSID=" + Secure_1PSID,
  };

  const url = "https://gemini.google.com";

  // Make the fetch request
  fetch(url, {
    method: "GET",
    headers: headers,
    credentials: "include",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      //const SNlM0e = data.match(/SNlM0e":"(.*?)"/)[0];
      //return SNlM0e;
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
app.get("/", async (req, res) => {
  let result = await getBard();
  console.log(result);
  result
    ? res.status(200).json({
        success: "success",
      })
    : res.status(400).json({ sucess: "Failed" });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
