import firebase from './firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}

export function createMember(data) {
  return firestore.collection('members').add(data);
}

export async function updateMember(id, newValues) {
  return firestore.collection('members').doc(id).update(newValues);
}

export function deleteMember(id) {
  return firestore.collection('members').doc(id).delete();
}

