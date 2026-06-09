import React from 'react';
import { brandTheme } from '../theme';

export type NavLink = {
    label: string;
    href: string;
    items?: NavLink[];
};


export const mainNavLinks: NavLink[] = [
    { label: 'Inicio', href: '/' },
    {
        label: 'Perro',
        href: '/productos#perro',
        items: [
            { label: 'Alimento Seco', href: '/productos#perro' },
            { label: 'Alimento Humedo', href: '/productos#perro' },
            { label: 'Accesorios', href: '/productos#perro' },
            { label: 'Premios', href: '/productos#perro' },
            { label: 'Salud y Bienestar', href: '/productos#perro' },
        ],
    },
    {
        label: 'Gato',
        href: '/productos#gato',
        items: [
            { label: 'Arena', href: '/productos#gato' },
            { label: 'Alimento Seco', href: '/productos#gato' },
            { label: 'Alimento Humedo', href: '/productos#gato' },
            { label: 'Rascadores', href: '/productos#gato' },
            { label: 'Salud y Bienestar', href: '/productos#gato' },
        ],
    },
    {
        label: 'Peces',
        href: '/productos#peces',
        items: [
            { label: 'Acuarios', href: '/productos#peces' },
            { label: 'Decoracion', href: '/productos#peces' },
            { label: 'Filtros', href: '/productos#peces' },
            { label: 'Alimentos', href: '/productos#peces' },
        ],
    },
    {
        label: 'Aves',
        href: '/productos#aves',
        items: [
            { label: 'Jaulas', href: '/productos#aves' },
            { label: 'Alimentos', href: '/productos#aves' },
            { label: 'Juguetes', href: '/productos#aves' },
            { label: 'Higiene', href: '/productos#aves' },
        ],
    },
    {
        label: 'Pequeñas Especies',
        href: '/productos#pequenas-especies',
        items: [
            { label: 'Roedores', href: '/productos#pequenas-especies' },
            { label: 'Reptiles', href: '/productos#pequenas-especies' },
        ],
    },
    { label: 'Adopciones', href: '/adopciones' },
   
];
export default function SiteHeader() {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    const [searchTerm, setSearchTerm] = React.useState('');
    const navRef = React.useRef<HTMLElement | null>(null);

    React.useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setOpenMenu(null);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const actionButtonStyle: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 42,
        height: 42,
        borderRadius: 999,
        border: `1px solid rgba(239, 232, 216, 0.28)`,
        background: 'rgba(239, 232, 216, 0.12)',
        color: brandTheme.creamSoft,
        textDecoration: 'none',
        flexShrink: 0,
    };

    function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const query = searchTerm.trim();

        if (!query) {
            return;
        }

        window.location.href = `/busqueda?q=${encodeURIComponent(query)}`;
    }

    return (
        <>
            <div style={{ height: 8, background: brandTheme.navy }} />

            <header style={{ background: brandTheme.navy, color: brandTheme.creamSoft, borderBottom: `1px solid rgba(239, 232, 216, 0.2)`, boxShadow: '0 8px 24px rgba(12, 40, 62, 0.12)' }}>
                <div style={{ maxWidth: 1180, margin: '0 auto', padding: '16px 16px 14px', display: 'grid', gap: 14 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
                            <img
                                src="/images/pertword.png"
                                alt="PetWord"
                                style={{
                                    width: 92,
                                    height: 92,
                                    objectFit: 'contain',
                                    display: 'block',
                                    flexShrink: 0,
                                    filter: 'drop-shadow(0 6px 12px rgba(12, 40, 62, 0.15))',
                                }}
                            />
                            <div style={{ lineHeight: 1 }}>
                                <strong style={{ display: 'block', fontSize: 'clamp(26px, 3.5vw, 34px)', lineHeight: 1, letterSpacing: '0.2px' }}>
                                    <span style={{ color: brandTheme.creamSoft }}>Pet</span>
                                    <span style={{ color: brandTheme.orange }}>Word</span>
                                </strong>
                                
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                            <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center', background: 'rgba(239, 232, 216, 0.12)', borderRadius: 999, padding: '10px 14px', width: 'min(100%, 320px)', flex: '1 1 240px', border: `1px solid rgba(239, 232, 216, 0.28)` }}>
                                <span style={{ color: brandTheme.creamSoft, marginRight: 8 }}>Búsqueda</span>
                                <input
                                    type="search"
                                    placeholder="Buscar productos o categorias"
                                    value={searchTerm}
                                    onChange={(event) => setSearchTerm(event.target.value)}
                                    style={{ border: 'none', outline: 'none', width: '100%', color: brandTheme.creamSoft, fontSize: 14, background: 'transparent' }}
                                />
                            </form>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', color: brandTheme.creamSoft, fontWeight: 700 }}>
                                <a
                                    href="/registrar"
                                    style={actionButtonStyle}
                                    aria-label="Registrar"
                                    title="Registrar"
                                >
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M15 20a4 4 0 0 0-8 0" />
                                        <circle cx="11" cy="8" r="4" />
                                        <path d="M20 8v6" />
                                        <path d="M17 11h6" />
                                    </svg>
                                </a>
                                <a
                                    href="/login"
                                    style={actionButtonStyle}
                                    aria-label="Inicio de sesion"
                                    title="Inicio de sesion"
                                >
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                                        <path d="M10 17l5-5-5-5" />
                                        <path d="M15 12H3" />
                                    </svg>
                                </a>
                                <a href="/carrito" style={{ position: 'relative', ...actionButtonStyle }} aria-label="Carrito" title="Carrito estático">
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="9" cy="20" r="1" />
                                        <circle cx="18" cy="20" r="1" />
                                        <path d="M1 1h4l2.6 13.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L23 6H6" />
                                    </svg>
                                    <span style={{ position: 'absolute', top: -5, right: -5, minWidth: 18, height: 18, padding: '0 4px', borderRadius: 999, background: brandTheme.orange, color: '#fff', fontSize: 11, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${brandTheme.navy}` }}>0</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ borderTop: `1px solid rgba(239, 232, 216, 0.18)`, paddingTop: 12, display: 'grid', gap: 10 }}>
                        <nav
                            aria-label="Secciones principales"
                            ref={navRef}
                            style={{
                                display: 'flex',
                                gap: 10,
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                padding: 0,
                                position: 'relative',
                            }}
                        >
                            {mainNavLinks.map((link) => (
                                <div
                                    key={link.label}
                                    style={{ position: 'relative' }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={(event) => {
                                            if (!link.items) {
                                                setOpenMenu(null);
                                                return;
                                            }

                                            event.preventDefault();
                                            setOpenMenu((current) => (current === link.label ? null : link.label));
                                        }}
                                        style={{
                                            color: brandTheme.creamSoft,
                                            textDecoration: 'none',
                                            padding: '9px 12px',
                                            borderRadius: 999,
                                            fontSize: 14,
                                            fontWeight: 700,
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 6,
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        <span>{link.label}</span>
                                        {link.items ? (
                                            <svg viewBox="0 0 20 20" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                                <path d="m5 7 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        ) : null}
                                    </a>

                                    {link.items && openMenu === link.label ? (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 'calc(100% + 8px)',
                                                left: 0,
                                                minWidth: 186,
                                                background: '#fff',
                                                borderRadius: 10,
                                                boxShadow: '0 16px 34px rgba(12, 40, 62, 0.18)',
                                                border: '1px solid rgba(12, 40, 62, 0.08)',
                                                padding: '8px 0',
                                                zIndex: 20,
                                            }}
                                        >
                                            {link.items.map((item) => (
                                                <a
                                                    key={item.label}
                                                    href={item.href}
                                                    style={{
                                                        display: 'block',
                                                        padding: '10px 22px',
                                                        color: brandTheme.orange,
                                                        textDecoration: 'none',
                                                        fontSize: 15,
                                                        fontWeight: 500,
                                                        background: '#fff',
                                                    }}
                                                >
                                                    {item.label}
                                                </a>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                            ))}
                        </nav>

                    </div>
                </div>
            </header>
        </>
    );
}
