import { parseLog, parseLogs } from "./parse.js"

const logs = [
  `177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET http://example.net HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86_64; fr-FR) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"`,
  `177.71.128.21 - - [09/Jul/2018:10:11:30 +0200] "GET http://google.com HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (Linux; U; Android 2.3.5; en-us; HTC Vision Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"`,
  `168.41.191.40 - - [09/Jul/2018:10:10:38 +0200] "GET http://google.com HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_7) AppleWebKit/534.24 (KHTML, like Gecko) RockMelt/0.9.58.494 Chrome/11.0.696.71 Safari/534.24"`,
  `177.71.128.21 - - [10/Jul/2018:22:22:08 +0200] "GET http://google.com HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1092.0 Safari/536.6"`,
]

describe("parse module", () => {
  test("parse single line of log", () => {
    const parsed = parseLog(logs[0])

    expect(parsed.ip).toBe("177.71.128.21")
    expect(parsed.url).toBe("http://example.net")
  })

  test("parse multiple lines of logs", () => {
    const parsed = parseLogs(logs)
    expect(parsed.length).toBe(4)
  })
})
