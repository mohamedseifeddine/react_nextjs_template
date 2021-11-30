import React from 'react'
import Button from 'components/atoms/Button'

const TestTs = ({ a }: { a: number }) => (
  <div>
    hello {a}
    <Button title="test ts" />
  </div>
)

export default TestTs
