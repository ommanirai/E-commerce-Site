import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerUser } from '../../api/userAPI'



const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const register = e => {
        e.preventDefault()
        registerUser(username, email, password)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                    setSuccess('')
                }
                else {
                    setSuccess("New User Created")
                    setError('')
                    setUsername('')
                    setPassword('')
                    setEmail('')
                }
            })
    }

    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }

    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-success'>{success}</div>
        }
    }


    return (
        <>
            <main className="form-signin w-50 m-auto mx-auto p-5  mt-5 shadow-lg">
                {showError()}
                {showSuccess()}
                <form>
                    <div className='text-center'>
                        <img className="mb-4" src="./mobile_img/image1.jpg" alt="" width="72" height="57" /></div>
                    <h1 className="h3 mb-3 fw-normal">Register Here</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingfirstname" placeholder="First Name" onChange={e => setUsername(e.target.value)} value={username}/>
                        <label htmlFor="floatingfirstname">Username</label>
                    </div><br />

                    {/* <div className="form-floating">
                        <input type="text" className="form-control" id="floatinglastname" placeholder="lasteeeeeeeeeeeeeeeee Name" />
                        <label htmlFor="floatinglastname">Last Name</label>
                    </div><br />

                    <div className="form-floating">
                        <input type="date" className="form-control" id="floatingdate" placeholder="Date of Birth" />
                        <label htmlFor="floatingdate">Date of Death</label>
                    </div><br />

                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingphone" placeholder="Phone Number" />
                        <label htmlFor="floatingphone">Phone Number</label>
                    </div><br /> */}

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} value={email}/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div><br />

                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password}/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div><br />

                    {/* <div className="form-floating">
                        <input type="password" className="form-control" id="floatingCPassword" placeholder="Confirm Password" />
                        <label htmlFor="floatingCPassword">Confirm Password</label>
                    </div> */}

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> I accept the terms and conditions.
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={register}>Register</button>

                    Already have an account? <Link to="/signin">Sign in</Link>

                    <p className="mt-5 mb-3 text-muted">&copy; 2022–2023</p>
                </form>
            </main>





        </>
    )
}

export default Register