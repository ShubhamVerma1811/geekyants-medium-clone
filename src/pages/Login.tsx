import React from 'react'
import Authform from '../components/Authform/Authform'
import { CenterLayout, PageLayout } from '../layouts'

export const Login = () => {
  return (
    <PageLayout>
      <CenterLayout>
        <div>This is the login page</div>
        <Authform type='login' />
      </CenterLayout>
    </PageLayout>
  )
}

export default Login
