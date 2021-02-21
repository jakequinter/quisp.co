import { auth } from '../../lib/firebase-admin'
import { getAllMembers, getUserMembers } from '../../lib/db-admin'

export default async (req, res) => {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.token);
    const members = await getUserMembers(uid);
  
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ error })
  }
}