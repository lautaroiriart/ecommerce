const Item = ({nombre,precio,stock}) => {
    return(
        <div>
            <p>Nombre: {nombre}</p>
            <p>Precio: {precio}</p>
            <p>Stock: {stock}</p>
        </div>
    )
}

export default Item;