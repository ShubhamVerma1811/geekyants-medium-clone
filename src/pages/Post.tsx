import React from 'react'
import type { RouteComponentProps } from 'react-router-dom'
import Blog from '../components/Blog/Blog'
import { CenterLayout, PageLayout } from '../layouts'

type MatchProps = RouteComponentProps & {
  params: any
}

export const Post = ({ match }: { match: MatchProps }) => {
  return (
    <PageLayout>
      <CenterLayout>
        <div>
          <Blog />
        </div>
      </CenterLayout>
    </PageLayout>
  )
}

export default Post
