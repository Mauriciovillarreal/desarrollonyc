import React from 'react';
import { Container } from 'react-bootstrap';
import './Cartelera.css';
import IconRute from '../IconRute/IconRute';

export const Cartelera = () => {
    const destinos = [
        {
            nombre: 'Mendoza',
            imagen: './img/mendoza.jpg',
            rutas: ['BSAS → MENDOZA', 'MENDOZA → BSAS'],
            semiCama: '41535',
            cama: '55384',
        },
        {
            nombre: 'Mar del Plata',
            imagen: './img/mdq.jpg',
            rutas: ['BSAS → MDQ', 'MDQ → BSAS'],
            semiCama: '25000',
            cama: '43540',
        },
        {
            nombre: 'Córdoba',
            imagen: './img/cordoba.jpeg',
            rutas: ['BSAS → CÓRDOBA', 'CÓRDOBA → BSAS'],
            semiCama: '25800',
            cama: '36800',
        },
        {
            nombre: 'Pto. Iguazu',
            imagen: './img/iguazu.jpeg',
            rutas: ['BSAS → PTO. IGUAZU', 'PTO. IGUAZU → BSAS'],
            semiCama: '76790',
            cama: '83930',
        },
        {
            nombre: 'Bariloche',
            imagen: './img/bariloche.jpeg',
            rutas: ['BSAS → BARILOCHE', 'BARILOCHE → BSAS'],
            semiCama: '48800',
            cama: '93640',
        },

        {
            nombre: 'Tucuman',
            imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/88/76/3b/casa-de-gobierno-de-tucuman.jpg?w=900&h=500&s=1",
            rutas: ['BSAS → TUCUMAN', 'TUCUMAN → BSAS'],
            semiCama: '61760',
            cama: '76160',
        },
        // Puedes agregar más destinos aquí
    ];

    const whatsappNumber = '5491139505311';

    const handleWhatsAppClick = (destino, descuento) => {
        const whatsappMessage = `Hola, quiero más información sobre los descuentos a ${destino} de un ${descuento}%`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <Container className='containerCartelera'>
            {destinos.map((destino) => (
                <div key={destino.nombre} className='cartelera-card'>
                    <img src={destino.imagen} alt={destino.nombre} className="cartelera-image" />
                    <div className="cartelera-content-top">
                        <h1>
                            VIAJA A <div><span>{destino.nombre}</span></div>
                        </h1>
                        <div className='categori'>
                            <h6>SEMI CAMA DESDE</h6>
                            <h3>${destino.semiCama}</h3>
                            <h6>CAMA DESDE</h6>
                            <h3>${destino.cama}</h3>
                        </div>
                    </div>
                    <div className="cartelera-content-bottom">
                        {destino.rutas.map((ruta) => (
                            <IconRute key={ruta} ruta={ruta} /> // Usa el componente aquí
                        ))}
                        <button onClick={() => handleWhatsAppClick(destino.nombre, destino.descuento)}>CONSULTAR</button>
                    </div>
                </div>
            ))}
        </Container>
    );
};