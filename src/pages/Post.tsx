import React from 'react'
import type { RouteComponentProps } from 'react-router-dom'
import { CenterLayout, PageLayout } from '../layouts'

type MatchProps = RouteComponentProps & {
  params: any
}

export const Post = ({ match }: { match: MatchProps }) => {
  return (
    <PageLayout>
      <CenterLayout>
        <div>This post is called {match.params.pid}, Written By {match.params.username}</div>
      </CenterLayout>
    </PageLayout>
  )
}

export default Post
