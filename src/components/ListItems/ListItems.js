import { dividerClasses } from "@mui/material";
import Item from '../Item/Item';

const ListItems= ()=> {
    const dataProducts = [
        {
            nombre:'Vela con aroma a citricos',
            precio: 1000,
            stock:2,
        },
        {
            nombre:'Vela con aroma a mango',
            precio: 400,
            stock: 10,
        },
        {
            nombre:'Vela con aroma a cereza',
            precio: 500,
            stock: 1,
        }
    ]
    return(
        <div>
        <h2>Productos destacados</h2>
            {dataProducts.map((productos)=>{
                return(
                    <Item  nombre={productos.nombre} precio={productos.precio} stock={productos.stock}/>
                )
            })}
        </div>

    )
}

export default ListItems;