// src/components/SolicitudesList.jsx
import React, { useEffect, useState } from 'react';
import { onSolicitudesSnapshot } from '../firebase/solicitudesService';

const SolicitudesList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsub = onSolicitudesSnapshot((docs) => {
            setItems(docs);
            setLoading(false);
        });
        return () => unsub();
    }, []);

    if (loading) return <p>Cargando solicitudes...</p>;

    return (
        <div>
            {items.length === 0 ? <p>No hay solicitudes</p> :
                items.map(s => (
                    <div key={s.id} className="solicitud-card">
                        <h4>{s.fullName} — {s.amountRequested?.toLocaleString?.() || s.amountRequested}</h4>
                        <p>{s.email} — {s.status}</p>
                        <small>{s.createdAt?.toDate ? s.createdAt.toDate().toLocaleString() : ''}</small>
                    </div>
                ))
            }
        </div>
    );
};

export default SolicitudesList;