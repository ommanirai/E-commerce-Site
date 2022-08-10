import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addCategory } from '../../../api/categoryAPI'
import { isAuthenticated } from '../../../api/userAPI'
import AdminSidebar from '../../layout/AdminSidebar'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'

const AddCategory = () => {
    const {token} = isAuthenticated()
    

    const [category, setCategory] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const navigate = useNavigate()


    const handleSubmit = () => {
        addCategory(category, token)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setSuccess(true)
                }
            })
    }
    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const redirect = () => {
        if (success) {
            return navigate('/admin/category')
        }
    }


    return (
        <>
            <Navbar />
            <div className='container-fluid p-0'>
                <div className='row ms-0'>
                    <div className='col-md-3 ps-0'>
                        <AdminSidebar Category />
                    </div>
                    <div className='col-md-9 p-5'>
                        <div className='d-flex justify-content-between w-75 mx-auto'>
                            <h4>
                                Add Category
                            </h4>
                            <Link to="/admin/category" className='btn btn-warning'>Go Back</Link>
                        </div>
                        
                        <div className='container my-5 w-50'>
                        {showError()}
                        {redirect()}
                            <label htmlFor='category'>Category Name</label>
                            <input type={'text'} id='category' className='form-control' onChange={e => setCategory(e.target.value)} />
                            <button className='btn btn-warning mt-2 form-control' onClick={handleSubmit}>Add Category</button>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AddCategory