
let bill = { items: [], total: 0 };

export default function handler(req, res) {
  if (req.method === 'POST') {
    bill = req.body;
    return res.status(200).json({ message: "Bill updated." });
  } else if (req.method === 'GET') {
    return res.status(200).json(bill);
  } else {
    res.status(405).end();
  }
}
