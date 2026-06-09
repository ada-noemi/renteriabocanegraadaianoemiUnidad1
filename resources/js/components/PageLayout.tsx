import React from 'react';
import SiteHeader from './SiteHeader';
import { brandTheme } from '../theme';

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ fontFamily: 'Segoe UI, sans-serif', background: brandTheme.bg, minHeight: '100vh', color: brandTheme.text }}>
            <SiteHeader />
            {children}
        </div>
    );
}