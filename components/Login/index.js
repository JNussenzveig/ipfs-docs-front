import { useState } from "react";
import {useAuth} from '../Auth'
import { useRouter } from "next/router";
import PulseLoader from "react-spinners/PulseLoader";

export default function Login() {

  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const { signIn, isAuthenticated, errors, listErrors } = useAuth()
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  if (isAuthenticated) {
    return <h1>You're already in!</h1>
  }

  const onSubmit = async e => {
    e.preventDefault()
    e.stopPropagation()
    console.log('signin', user)
    setLoading(true)
    await signIn(user.email, user.password, onSuccess);
    setLoading(false)
  }

  const onSuccess = (url) => {
    router.push(url)
  }

  return (
    <div className='flex w-full items-center justify-center h-screen flex-col bg-indigo-600'>
      <h1 className='font-bold text-2xl text-white'>Welcome Back :)</h1>
      <div
        className='flex flex-col bg-white rounded shadow-lg p-12 mt-12'
        action=''
      >
        {errors && errors.length > 0 && listErrors()}
        <label className='font-semibold text-xs' for='usernameField'>
          Email
        </label>
        <input
          className='flex items-center h-12 px-4 w-64 bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2 border border-gray-300'
          type='text'
          onChange={e => setUser(u => ({...u, email: e.target.value}))}
        />
        <label className='font-semibold text-xs mt-3' for='passwordField'>
          Password
        </label>
        <input
          className='flex items-center h-12 px-4 w-64 bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2 border border-gray-300'
          type='password'
          onChange={e => setUser(u => ({...u, password: e.target.value}))}
        />
        {!loading && <button disabled={loading} onClick={onSubmit} className='flex items-center justify-center h-12 px-6 w-64 bg-indigo-600 mt-8 rounded font-semibold text-sm text-indigo-100 hover:bg-indigo-700'>
          Login
        </button>}
        {loading && <div className='flex justify-center items-center h-12 mt-8'>
          <PulseLoader loading={loading} color='#3730a3' style={{ width: 10, height: 10 }} />  
        </div>}
        <div className='flex mt-6 justify-center text-xs'>
          <a className='text-indigo-400 hover:text-indigo-500' href='#'>
            Forgot Password
          </a>
          {/* <span className='mx-2 text-gray-300'>/</span>
          <a className='text-indigo-400 hover:text-indigo-500'>
            Sign Up
          </a> */}
        </div>
      </div>
    </div>
  );
}
