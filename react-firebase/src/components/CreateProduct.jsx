import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { db } from '../firebase/firebase'
import { collection, addDoc } from 'firebase/firestore'

const MySwal = withReactContent(Swal)

export const CreateProduct = () => {

  const [product, setProduct] = useState({
    title: "",
    description: "",
    stock: 0
  })

  const navigate = useNavigate()

  const productCollection = collection(db, 'products')

  const addProduct = async (e)=>{
    e.preventDefault()

    try {
      await addDoc(productCollection,product)
      MySwal.fire({
        title: 'Created!',
        text: 'Your product has been created successfully',
        icon: 'success',
        confirmButtonText: 'Ok',
      })      
    } catch (error) {
      MySwal.fire({
        title: 'Error!',
        text: 'Your product has not been created',
        icon: 'error',
        confirmButtonText: 'Ok',
      })  
    }

    navigate('/')
  }

  const handleChange = (e)=>{
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
        <h1>CreateProduct</h1>
        <form onSubmit={addProduct}>
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={product.title}
            onChange={handleChange}
          />
          <input
            type='text'
            name='description'
            placeholder='description'
            value={product.description}
            onChange={handleChange}
          />
          <input
            type='number'
            name='stock'
            placeholder='stock'
            value={product.stock}
            onChange={handleChange}
          />
          <Button variant='success' type='submit'>Creat Product</Button>
        </form>
    </div>
  )
}