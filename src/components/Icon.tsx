import React from 'react'
interface Props {
  name: string
}
export const Icon: React.FC<Props> = ({ name }) => {
  return (
    <svg className="icon">
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}