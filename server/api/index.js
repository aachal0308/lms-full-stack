// server/api/index.js
import initApp from '../app.js'
import serverless from 'serverless-http'

let handler

export default async function(req, res) {
  if (!handler) {
    const app = await initApp
    handler = serverless(app)
  }
  return handler(req, res)
}
