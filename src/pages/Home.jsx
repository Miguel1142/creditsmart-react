import React from 'react';
import Hero from '../components/Hero';
import CreditCard from '../components/CreditCard';
import { creditOffers } from '../data/creditsData';

const Home = () => {
    return (
        <main className="container">
            <Hero />
            <section className="credits-section">
                <h3>Creditos que te podemos ofrecer</h3>
                <div className="credits-grid">
                    {creditOffers.map(credit => (
                        <CreditCard key={credit.id} credit={credit} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Home;