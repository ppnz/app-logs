'use client'


export default function Home() {
  const onSubmit = async (code: string) => {
    try {
      if (code === 'test') {
        return await fetch('/api/test').then(res => res.json())
      }
      const data = { code }
      const response = await fetch('/api/logs', {
        method: 'post', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error('Failed to fetch')
      }


    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className="flex flex-col w-full min-h-screen">
      <p>Click the button to fetch and return the HTTP status code corresponding to the button text</p>
      <div className="flex items-center gap-4 p-4">
        <button className="px-4 py-2 rounded-sm bg-blue-500" onClick={() => onSubmit('200')}>200</button>
        <button className="px-4 py-2 rounded-sm bg-blue-500" onClick={() => onSubmit('test')}>test</button>
        <button className="px-4 py-2 bg-red-500" onClick={() => onSubmit('400')}>400</button>
        <button className="px-4 py-2 bg-orange-500" onClick={() => onSubmit('500')}>500</button>
      </div>
    </main>
  );
}
