import { initializeApp } from "firebase/app";
import {
  getFirestore,
  onSnapshot,
  collection,
  query,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { onUnmounted, ref } from "vue";

initializeApp({
  apiKey: "AIzaSyDLMIJtr-zYti5VSuNrDNNjVHLJxh9YiGk",
  authDomain: "movies-9e54c.firebaseapp.com",
  projectId: "movies-9e54c",
  storageBucket: "movies-9e54c.appspot.com",
  messagingSenderId: "195682516337",
  appId: "1:195682516337:web:17d68eeed823ffbdac8ad0",
});

const db = getFirestore();

export const addMovie = async (title: string) => {
  await addDoc(collection(db, "movies"), { title });
};

export const deleteMovie = async (id: string) => {
  await deleteDoc(doc(db, "movies", id));
};

export const editMovie = async (id: string, title: string) => {
  await updateDoc(doc(db, "movies", id), { title });
};

export const loadMovies = () => {
  const movies = ref([] as any);
  const close = onSnapshot(query(collection(db, "movies")), (snapshot) => {
    movies.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
  onUnmounted(close);
  return movies;
};
