import { Elysia, t } from 'elysia'

export const app = new Elysia()
  .get('/', 'ok')
  .post('/logs', async ({ error, body }) => {
    const { code } = body
    if (code === '200') return { body }
   
    return error(+code, { data: 'this is mock api', code: `${new Date().valueOf()}`, message: 'Something went wrong from server' })

  }, {
    body: t.Object({ code: t.String() })
  })
  .listen(3001)

export type app = typeof app

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)