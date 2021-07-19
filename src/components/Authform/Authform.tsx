import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import {
  handleSignIn,
  handleSignUp,
} from '../../services/authenticationServices'
import { setAuthUser } from '../../store/authUser'

const LogInForm = () => {
  const dispatch = useDispatch()

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Enter valid email').required('Email Required'),
      password: Yup.string().required('Password Required'),
    }),
    onSubmit: async ({ email, password }) => {
      const resp = await handleSignIn(email, password)
      dispatch(setAuthUser(resp))
      return
    },
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='block' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='someone@example.com'
          />
          <div>{errors.email}</div>
        </div>
        <div>
          <label className='block' htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='********'
          />
          <div>{errors.password}</div>
        </div>
        <button type='submit' className='bg-pink-100 w-full'>
          Log In
        </button>
      </form>
    </div>
  )
}

const SignUpForm = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
      name: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Enter valid email').required('Email Required'),
      password: Yup.string()
        .min(6, 'Minimum of 6 characters')
        .required('Password Required'),
      username: Yup.string().required('Username Required'),
      name: Yup.string().required('Name Required'),
    }),
    onSubmit: async ({ email, password, name, username }) => {
      const resp = await handleSignUp(email, password, name, username)
      console.log(resp)

      return
    },
  })
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='block' htmlFor='email'>
          Email
        </label>
        <input
          type='text'
          name='email'
          id='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='someone@example.com'
        />
        <div>{errors.email}</div>
        <label className='block' htmlFor='password'>
          Password
        </label>
        <input
          type='password'
          name='password'
          id='password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='********'
        />
        <div>{errors.password}</div>
        <label className='block' htmlFor='name'>
          Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Someone'
        />
        <div>{errors.name}</div>
        <label className='block' htmlFor='username'>
          Username
        </label>
        <input
          type='text'
          name='username'
          id='username'
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='heysomeone'
        />
        <div>{errors.username}</div>
        <button type='submit' className='bg-pink-100 w-full'>
          Sign Up
        </button>
      </form>
    </div>
  )
}

const Authform = ({ type }: { type: 'login' | 'signup' }) => {
  return type === 'login' ? <LogInForm /> : <SignUpForm />
}

export default Authform
