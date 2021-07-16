import React from 'react'
import type { RouteComponentProps } from 'react-router-dom'
import { CenterLayout, PageLayout } from '../layouts'

type MatchProps = RouteComponentProps & {
  params: any
}

export const Topic = ({ match }: { match: MatchProps }) => {
  return (
    <PageLayout>
      <CenterLayout>
        <div>This is the Topics Page for {match.params.topic_name}</div>
      </CenterLayout>
    </PageLayout>
  )
}

export default Topic
