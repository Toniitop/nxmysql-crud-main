import Link from 'next/link'
import Proveedores from '@/components/Proveedores'
import { getProveedores } from '@/lib/actions'

export default async function Home() {
    const proveedores = await getProveedores()
    // console.log(proveedores);

    return (
        <div>
            <Link className='enlace' href="/proveedores/new"> Nuevo proveedor </Link>
            {
                proveedores.map((proveedores) => (
                    <Proveedores key={proveedores.codigo} proveedores={proveedores} >
                        <Link
                            className='enlace'
                            href={{ pathname: '/proveedores/edit', query: { codigo: proveedores.codigo } }}>
                            Editar artículo
                        </Link>
                        <Link
                            className='enlace'
                            href={{ pathname: '/proveedores/delete', query: { codigo: proveedores.codigo } }}>
                            Eliminar artículo
                        </Link>
                    </Proveedores>
                ))
            }
        </div>
    )
}
