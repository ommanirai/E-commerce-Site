import React, { useEffect, useState } from 'react'
import { getCategories } from '../api/categoryAPI'

const Checkbox_categories = ({handleFilters}) => {
    const [category, setCategories] = useState([])
    const [checked, setChecked] = useState([])

    const handleChange = e => {
        const newchecked = [...checked]
        const found = newchecked.findIndex(item => item === e.target.value)
        // returns index if already checked, -1 if not checked
        if (found === -1) {
            newchecked.push(e.target.value)
        } else {
            newchecked.splice(found, 1)
        }
        setChecked(newchecked)
        handleFilters(newchecked, 'category')
    }


    useEffect(() => {
        getCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategories(data)
                }
            })

    }, [])


    return (
        <>
            {
                category.map((category, i) => {
                    return <div className="form-check my-1" key={i}>
                        <input className="form-check-input mt-1 me-2" type="checkbox" id={`flexCheckDefault${i}`} onChange={handleChange} value={category._id} />
                        <label className="form-check-label" htmlFor={`flexCheckDefault${i}`} >
                            {category.category_name}
                        </label>
                    </div>

                })
            }







        </>
    )
}

export default Checkbox_categories