import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import { TableSortLabel } from '@mui/material';
import { Typography, Button, ButtonGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// import { Box } from '@mui/system';
import { addItemToCart, removeItemFromCart } from '../../redux/actions/cartActions';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { IMAGE } from '../../config';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom';

const Cart = () => {
    const cart_items = useSelector(state => state.cart.cart_items)
    
    console.log(cart_items)
    const dispatch = useDispatch()
    // const cart_item = [{ product_name: "Samsung Galaxy A22", product_description: "attractive looks, affordable price", product_image: "./mobile_img/image1.jpg", product_price: "Rs. 15000" },
    // { product_name: "Real Me", product_description: "attractive looks, affordable price", product_image: "./mobile_img/image2.jpg", product_price: "Rs. 85000" },
    // { product_name: "One Plus", product_description: "attractive looks, affordable price", product_image: "./mobile_img/image1.jpg", product_price: "Rs. 45000" },
    // { product_name: "Samsung Node", product_description: "attractive looks, affordable price", product_image: "./mobile_img/image2.jpg", product_price: "Rs. 63000" }]


    const no_of_items_in_cart = cart_items.map(i => i.quantity)
    const total_items = no_of_items_in_cart.length > 0 ? no_of_items_in_cart.reduce((acc, cur) => acc + cur) : 0

    // console.log(no_of_items_in_cart)
    // console.log(total_items)

    const individual_total = cart_items.map(i => i.quantity * i.price)
    const total_price = no_of_items_in_cart.length > 0 ? individual_total.reduce((acc, cur) => acc + cur) : 0

    const increaseItem = (item) => e => {
        e.preventDefault()
        let quantity = item.quantity
        quantity++
        if (quantity > item.stock) {
            toast.error(item.name + "Out of Stock")
        }
        else {
            dispatch(addItemToCart(item.product, quantity))
            toast.success(item.name + "Count Increased in Cart")
        }

    }

    const decreaseItem = (item) => e => {
        e.preventDefault()
        let quantity = item.quantity
        quantity--
        if (quantity == 0) {
            dispatch(removeItemFromCart(item.product))
            toast.error(item.name + "Item Removed From Cart")
        }
        else {
            dispatch(addItemToCart(item.product, quantity))
            toast.warning(item.name + "Item Count Decreased in Cart")
        }
    }

    const removeItem = (item) => e => {
        e.preventDefault()
        dispatch(removeItemFromCart(item.product))
        toast.warning(item.name + "Item Removed From Cart")
    }


    return (
        <>
            <ToastContainer theme="colored" position="top-right" />
            <Navbar />
            {
                cart_items && cart_items.length > 0 ?
                    <>
                        <div className='d-flex m-5 p-5'>

                            <TableContainer style={{ margin: "25px", padding: 5, width: "75%" }} >
                                <h2 className='text-center'>Cart Items</h2>
                                <Table border={5} >
                                    {/* <Table  border="5px solid blue"> */}
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className='text-center'> S.No.</TableCell >
                                            <TableCell className='text-center'> Product Image</TableCell>
                                            <TableCell className='text-center'> Product Name</TableCell>
                                            <TableCell className='text-center'> Product Price</TableCell>
                                            <TableCell className='text-center'> Quantity</TableCell>
                                            <TableCell className='text-center'> Total Price</TableCell>
                                            <TableCell className='text-center'> Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {
                                            cart_items.map((item, i) => {
                                                return <>
                                                    <TableRow key={i}>
                                                        <TableCell className='text-center'>{i + 1}</TableCell>

                                                        <TableCell className='text-center'>
                                                            <img src={`${IMAGE}/${item.image}`} height={'150px'} />
                                                        </TableCell>

                                                        <TableCell className='text-center'>
                                                            <Typography variant='h4'>{item.name}</Typography>
                                                            <Typography variant='body'>{item.product_description}</Typography>
                                                        </TableCell>

                                                        <TableCell className='text-center'>
                                                            <Typography variant='h5'>Rs. {item.price}</Typography>
                                                        </TableCell>

                                                        <TableCell className='text-center'>
                                                            <ButtonGroup>
                                                                <Button color='success' variant='contained' onClick={decreaseItem(item)}>-</Button>
                                                                <input type={'text'} readOnly value={item.quantity} className='text-center w-25' />
                                                                <Button color='error' variant='contained' onClick={increaseItem(item)}>+</Button>
                                                            </ButtonGroup>
                                                        </TableCell>
                                                        <TableCell className='text-center'>
                                                            <Typography variant='h5'>Rs. {item.price * item.quantity}</Typography>
                                                        </TableCell>
                                                        <TableCell className='text-center'>
                                                            <Button color='error' variant='contained' onClick={removeItem(item)}><i className='bi bi-trash w-25'></i></Button>
                                                        </TableCell>

                                                    </TableRow>
                                                </>
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <div className='p-5 m-5 shadow-lg text-center' style={{ width: "25%" }}>
                                <h2 >Order Summary</h2>
                                <hr className='my-2' />
                                <h4>Total Items:{total_items}</h4>
                                <h4>Total Price: Rs.{total_price}</h4>
                                <hr className='my-2' />
                                <Link to='/confirmorder' className='btn btn-warning'>Proceed to Checkout</Link>

                            </div>
                        </div>
                    </>
                    :
                    <div className='alert alert-danger'>No items in cart.</div>
            }







            <Footer />
        </>
    )
}

export default Cart