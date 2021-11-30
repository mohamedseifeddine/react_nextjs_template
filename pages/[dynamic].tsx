import React from 'react'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

const Dynamic = () => {
  const {
    query: { dynamic },
  } = useRouter()

  const { formatMessage } = useIntl()

  const f = (id: string) => formatMessage({ id })
  return (
    <div>
      <div>{f('title')}</div>
      <div>{dynamic}</div>
    </div>
  )
}

export default Dynamic
