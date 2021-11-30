import React from 'react'
import { useIntl } from 'react-intl'

import styles from './Button.module.scss'

const Button = ({ title }: { title: string }) => {
  const { formatMessage } = useIntl()

  const f = (id: string) => formatMessage({ id })

  return (
    <div className={`${styles['button-text1']} ${styles['button-text2']}`}>
      {title} {f('ButtonText')}
    </div>
  )
}

export default Button
