import React, { useState } from 'react'
import registerAction from '../redux/registerAction'
import { useDispatch } from 'react-redux'

const Register = () => {
  const dispatch = useDispatch()
  const [register, setRegister] = useState({
    Name: "varsha harkal",
    Email: "varsha@gmail.com",
    password: "123",
    cPassword: "123"
  })


  return <>
    <div className="bg">

      <div className="container">
        <div className="row">
          <div className='col-md-5'></div>
          <div className="col-md-7 col-sm-12 mt-5">
            <div className="card">
              <div className="card-header">Signup</div>
              <div className="card-body">
                <div>
                  <label htmlFor="name" className="form-label">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={e => setRegister({ ...register, Name: e.target.value })}
                    value={register.Name}
                    id="name"
                    placeholder="Enter your name"
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">Please choose a username.</div>
                </div>
                <div className="mt-2">
                  <label htmlFor="email" className="form-label">First Email</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={e => setRegister({ ...register, Email: e.target.value })}
                    value={register.Email}
                    id="email"
                    placeholder="Enter Your Email"
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">Please choose a username.</div>
                </div>
                <div className="mt-2">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={e => setRegister({ ...register, password: e.target.value })}
                    value={register.password}
                    id="password"
                    placeholder="Enter Your Password"
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">Please choose a password.</div>
                </div>
                <div className="mt-2">
                  <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cpassword"
                    onChange={e => setRegister({ ...register, cPassword: e.target.value })}
                    value={register.cPassword}
                    placeholder="Confirm Your Password"
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">
                    Please Recheck Your Password.
                  </div>
                </div>
                <button type="button" onClick={e => dispatch(registerAction(register))} className="btn btn-primary w-100 mt-3">
                  Signup
                </button>
                <p className="text-center mt-3">
                  Already Have Account? <a href="#">Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </>
}

export default Register