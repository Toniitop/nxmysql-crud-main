
function Form({ action, title, proveedor, disabled }) {

    return (
        <form action={action} >
            <input type='hidden' name='codigo' value={proveedor?.codigo} />
            <fieldset disabled={disabled}>
                <label htmlFor='codigo'>ID</label>
                <input type='number' id='codigo' name='codigo'
                    placeholder='codigo'
                    defaultValue={proveedor?.codigo} autoFocus ></input>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' id='nombre' name='nombre'
                    placeholder='nombre'
                    defaultValue={proveedor?.nombre} />
                <label htmlFor='telefono'>Telefono</label>
                <input type='number' id='telefono' name='telefono' min='0' step={0.01}
                    placeholder='telefono'
                    defaultValue={proveedor?.telefono} />
            </fieldset>
            <button type='submit'>{title}</button>
        </form>
    )
}

export default Form