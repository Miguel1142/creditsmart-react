import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import Hero from '../components/Hero';
import CreditCard from '../components/CreditCard';

const Home = () => {
    const [credits, setCredits] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCredits = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "credits"));
                const docs = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setCredits(docs);
            } catch (error) {
                console.error("Error cargando créditos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCredits();
    }, []);

    if (loading) return <p>Cargando créditos...</p>;

    return (
        <main className="container">
            <Hero />

            <section className="credits-section">
                <h3>Créditos que te podemos ofrecer</h3>

                <div className="credits-grid">
                    {credits.map(credit => (
                        <CreditCard key={credit.id} credit={credit} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Home;