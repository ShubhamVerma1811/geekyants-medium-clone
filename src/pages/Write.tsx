import React from 'react'
import PostEditor from '../components/PostEditor/PostEditor'
import { CenterLayout, PageLayout } from '../layouts'

export const Write = () => {
  return (
    <div>
      <PageLayout>
        <CenterLayout>
          <PostEditor />
        </CenterLayout>
      </PageLayout>
    </div>
  )
}

export default Write
