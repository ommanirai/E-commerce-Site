import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRelatedProducts, productDetails } from '../../../api/productAPI'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import { IMAGE } from '../../../config'
import Card from '../../Card'
import { addItemToCart } from '../../../redux/actions/cartActions'
import { useDispatch } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { isAuthenticated } from '../../../api/userAPI'
import UserProfile from '../User/UserProfile'

const ProductDetailss = () => {
    const {user} = isAuthenticated()
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [relatedProducts, setRelatedProducts] = useState([])
    const dispatch = useDispatch()
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        productDetails(id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setProduct(data)
                }
            })
        getRelatedProducts(id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setRelatedProducts(data)
                }
            })
    }, [id, success])

    const addToCart = () => {
        setSuccess(false)
        dispatch(addItemToCart(id, 1))
            .then(() => {
                toast.success('ITEM ADDED TO CART')
                setSuccess(true)
            })
    }

    return (
        <>
            <ToastContainer theme='colored' position='top-right' />
            <Navbar />
            <div className='w-75 mx-auto my-5 p-5 shadow-lg d-flex'>
                <div className='image-div w-50 p-5'>
                    <img src={`${IMAGE}/${product.product_image}`} className='w-100' />
                </div>
                <div className='product-description p-5 w-50'>
                    Product Description
                    <h4 className='mb-2'>{product.product_name}</h4>
                    <h5 className='mb-2'>Rs. {product.product_price}</h5>
                    <h5 className='mb-2'>Available: {product.count_in_stock}</h5>
                    <p className='mb-5'>Description: {product.product_description}</p>
                    {
                        ((user && user.role ===  0) || !user) && 
                    <button className='btn btn-warning form-control' onClick={addToCart}>Add to Cart</button>
                    }
                </div>
            </div>
            <div className='row row-cols-md-4 g-4'>
                {
                    relatedProducts.map((product, i) => {
                        return <Card key={i} item={product} />
                    })
                }
            </div>
            <Footer />
        </>
    )
}

export default ProductDetailss