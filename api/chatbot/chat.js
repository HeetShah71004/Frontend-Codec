export default function handler(req, res) {
  if (req.method === "POST") {
    const { message } = req.body;
    // Dummy AI response logic
    res.status(200).json({
      chatRes: `You said: ${message}. This is a dummy AI response.`,
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
