import React from 'react'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'
import UserSidebar from '../../layout/UserSidebar'

const UserProfile = () => {
  return (
    <>
      <Navbar />
      <div className='container-fluid p-0'>
        <div className='row ms-0'>
          <div className='col-md-3 ps-0'>
            <UserSidebar />
          </div>
          <div className='col-md-8 p-5'>
            Welcome to user profile.
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default UserProfile