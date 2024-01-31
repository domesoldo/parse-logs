function parseLog(log) {
  const [ip, user, role, timestamp, timezone, method, url, protocol, status] =
    log.split(" ")

  return {
    ip,
    user,
    role,
    timestamp,
    timezone,
    method,
    url,
    protocol,
    status,
  }
}

function parseLogs(logs) {
  return logs.map((log) => parseLog(log))
}

export { parseLog, parseLogs }
