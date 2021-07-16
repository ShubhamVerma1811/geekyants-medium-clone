import React from 'react'
import { CenterLayout, PageLayout } from '../layouts'

export const Home = () => {
  return (
    <PageLayout>
      <CenterLayout>
        <div>
          This is is the home page. Recent Posts and Trending tags are showing
          here.
        </div>
      </CenterLayout>
    </PageLayout>
  )
}

export default Home
