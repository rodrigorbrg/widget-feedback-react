export default function() {

  const createFeedback = async (body: any) => {
    console.log('POST http://localhost:3001/feedback', body)
    const response = await fetch('http://localhost:3001/feedback', {
      body,
      method: 'POST'
    });

    return response
  }

  return {
    createFeedback,
  }
}