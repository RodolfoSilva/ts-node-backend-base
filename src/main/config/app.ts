import http from 'http'

const HTTP_STATUS_CODE_OK = 200

const requestListener: http.RequestListener = (req, res) => {
  res.writeHead(HTTP_STATUS_CODE_OK)
  res.end('Hello, World!')
}

const server = http.createServer(requestListener)

export default server
