import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { db } from '../firebase/firebase'
import { getDoc, doc, updateDoc } from 'firebase/firestore'

export const UpdateProducts = () => {
  const [product, setProduct] = useState({
    title:"",
    description: "",
    stock: 0
  })

  const navigate = useNavigate()
  const { id } = useParams()
  
  const getProductByID = async (id)=>{
    const productRef = doc(db, 'products', id)
    try {      
      const productSnap = await getDoc(productRef)
      if(productSnap.exists()){
        setProduct(productSnap.data())
      }else{
        alert('no such document!')
        navigate('/')
      }
    } catch (error) {
      alert('server conection error!')
      navigate('/')
    }

  }

  const editProduct = async (e)=>{
    e.preventDefault()
    const productRef = doc(db, 'products', id)
    const newData = product
    try {
      await updateDoc(productRef, newData)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e)=>{
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  useEffect(()=>{
    getProductByID(id)
  },[id])

  return (
    <div>
        <h1>UpdateProduct</h1>
        <form onSubmit={editProduct}>
          <input
            type='text'
            name='title'
            placeholer='Title'
            value={product.title}
            onChange={handleChange}
          />

          <input
            type='text'
            name='description'
            placeholer='Description'
            value={product.description}
            onChange={handleChange}
          />

          <input
            type='number'
            name='stock'
            placeholer='Stock'
            value={product.stock}
            onChange={handleChange}
          />

          <Button type='submit'>update</Button>

        </form>
    </div>
  )
}