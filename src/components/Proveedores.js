

function Proveedores({ children, proveedor }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <p><strong>{proveedor?.nombre ?? "Nombre no disponible"}</strong></p>
            <p>{proveedor && proveedor.telefono}</p>
            {children}
        </div>
    )
}

export default Proveedores