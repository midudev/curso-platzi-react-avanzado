import { useGlobalState } from '../../hooks/useGlobalState'

export const MutationLogout = ({ children }) => {
  const { disableAuth } = useGlobalState()
  return children({ doLogout: disableAuth })
}
