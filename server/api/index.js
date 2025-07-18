// server/api/index.js
import app from '../app.js'
import serverless from 'serverless-http'

const handler = serverless(app)

export default function (req, res) {
  return handler(req, res)
}

