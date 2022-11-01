import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg'

const Login = () => {
    const handleSignIn = (event) => {
        event.preventDefault();
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col  lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src={image} alt="" />
                </div>
                <div className='px-5 lg:px-20  py-10  flex flex-col items-center text-slate-900'>
                    <form onSubmit={handleSignIn} className="p-7 lg:p-10 border    rounded border-orange-300 w-[350px]   lg:w-[450px] " >
                        <p className='text-center text-black text-2xl  font-semibold'>Login </p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-900">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered text-orange-600 font-semibold " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-900">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered text-orange-600 font-semibold" required />
                        </div>
                        <div className='text-red-600 bg-red-100 mb-3 mt-2 '>
                            {/* {error} */}
                        </div>
                        <div className='flex justify-between mt-3'>
                            <div>

                                <label htmlFor="terms"> {<>
                                    Forgot Password?
                                </>}</label>
                            </div>
                            <div >
                                <label htmlFor="my-modal-3" className="cursor-pointer underline text-orange-600 ">Reset Password</label>
                            </div>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  text-black border-btn-color hover:bg-orange-500 hover:border-orange-500 bg-orange-400 border-orange-400">Login</button>
                        </div>

                        <div className='text-center'>
                            <small className='mr-2'>New to edu-Cate?</small>
                            <Link to='/register' className="label-text-alt link link-hover text-orange-600">Register Now</Link>
                        </div>
                    </form>
                    <div className='mb-3 mt-3'>
                        Log in with one of the following
                    </div>
                    <div className='flex flex-row justify-center gap-3 mb-5 w-[25%]'>
                        <button className="btn btn-outline btn-warning rounded  flex gap-2"> Google </button>
                        <button className="btn btn-outline btn-warning rounded flex gap-2 "> Github</button>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Login;