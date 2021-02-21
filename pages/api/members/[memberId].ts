import { getSingleMember } from "@/lib/db-admin"

export default async (req, res) => {
  const memberId = req.query.memberId;
  const member = await getSingleMember(memberId);

  res.status(200).json({ member })
}