import { parseLogs } from "./parse.js"

function uniqueIpAddresses(logs) {
  const parsedLogs = parseLogs(logs)

  return [...new Set(parsedLogs.map((log) => log.ip))]
}

function mostVisitedUrls(logs) {
  const parsedLogs = parseLogs(logs)
  const logsWith200 = parsedLogs.filter((log) => log.status === "200")

  return orderByKey(logsWith200, "url")
}

function mostActiveIpAddresses(logs) {
  const parsedLogs = parseLogs(logs)

  return orderByKey(parsedLogs, "ip")
}

function orderByKey(parsedLogs, key) {
  const urls = parsedLogs.map((log) => {
    return log[key]
  })
  const counts = urls.reduce((acc, url) => {
    if (acc[url] === undefined) {
      acc[url] = 1
    } else {
      acc[url]++
    }
    return acc
  }, {})

  const sortedCounts = Object.entries(counts).sort((a, b) => b[1] - a[1])
  return sortedCounts.map((entry) => entry[0])
}

export { uniqueIpAddresses, mostVisitedUrls, mostActiveIpAddresses }
