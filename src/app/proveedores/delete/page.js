import Form from "@/components/Form_Prov"
import { db } from "@/lib/mysql"
import { deleteProveedor } from "@/lib/actions"

async function page({ searchParams }) {
  const [proveedores] = await db.query('select * from proveedores where codigo = ?', [searchParams.codigo]);
  return (
    <div>
      <h3>Eliminar artículo {searchParams.codigo}</h3>
      <Form action={deleteProveedor} title='Eliminar proveedor' proveedores={proveedores} disabled={true} />
    </div>
  )
}

export default page