import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  getFirestore,
  query,
  where,
  addDoc,
} from "firebase/firestore";
import products from "./products";

const firebaseConfig = {
  apiKey: "AIzaSyBkPnuwKR4E6eqiomOGb9AZppKM7v0NBik",
  authDomain: "coderhouse-react-6c42f.firebaseapp.com",
  projectId: "coderhouse-react-6c42f",
  storageBucket: "coderhouse-react-6c42f.firebasestorage.app",
  messagingSenderId: "386910100430",
  appId: "1:386910100430:web:d6a277599594ab8010299f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getData() {
  const collectionRef = collection(db, "products");
  const productsSnapshot = await getDocs(collectionRef);
  const docs = productsSnapshot.docs;
  const dataDocs = docs.map((item) => {
    return { ...item.data(), id: item.id };
  });
  return dataDocs;
}

export async function getItemData(itemid) {
  const documentRef = doc(db, "products", itemid);
  const docSnapshot = await getDoc(documentRef);
  const docData = docSnapshot.data();
  return { ...docData, id: itemid };
}

export async function getCategoryData(categoryID) {
  const collectionRef = collection(db, "products");
  const q = query(collectionRef, where("category", "==", categoryID));
  const productsSnapshot = await getDocs(q);

  const docs = productsSnapshot.docs;
  const dataDocs = docs.map((item) => {
    return { ...item.data(), id: item.id };
  });
  return dataDocs;
}

export async function createBuyOrder(buyOrderData) {
  const collectionRef = collection(db, "orders");
  const docRef = await addDoc(collectionRef, buyOrderData);
}

export async function exportProductsToFirestore() {
  for (let item of products) {
    await addDoc(collection(db, "products"), item);
  }
}
