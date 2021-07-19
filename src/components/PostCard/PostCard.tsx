import React from 'react'

const PostCard = () => {
  return (
    <div>
      {/* Container */}
      <div className='flex'>
        <div>
          <div>
            {/* Publication Logo and Name */}
            <div className='flex items-center'>
              <div className='w-50 h-50 overflow-hidden'>
                <img
                  className='w-full h-full object-cover'
                  src='https://dummyimage.com/50'
                  alt=''
                />
              </div>
              <p className='font-semibold ml-3'>Lorem, ipsum dolor.</p>
            </div>
            {/* Post Title and Description */}
            <div>
              <p className='font-bold text-2xl w-11/12'>
                TITLE Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quam, voluptas. lorem34
              </p>
              <div>
                <p className='text-gray-600 font-light'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet vero quas veniam et.
                </p>
              </div>
            </div>
            {/* Post Meta Data */}
            <div className='flex'>
              <div>
                <p>May 30</p>
              </div>
              <span className='mx-1.5'>·</span>
              <div>
                <p>6 min read</p>
              </div>
              <span className='mx-1.5'>·</span>
              {/* First Tag */}
              <div>
                <p>Programming</p>
              </div>
            </div>
          </div>
        </div>
        <div className='h-40 w-40'>
          {/* Image on Left */}
          <img
            src='https://dummyimage.com/400x700'
            alt='post_cover'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default PostCard
