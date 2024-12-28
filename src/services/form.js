import { onValue, ref } from 'firebase/database';
import { db } from '../firebase.js';

export function readAlert() {
  let data = {};
  const alertRef = ref(db, 'alerts');
  onValue(alertRef, (snapshot) => {
    data = snapshot.val();
  });
  return data;
}

export function readJobs() {
  let data = {};
  const jobRef = ref(db, 'internships');
  onValue(jobRef, (snapshot) => {
    data = snapshot.val();
  });
  return data;
}

export function readCompetitions() {
  let data = {};
  const compRef = ref(db, 'competitions');
  onValue(compRef, (snapshot) => {
    data = snapshot.val();
  });
  return data;
}
