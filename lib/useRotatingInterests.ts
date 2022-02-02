import React from 'react'

const interests = [
  'node',
  'kubernetes',
  'react',
  'kafka',
  'microservices',
  'coffee',
  'contact-first design',
  'TDD',
  'typescript',
  'jest',
]

export const useRotatingInterests = () => {
  const [idx, setIdx] = React.useState(0)
  const [interest, setInterest] = React.useState(interests[idx])
  React.useEffect(() => {
    const interval = setInterval(() => {
      setInterest(interests[idx])
      setIdx((prev) => {
        const newIdx = (prev + 1) % interests.length
        setInterest(interests[newIdx])
        return newIdx
      })
    }, 2500)
    return () => clearInterval(interval)
  })
  return interest
}
