export const dynamic = 'force-static'
 
export async function GET() {
  for (let i = 0; i < 4000000000; i++) {}
  console.error('hello')
  return Response.json({ hello: 'world' })
}