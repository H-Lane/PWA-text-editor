import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("putDb");

  const connectDb = await openDB('jate', 1);

  const tran = connectDb.transaction('jate', 'readwrite')

  const store = tran.objectStore('jate');

  const request = store.put({ id: 1, value: content });

  const response = await request;

  console.log('Succesfully saved to the DB', response);

};


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('gertDb');

  const connectDb = await openDB('jate', 1);

  const tran = connectDb.transaction('jate', 'readonly');

  const store = tran.objectStore('jate');

  const request = store.getAll();

  const response = await request;

  return response.value;
};

initdb();
