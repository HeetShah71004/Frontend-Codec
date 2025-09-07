export default function handler(req, res) {
  if (req.method === "POST") {
    // Example: handle editor logic and return success
    res.status(200).json({ message: "Editor API working!" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
