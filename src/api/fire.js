import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyAZ-l5NpavN_akvawcWfUU7j9r4y7Dddoc',
	authDomain: 'cricknit-7a7af.firebaseapp.com',
	databaseURL: 'https://cricknit-7a7af-default-rtdb.firebaseio.com',
	projectId: 'cricknit-7a7af',
	storageBucket: 'cricknit-7a7af.appspot.com',
	messagingSenderId: '604001449896',
	appId: '1:604001449896:web:de7781375cd9d7f4b34f9d',
	measurementId: 'G-9H8VC0PDHG',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
