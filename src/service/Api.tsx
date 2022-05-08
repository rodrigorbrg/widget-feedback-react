import axios from "axios";

export default function() {
  const defaultHeader = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const appAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 60000,
  });

  const createFeedback = async (body: any) => {
    const response = await appAPI.post(`/feedback`, body, defaultHeader);
    return response
  }

  return {
    createFeedback,
  }
}