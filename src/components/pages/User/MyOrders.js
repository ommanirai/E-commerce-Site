import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../../api/userAPI'
import { getMyOrders } from '../../../redux/actions/orderAction'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'
import UserSidebar from '../../layout/UserSidebar'

const MyOrders = () => {
  const { user, token } = isAuthenticated()
  const dispatch = useDispatch()
  const myOrders = useSelector(state => state.myOrders.order)

  useEffect(() => {
    dispatch(getMyOrders(user._id, token))
  }, [])

  console.log(myOrders)

  return (
    <>
      <Navbar />
      <div className='container-fluid p-0'>
        <div className='row ms-0'>
          <div className='col-md-3 ps-0'>
            <UserSidebar />
          </div>
          <div className='col-md-8 p-5'>
            My Orders
            <table className='table'>
              <thead>
                <tr>
                  <td>S.No.</td>
                  <td>No. of Items</td>
                  <td>Total Price</td>
                  <td>Status</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {
                  myOrders &&
                  myOrders.map((item, i) => {
                    return <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{item.orderItems.length}</td>
                      <td>{item.total_price}</td>
                      <td>{item.status}</td>
                      <td><Link to=''>View Details</Link></td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default MyOrders