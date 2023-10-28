'use client'
import { increaseCounter } from "@/app/logic"
import { useState } from "react"

export default function CounterComponent({
  initialCounter
}: {
  initialCounter: number
}) {
  const [counter, setCounter] = useState(initialCounter)
  return <>
    <p>Counter is {counter}</p>
    <button type='button' onClick={async () => {
      const newCounter = await increaseCounter()
      setCounter(newCounter)
    }
    }>Increment</button>
  </>
}