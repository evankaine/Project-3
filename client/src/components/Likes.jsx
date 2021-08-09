import React from "react"
import { useState, useffect } from "react"

// import incrementMe from "react-router-dom"

export default function Like() {
const [count, setCount] = useState(0)

  const incrementMe = () => {
    let newCount = count + 1
    setCount({
      count: newCount
    })
  }

  // function likeClick() {
  //   incrementMe
  // }
  const handleClick = async (e) => {
    e.preventDefault()
  }

    return (
      <div>
        <button onClick={incrementMe} > Like: {count} </button>
      </div>
    )
  
  
}