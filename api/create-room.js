export default function handler(req, res) {
  if (req.method === "POST") {
    // Example: create a room and return success
    res.status(200).json({ message: "Room created successfully!" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
