import React from 'react';
import { brandTheme } from '../theme';

export default function AdoptionSection() {
    return (
        <section id="adopciones" style={{ marginBottom: 28 }}>
            <article
                style={{
                    background: `linear-gradient(135deg, ${brandTheme.creamSoft} 0%, ${brandTheme.cream} 100%)`,
                    borderRadius: 22,
                    border: `1px solid ${brandTheme.border}`,
                    padding: 24,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: 18,
                    alignItems: 'center',
                }}
            >
                <div>
                    <span style={{ color: brandTheme.orange, fontSize: 13, fontWeight: 700, textTransform: 'uppercase' }}>Adopciones</span>
                    <h3 style={{ margin: '8px 0 10px', color: brandTheme.navy, fontSize: 'clamp(24px, 4vw, 32px)' }}>Apartado de adopciones dentro del Home</h3>
                    <p style={{ margin: 0, color: brandTheme.muted, lineHeight: 1.7 }}>
                        Este es el espacio para mostrar mascotas disponibles, requisitos y contacto para iniciar el proceso de adopción.
                    </p>
                </div>

                <div style={{ background: brandTheme.creamSoft, borderRadius: 16, border: `1px dashed ${brandTheme.orange}`, padding: 18 }}>
                    <strong style={{ display: 'block', marginBottom: 8, color: brandTheme.navy }}>Estructura sugerida</strong>
                    <ul style={{ margin: 0, paddingLeft: 18, color: brandTheme.muted, lineHeight: 1.8 }}>
                        <li>Listado de mascotas disponibles</li>
                        <li>Ficha rápida por mascota</li>
                        <li>Requisitos de adopción</li>
                        <li>Formulario o botón de contacto</li>
                    </ul>
                </div>
            </article>
        </section>
    );
}
