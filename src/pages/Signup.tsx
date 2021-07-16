import React from 'react'
import Authform from '../components/Authform/Authform'
import { CenterLayout, PageLayout } from '../layouts'

export const Signup = () => {
  return (
    <PageLayout>
      <CenterLayout>
        <div>This is the Sign Up Page</div>
        <Authform type='signup' />
      </CenterLayout>
    </PageLayout>
  )
}

export default Signup
