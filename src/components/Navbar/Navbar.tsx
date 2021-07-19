import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { classnames } from 'tailwindcss-classnames'
import { handleSignOut } from '../../services/authenticationServices'
import { deleteAuthUser } from '../../store/authUser'

const activeLink = classnames('px-1.5', 'py-1', 'bg-pink-300', 'rounded')
const base = classnames('px-1.5', 'py-1', 'rounded')
const linkHover = classnames('hover:bg-pink-50')
const linkFocus = classnames('focus:bg-pink-300')

const Navbar = () => {
  const authUser = useSelector((state) => state.authUser)
  const dispatch = useDispatch()

  return (
    <div className='px-3 md:px-16 py-4'>
      <nav className={classnames('flex', 'items-center', 'list-none')}>
        <span>
          <li className='uppercase font-bold text-2xl hover:underline'>
            <NavLink to='/'>Medium</NavLink>
          </li>
        </span>

        <span
          className={classnames(
            'flex',
            'items-center',
            'justify-between',
            'ml-auto',
            'mr-0'
          )}>
          <li
            className={classnames(
              'mx-1.5',
              classnames(base, linkHover, linkFocus)
            )}>
            <NavLink to='/write' activeClassName={activeLink}>
              Write
            </NavLink>
          </li>
          {authUser?.isAuthed ? (
            <li
              onClick={async () => {
                await handleSignOut()
                dispatch(deleteAuthUser())
              }}
              className={classnames(
                'mx-1.5',
                classnames(base, linkHover, linkFocus)
              )}>
              {authUser.name}
            </li>
          ) : (
            <>
              <li
                className={classnames(
                  'mx-1.5',
                  classnames(base, linkHover, linkFocus)
                )}>
                <NavLink activeClassName={activeLink} to='/login'>
                  Log In
                </NavLink>
              </li>
              <li
                className={classnames(
                  'mx-1.5',
                  classnames(base, linkHover, linkFocus)
                )}>
                <NavLink activeClassName={activeLink} to='/signup'>
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
          <li
            className={classnames(
              'mx-1.5',
              classnames(base, linkHover, linkFocus)
            )}>
            <NavLink activeClassName={activeLink} to='/post/foo/pid'>
              Post
            </NavLink>
          </li>
          <li
            className={classnames(
              'mx-1.5',
              classnames(base, linkHover, linkFocus)
            )}>
            <NavLink activeClassName={activeLink} to='/topic/topic_name'>
              Topic
            </NavLink>
          </li>
        </span>
      </nav>
    </div>
  )
}

export default Navbar
