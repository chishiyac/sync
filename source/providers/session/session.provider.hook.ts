import { errors } from '@sync/utils'
import React from 'react'

import { SessionContext } from './session.provider.context'

function useSession() {
  const context = React.useContext(SessionContext)

  return errors().requiredContext(context, 'Session')
}

export { useSession }
