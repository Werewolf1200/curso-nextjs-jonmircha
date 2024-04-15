import { Metadata } from 'next';

type Props = {
        params: {
            producto: string
        };
}


// Metadata Dinamica

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Producto ${params.producto}`
    }
}

// Rutas Dinamicas
export default function ProductDetail({params}: Props) {
    return <h1>Producto { params.producto }</h1>
}