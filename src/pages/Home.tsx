import React from 'react'
import { Link } from 'react-router-dom'
import PostCard from '../components/PostCard/PostCard'
import { CenterLayout, PageLayout } from '../layouts'

export const Home = () => {
  return (
    <PageLayout>
      <CenterLayout>
        <div>
          {/* This is is the home page. Recent Posts and Trending tags are showing
          here. */}
          {Array(5)
            .fill('')
            .map((_, idx) => {
              return (
                <Link key={idx} to='/post/user/123'>
                  <div className='my-8'>
                    <PostCard />
                  </div>
                </Link>
              )
            })}
        </div>
      </CenterLayout>
    </PageLayout>
  )
}

export default Home
