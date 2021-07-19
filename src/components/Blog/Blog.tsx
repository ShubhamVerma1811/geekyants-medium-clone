import React from 'react'
import { CenterLayout } from '../../layouts'

const Blog = () => {
  return (
    <div>
      {/* <CenterLayout> */}
      <div className='border border-red-400'>
        <div>
          <h1 className='text-3xl font-bold '>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h1>
        </div>
        <div className=''>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            sint mollitia voluptatibus.
          </p>
        </div>
        <div className='flex items-center'>
          {/* Author Image */}
          <div className='rounded-full overflow-hidden w-50 h-50'>
            <img
              className='w-full h-full object-cover'
              src='https://dummyimage.com/100'
              alt='image'
            />
          </div>

          {/* Author Name, Date and Read Time */}
          <div>
            {/* Author Name */}
            <div>
              <p>Lorem, ipsum</p>
            </div>
            {/* Date and Read Time */}
            <div>
              <p>May 30 • 6 min read</p>
            </div>
          </div>
          {/* Social Icons */}
          <div>
            <span>Twitter</span>
            <span>Facebook</span>
            <span>LinkedIn</span>
          </div>
        </div>{' '}
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: `<p>Hey there</p>`,
          }}
        />
      </div>
      {/* </CenterLayout> */}
    </div>
  )
}

export default Blog
