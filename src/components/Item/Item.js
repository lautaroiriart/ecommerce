const Item = ({id,nombre,precio,stock,pictureUrl}) => {
    return(
        <div>
            <p>ID: {id} </p>
            <p>Nombre: {nombre}</p>
            <p>Precio: {precio}</p>
            <p>Stock: {stock}</p>
            <img src={pictureUrl}/>
            
        </div>
    )
}

export default Item;