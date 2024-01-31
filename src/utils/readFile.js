import { open } from "node:fs/promises"

async function readFile(filePath, encoding = "utf-8") {
  try {
    const file = await open(filePath)
    const lines = []
    for await (const line of file.readLines({ encoding })) {
      lines.push(line)
    }
    return lines
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(`File ${filePath} does not exist`)
    } else {
      console.error(`Error while reading the file: ${error.message}`)
    }
    throw error
  }
}

export default readFile
