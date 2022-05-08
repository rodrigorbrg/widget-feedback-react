export default function() {
  var defaultHeaders = new Headers();
  defaultHeaders.append("Content-Type", "application/json");

  const createFeedback = async (body: any) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/feedback`, {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify(body),
    });

    return response
  }

  return {
    createFeedback,
  }
}