import Image from 'next/image'
import { Suspense } from 'react'
import { getCurrentCounter } from './logic'
import CounterComponent from '@/components/CounterComponent'
// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page() {
  const initialCounter = await getCurrentCounter()
  return <Suspense fallback={<p>Loading...</p>}>
    <CounterComponent initialCounter={initialCounter} />
  </Suspense >
}
