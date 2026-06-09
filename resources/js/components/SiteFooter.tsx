import React from 'react';
import { brandTheme } from '../theme';
import { mainNavLinks } from './SiteHeader';

type SiteFooterProps = {
    categories: { id: number; name: string }[];
    helpLinks: string[];
};

export default function SiteFooter({ categories, helpLinks }: SiteFooterProps) {
    return (
        <footer id="mapa-del-sitio" style={{ background: brandTheme.navyDeep, color: brandTheme.cream }}>
            <div style={{ maxWidth: 1180, margin: '0 auto', padding: '28px 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
                <section id="contacto">
                    <h3 style={{ marginTop: 0, color: brandTheme.creamSoft }}>Soporte y contacto</h3>
                    <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                        {helpLinks.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                        <li>Correo: contacto@petword.test</li>
                    </ul>
                </section>

                <section>
                    <h3 style={{ marginTop: 0, color: brandTheme.creamSoft }}>Secciones principales</h3>
                    <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                        {mainNavLinks.map((link) => (
                            <li key={link.label}>{link.label}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h3 style={{ marginTop: 0, color: brandTheme.creamSoft }}>Secciones secundarias</h3>
                    <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                        {categories.map((category) => (
                            <li key={category.id}>{category.name}</li>
                        ))}
                        <li>Adopciones</li>
                        <li>Detalle de producto</li>
                        <li>Resultados de busqueda</li>
                        <li>Pagina 404</li>
                    </ul>
                </section>
            </div>
        </footer>
    );
}
