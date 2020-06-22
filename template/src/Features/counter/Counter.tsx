import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, incrementAsync, selectCount } from './counterSlice'

import { Button } from 'Components/Button'
import { ButtonAsync } from 'Components/ButtonAsync'
import { Row } from 'Components/Row'
import { InputText } from 'Components/InputText'
import { BigNumber } from 'Components/BigNumber'
import { Margin } from 'Components/Margin'

export const Counter = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div>
      <Row>
        <Button aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </Button>
        <Margin margin="2px 16px 0px">
          <BigNumber>{count}</BigNumber>
        </Margin>
        <Button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </Button>
      </Row>
      <Row>
        <Margin right="8px">
          <InputText
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
        </Margin>
        <Button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Add Amount</Button>
        <Margin left="8px">
          <ButtonAsync onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>Add Async</ButtonAsync>
        </Margin>
      </Row>
    </div>
  )
}
