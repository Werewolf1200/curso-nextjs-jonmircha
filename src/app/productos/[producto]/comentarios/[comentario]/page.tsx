// Rutas Dinamicas

export default function ComentDetail({
    params,
}: {
        params: {
            producto: string
            comentario: string
        };
}) {
    return <h1>Comentario { params.comentario } del Producto { params.producto }</h1>
}