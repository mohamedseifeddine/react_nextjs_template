import React from 'react'
import { useIntl } from 'react-intl'
import { useRouter } from 'next/router'

import Button from 'components/atoms/Button'

const TestJs = () => {
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })

  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  return (
    <div>
      {f('hello')}
      <Button />
      <div>
        <h1>{f('hello')}</h1>
        <p>{f('welcomeMessage')}</p>
        <br />
        <p>Current locale: {locale}</p>
        <p>Default locale: {defaultLocale}</p>
        <p>Configured locales: {JSON.stringify(locales)}</p>
      </div>
    </div>
  )
}
export default TestJs
