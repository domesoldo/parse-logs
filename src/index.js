import {
  mostActiveIpAddresses,
  mostVisitedUrls,
  uniqueIpAddresses,
} from "./logs/logs.js"
import readFile from "./utils/readFile.js"

const filePath = "programming-task-example-data.log"
let logs

try {
  console.log("Reading logs from file: ", filePath)
  logs = await readFile(filePath)
} catch (error) {
  process.exit()
}

const uniqueIps = uniqueIpAddresses(logs)
console.log("The number of unique IP addresses is: ", uniqueIps.length)

const mostVisited = mostVisitedUrls(logs)
console.log(
  "The top 3 most visited URLs are: ",
  mostVisited.slice(0, 3).join(", ")
)

const mostActive = mostActiveIpAddresses(logs)
console.log(
  "The top 3 most active IP addresses are: ",
  mostActive.slice(0, 3).join(", ")
)
