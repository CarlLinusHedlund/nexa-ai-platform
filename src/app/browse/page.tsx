'use client'

export default function Browse() {
  const makeApiCall = async () => {
    try {
      await fetch('/api/hello', {
        method: 'POST',
        body: JSON.stringify({ name: 'John Doe' }),
      })
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  makeApiCall();

  return (
    <div className="text-[#white] font-semibold text-2xl min-h-screen py-40">
      <button onClick={makeApiCall}>Make call</button>  
    </div>
  )
}
