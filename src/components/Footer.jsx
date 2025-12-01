import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-info">
                        <img src="src\img\logo1.png" alt="CredySmartMS" className="footer-logo" />
                        <p>Confianza, transparencia y soluciones financieras para tu vida.</p>
                    </div>
                    <div className="footer-links">


                    </div>
                    <div className="footer-contact">
                        <h4>Contactanos</h4>
                        <p>📞 +57 321-78-900</p>
                        <p>✉️ contacto@credysmart.com</p>
                        <p>📍 Medellin,Antioquia, Colombia</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 CredySmart. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;