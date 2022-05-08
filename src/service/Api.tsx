export default function() {
  var defaultHeaders = new Headers();
  defaultHeaders.append("Content-Type", "application/json");

  const createFeedback = async (body: any) => {
    const response = await fetch('http://192.168.15.65:3333/feedback', {
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