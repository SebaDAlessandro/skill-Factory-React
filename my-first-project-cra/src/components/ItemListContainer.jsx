import ItemCount from "./ItemCount";
import {useState, useEffect } from 'react'
import Card from './Card'


const ItemListContainer = ({nameEcommerce})=>{

    //console.log('ItemListContainer')

    const [productos, setProductos] = useState([]);
    console.log('productos: ',productos)

    const getProducts = async ()=>{
        try {            
            const response = await fetch(`https://fakestoreapi.com/products/`);
            //console.log(response)
            const data = await response.json();
            //console.log(data)
            setProductos(data)
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(()=>{
        getProducts()
    },[]) //array de dependencias del useEffect. En este caso solo se ejecuta una sola vez

    return(
        <div>
            <h1>Usted esta ingresando a: {nameEcommerce}</h1>
            <ItemCount
                stock={15}
                initial={1}
            />
            <div className='cards__dashboard'>
{/*             {productos.map((producto)=>{
                return(
                    <div key={producto.id}>
                        <Card 
                            title={producto.title}
                            id={producto.id}
                            image={producto.image}
                            price={producto.price}
                            description={producto.description}
                        />
                    </div>
                )
            })} */}
            {productos.map((producto, index)=>{ //se agrega el segundo parametro index! no gasta recursos extras y sirve para identificar la key
                return(
                        <Card 
                            key={index}
                            title={producto.title}
                            id={producto.id}
                            image={producto.image}
                            price={producto.price}
                            description={producto.description}
                        />
                )
            })}
            </div>
        </div>
    )
}

export default ItemListContainer;