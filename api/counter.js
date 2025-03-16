// This file should be in the /api directory
let count = 0 // Note: This is simple in-memory storage, use a database for production

module.exports = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({ count })
  } else if (req.method === "POST") {
    count++
    res.status(200).json({ count })
  } else {
    res.status(405).json({ error: "Method not allowed" })
  }
}

