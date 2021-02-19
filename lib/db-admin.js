import { db } from './firebase-admin';

export async function getAllMembers() {
  try {
    const snapshot = await db.collection('members').get();

    const members = [];

    snapshot.forEach(doc => {
      members.push({ id: doc.id, ...doc.data() });
    });

    members.sort((a, b) => b.number - a.number);

    return { members };
  } catch (error) {
    return { error };
  }
}
