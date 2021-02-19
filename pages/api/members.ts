import { getAllMembers } from '../../lib/db-admin'

export default async (_, res) => {
  try {

    const { members } = await getAllMembers();
  
    res.status(200).json({members});
  } catch (error) {
    res.status(500).json({ error })
  }
}