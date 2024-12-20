import axios from "axios";

const API = axios.create({
    baseURL: "https://localhost",
  });

  export const executeCode = async (language, sourceCode) => {
    const response = await API.post("/execute", {
      language: language,
        files: [
        {
          content: sourceCode,
        },
      ],
    });
    return response.data;
  };