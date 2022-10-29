import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { db } from '../firebase/firebase'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { Button } from 'react-bootstrap'


const MySwal = withReactContent(Swal)

export const Product = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts()
    },[])

    //console.log(db)
    const productCollections = collection(db, 'products')
    //console.log(productCollections)

    const getProducts = async ()=>{
        const dataProducts = await getDocs(productCollections)
        //console.log('dataProducts: ',dataProducts)
        //console.log('dataProducts: ',dataProducts.docs)
        setProducts(
          dataProducts.docs.map((doc)=>({...doc.data(), id: doc.id}))
        )
    }

    const confirmDeleteProduct = (id)=>{
      MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          deleteProduct(id)
        }
      })
    }

    const deleteProduct = async (id)=>{
      const productToDelete = doc(db,'products',id)
      try {
        await deleteDoc(productToDelete)
        MySwal.fire({
          title:'Delete product',
          text:'the product was successfully removed',
          icon:'success',
          confirmButtonText: 'Ok',
        })
      } catch (error) {
        MySwal.fire({
          title: 'Error in communication with the server!',
          text: 'The product could not be removed, please try again later...',
          icon:'error',
          confirmButtonText: 'Ok',
        })
      }
      getProducts()
    }

  return (
    <div>
        {/* {console.log('products: ', products)} */}
        <h1>Products</h1>
        <Link to='/create'><Button variant='success'>Create Product</Button></Link>
        {products.map(product =>{
          return(
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>Description: {product.description}</p>
              <p>Id: {product.id}</p>
              <Button onClick={()=>confirmDeleteProduct(product.id)} variant="danger">Delete</Button>
              <Link to={`/update/${product.id}`}><Button>Update</Button></Link>
            </div>
          )
        })}
    </div>
  )
}
