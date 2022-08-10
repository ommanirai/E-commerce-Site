import { Checkbox } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getFilteredProducts, getProducts } from '../../api/productAPI'
import Card from '../Card'
import Checkbox_categories from '../Checkbox_categories'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import Product from '../Product'
import Radio_Prices from '../Radio_Prices'

const Deals = () => {
    const [sortBy, setSortBy] = useState('createdAt')
    const [order, setOrder] = useState('ASC')
    const [limit, setLimit] = useState(4)
    const [skip, setSkip] = useState(0)
    const [products, setProducts] = useState([])
    const [myfilter, setmyFilter] = useState({
        filters: { category: [], product_price: [] }
    })

    const handleFilters = (filters, filterBy) => {
        const newFilters = { ...myfilter }
        newFilters.filters[filterBy] = filters
        setmyFilter(newFilters)
    }

    useEffect(() => {
        getFilteredProducts(sortBy, order, limit, skip, myfilter)
            .then(data => {
                // console.log(data)
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setProducts(data.filteredProducts)
                }
            })
    }, [myfilter])

    return (
        <>
            <Navbar />
            <div className='row'>
                <div className='col-3 mt-5 ps-5'>
                    <h2 className='text-decoration-underline fw-bold text-info'>Categories</h2>
                    {/* <ul className='list-unstyled fw-bold fs-5'>
                        <li>Deals of the Day</li>
                        <li>Most Popular</li>
                        <li>Flash Sale</li>
                    </ul> */}
                    <Checkbox_categories handleFilters={handleFilters} />
                    <h2 className='text-decoration-underline fw-bold text-info mt-4'>Prices</h2>
                    <Radio_Prices handleFilters={handleFilters} />
                    {/* <div className="form-check ps-0 mt-2">
                        <input className="form-check-input mt-2 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label fw-bold fs-5" htmlFor="flexRadioDefault1">
                            All
                        </label>
                    </div>
                    <div className="form-check ps-0 mt-2">
                        <input className="form-check-input mt-2 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label fw-bold fs-5" htmlFor="flexRadioDefault2">
                            Rs. 0 to 1000
                        </label>
                    </div>
                    <div className="form-check ps-0 mt-2">
                        <input className="form-check-input mt-2 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                        <label className="form-check-label fw-bold fs-5" htmlFor="flexRadioDefault3">
                            Rs. 1000 to 10000
                        </label>
                    </div>
                    <div className="form-check ps-0 mt-2">
                        <input className="form-check-input mt-2 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                        <label className="form-check-label fw-bold fs-5" htmlFor="flexRadioDefault4">
                            Rs. 10000 to 100000
                        </label>
                    </div>
                    <div className="form-check ps-0 mt-2">
                        <input className="form-check-input mt-2 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                        <label className="form-check-label fw-bold fs-5" htmlFor="flexRadioDefault5">
                            Rs. 100000 to 1000000
                        </label>
                    </div> */}



                </div>
                <div className='col-md-9 mt-4'>
                    <div className='row row-cols-md-4 g-4'>
                        {
                            products.map((product, i) => {
                                return <Card key={i} item={product} />
                            })
                        }
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Deals