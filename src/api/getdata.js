import { getDatabase, ref, onValue } from 'firebase/database';

import app from './getfirebase.js';
const db = getDatabase();
// console.log(db);
const reff = ref(db, 'Schedule');

onValue(reff, snap => {
	console.log(typeof snap);
});
