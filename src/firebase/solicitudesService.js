// src/firebase/solicitudesService.js
import {
    collection,
    addDoc,
    doc,
    getDoc,
    getDocs,
    onSnapshot,
    query,
    orderBy,
    updateDoc,
    deleteDoc,
    serverTimestamp
} from "firebase/firestore";
import { db } from "./config";

const solicitudesCol = collection(db, "solicitudes");

export const createSolicitud = async (data) => {
    const payload = {
        ...data,
        amountRequested: Number(data.amountRequested),
        termMonths: Number(data.termMonths),
        createdAt: serverTimestamp(),
        status: "pendiente"
    };
    const ref = await addDoc(solicitudesCol, payload);
    return ref.id;
};

export const getSolicitud = async (id) => {
    const d = await getDoc(doc(db, "solicitudes", id));
    return d.exists() ? { id: d.id, ...d.data() } : null;
};

export const getAllSolicitudes = async () => {
    const q = query(solicitudesCol, orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const onSolicitudesSnapshot = (callback) => {
    const q = query(solicitudesCol, orderBy("createdAt", "desc"));
    return onSnapshot(q, (snapshot) => {
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        callback(items);
    }, (err) => {
        console.error("snapshot error", err);
    });
};

export const updateSolicitud = async (id, data) => {
    const ref = doc(db, "solicitudes", id);
    await updateDoc(ref, data);
};

export const deleteSolicitud = async (id) => {
    await deleteDoc(doc(db, "solicitudes", id));
};