import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const useRequireLogin = () => {
  const user = useSelector((state) => state.user)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
  }, [])

  return { user, loading }
}

export default useRequireLogin
