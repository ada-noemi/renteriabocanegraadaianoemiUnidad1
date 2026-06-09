export type Category = {
    id: number;
    name: string;
    slug: string;
    image: string;
};

export type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    petType: 'perro' | 'gato' | 'peces' | 'aves' | 'pequenas-especies';
    image?: string;
};

export type SitePage = {
    id: string;
    title: string;
    description: string;
    href: string;
    section: 'principal' | 'adicional';
};

export const categories: Category[] = [
    { id: 1, name: 'Peces', slug: 'peces', image: '/images/categories/pez.webp' },
    { id: 2, name: 'Perros', slug: 'perros', image: '/images/categories/perro.webp' },
    { id: 3, name: 'Gatos', slug: 'gatos', image: '/images/categories/gato.webp' },
    { id: 4, name: 'Roedores', slug: 'roedores', image: '/images/categories/roedores.webp' },
    { id: 5, name: 'Aves', slug: 'aves', image: '/images/categories/aves.webp' },
    { id: 6, name: 'Reptiles', slug: 'reptiles', image: '/images/categories/reptiles.webp' },
];

export const products: Product[] = [
    { id: 1, name: 'Croquetas Premium', price: 349, category: 'Alimento Seco', petType: 'perro', image: '/images/products/croquetas.jpg' },
    { id: 2, name: 'Juguete Mordedera', price: 129, category: 'Accesorios', petType: 'perro', image: '/images/products/mordedera.webp' },
    { id: 3, name: 'Arena Sanitaria', price: 95, category: 'Higiene', petType: 'gato', image: '/images/products/arena.webp' },
    { id: 4, name: 'Rascador', price: 219, category: 'Accesorios', petType: 'gato', image: '/images/products/rascador.webp' },
    { id: 5, name: 'Alimento para Peces', price: 45, category: 'Alimentos', petType: 'peces', image: '/images/products/alimento peces.webp' },
    { id: 6, name: 'Acuario Basico', price: 399, category: 'Acuarios', petType: 'peces', image: '/images/products/lampara.webp' },
    { id: 7, name: 'Jaula para Aves', price: 239, category: 'Jaulas', petType: 'aves', image: '/images/products/jaula.webp' },
    { id: 8, name: 'Juguete para Canarios', price: 89, category: 'Juguetes', petType: 'aves', image: '/images/products/canarios.webp' },
    { id: 9, name: 'Heno Premium', price: 149, category: 'Roedores', petType: 'pequenas-especies', image: '/images/products/heno.webp' },
    { id: 10, name: 'Casa para Roedor', price: 199, category: 'Habitat', petType: 'pequenas-especies', image: '/images/products/casa roedores.png' },
];

export const sitePages: SitePage[] = [
    { id: 'inicio', title: 'Inicio', description: 'Portada principal del sitio.', href: '/', section: 'principal' },
    { id: 'categorias', title: 'Categorias', description: 'Explora categorias de mascotas.', href: '/categorias', section: 'principal' },
    { id: 'productos', title: 'Productos', description: 'Catalogo de productos disponibles.', href: '/productos', section: 'principal' },
    { id: 'promociones', title: 'Promociones', description: 'Beneficios y promociones exclusivas.', href: '/promociones', section: 'principal' },
    { id: 'mas-vendidos', title: 'Mas vendidos', description: 'Productos con mayor demanda.', href: '/mas-vendidos', section: 'principal' },
    { id: 'registrar', title: 'Registrar', description: 'Alta de nuevos usuarios.', href: '/registrar', section: 'adicional' },
    { id: 'buzon', title: 'Buzon', description: 'Mensajes y notificaciones.', href: '/buzon', section: 'adicional' },
    { id: 'login', title: 'Inicio de sesion', description: 'Acceso de usuarios registrados.', href: '/login', section: 'adicional' },
    { id: 'ayuda', title: 'Ayuda', description: 'Soporte y preguntas frecuentes.', href: '/ayuda', section: 'adicional' },
    { id: 'contacto', title: 'Contactanos', description: 'Canales de soporte y contacto.', href: '/contacto', section: 'adicional' },
    { id: 'recuperacion', title: 'Recuperacion de contraseña', description: 'Recupera el acceso a tu cuenta.', href: '/recuperacion', section: 'adicional' },
    { id: 'chat', title: 'Chat', description: 'Atencion en linea para el usuario.', href: '/chat', section: 'adicional' },
    { id: 'mapa-del-sitio', title: 'Mapa del sitio', description: 'Estructura general de la navegacion.', href: '/mapa-del-sitio', section: 'adicional' },
    { id: 'carrito', title: 'Carrito', description: 'Vista estatica del carrito.', href: '/carrito', section: 'adicional' },
];