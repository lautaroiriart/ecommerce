import { useEffect, useState } from "react";
import Item from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom'
import { productosBaseDeDatos } from "../../datos/ProductosBaseDeDatos";


const ItemList= ()=> {
    
    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])

    const getProducts = new Promise ((resolve, reject) =>{
        setTimeout( () => {
            resolve(productosBaseDeDatos)
        }, 2000)
    })
    
    useEffect( () => {
        getProducts.then((data) => {
            setProducts (data)
            setLoader(false)
        })
    }, [])
    return(
        <div>
        <h2>Productos destacados</h2>
        {
            loader && <CircularProgress/> 
        }
            {products.map( (product) => {
                return(
                    <>
                        <div >     
                            <Grid key={product.id}>
                                    <Item  nombre={product.nombre} precio={product.precio} stock={product.stock} pictureUrl={product.pictureUrl}/>
                                    <ItemCount stock={product.stock}/>
                            </Grid>
                        </div>
                        <Link to={`/items/${product.id}`}> 
                            <button>Ver mas detalles</button>
                        </Link>
                     </>  
                )
            })}
        </div>

    )
}

export default ItemList;