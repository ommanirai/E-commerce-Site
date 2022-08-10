import React, { useState } from 'react'
import { prices } from './Prices'

const Radio_Prices = ({handleFilters}) => {
    const [checked, setChecked] = useState([])
    const handleChange = e => {
        // console.log(handlePrice(e.target.value))
        let val = handlePrice(e.target.value)
        // setChecked(val)
        handleFilters(val, 'product_price')
        // setChecked(e.target.value)
        // console.log(checked)
        // console.log(val)
    }

    const handlePrice = id =>{
        const price = prices.find(item=> item._id == id)
        return price.value
    }

    return (
        <>
            {
                prices.map((price, i) => {
                    return <div className="form-check ps-0 mt-2" key={i}>
                        <input className="form-check-input mt-2 me-2" type="radio" name="flexRadioDefault" id={`flexRadioDefault2${i}`} value={price._id} onChange={handleChange} />
                        <label className="form-check-label fs-5" htmlFor={`flexRadioDefault2${i}`}>
                            {price.name}
                        </label>
                    </div>
                })
            }




        </>
    )
}

export default Radio_Prices