/*import { db } from './firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const creditsData = [
    {
        name: "Crédito de libre inversión",
        emoji: "💰",
        description: "Dinero rápido para lo que necesites, sin complicaciones.",
        interest: 1.5,
        minAmount: 2000000,
        maxAmount: 30000000,
        maxTerm: 60
    },
    {
        name: "Crédito de Vehículos",
        emoji: "🚗",
        description: "Financia tu auto soñado con las mejores tasas del mercado.",
        interest: 2.0,
        minAmount: 10000000,
        maxAmount: 80000000,
        maxTerm: 70
    },
    {
        name: "Crédito educativo",
        emoji: "🎓",
        description: "Estudia lo que quieras, cuando quieras, con facilidades de pago.",
        interest: 0.5,
        minAmount: 2000000,
        maxAmount: 30000000,
        maxTerm: 70
    },
    {
        name: "Crédito empresarial",
        emoji: "🏢",
        description: "Impulsa tu negocio con capital flexible y tasas competitivas.",
        interest: 1.9,
        minAmount: 10000000,
        maxAmount: 200000000,
        maxTerm: 120
    },
    {
        name: "Crédito de vivienda",
        emoji: "🏠",
        description: "Haz realidad tu hogar soñado con planes de financiamiento accesibles.",
        interest: 1.0,
        minAmount: 50000000,
        maxAmount: 200000000,
        maxTerm: 200
    },
    {
        name: "Crédito de consumo",
        emoji: "🛒",
        description: "Para compras, viajes o emergencias: obtén dinero rápido y fácil.",
        interest: 1.8,
        minAmount: 1000000,
        maxAmount: 20000000,
        maxTerm: 28
    },
]

const seedFirestore = async () => {
    try {
        console.log('Iniciando carga de datos a Firestore');

        for (const credit of creditsData) {
            const docRef = await addDoc(collection(db, 'credits'), credit);
            console.log('${credit.name} agregado con ID: ${docRef.id}');
        }

        console.log('Todos los créditos fueron agregados exitosamente');
        console.log('En cuanto se persistan los registros, borrar este archivo');




    } catch (error) {
        console.error('Error al cargar datos: ', error);

    }
}

seedFirestore();