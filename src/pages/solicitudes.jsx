import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const Solicitudes = () => {
    const [solicitudes, setSolicitudes] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchSolicitudes = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "solicitudes"));
            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setSolicitudes(data);
        } catch (error) {
            console.error("Error cargando solicitudes:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSolicitudes();
    }, []);

    return (
        <main className="container">
            <h2 className="form-title" style={{ color: "white" }}>Solicitudes Registradas</h2>

            {loading && <p style={{ color: "white" }}>Cargando solicitudes...</p>}

            {!loading && solicitudes.length === 0 && (
                <p style={{ color: "white" }}>No hay solicitudes registradas.</p>
            )}

            <div className="credits-grid">
                {solicitudes.map((item) => (
                    <div className="credit-card" key={item.id}>
                        <h4>{item.fullName}</h4>
                        <p><strong>Cédula:</strong> {item.idNumber}</p>
                        <p><strong>Correo:</strong> {item.email}</p>
                        <p><strong>Teléfono:</strong> {item.phone}</p>
                        <p><strong>Tipo de crédito:</strong> {item.creditType}</p>
                        <p><strong>Monto solicitado:</strong> ${item.amountRequested}</p>
                        <p><strong>Plazo:</strong> {item.termMonths} meses</p>
                        <p><strong>Destino:</strong> {item.creditPurpose}</p>
                        <p><strong>Ingresos:</strong> {item.monthlyIncome}</p>
                        <p><strong>Cargo:</strong> {item.jobTitle}</p>
                        <p><strong>Empresa:</strong> {item.companyName}</p>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Solicitudes;