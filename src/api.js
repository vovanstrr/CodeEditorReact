import axios from "axios";

const API = axios.create({
    // baseURL: "https://localhost",
    baseURL: "api",
  });

  export const executeCode = async (language, sourceCode) => {
    const response = await API.post("/execute", {
      language: language,
      code: sourceCode,
    //     files: [
    //     {
    //       content: sourceCode,
    //     },
    //   ],
    });
    return response.data;
  };