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

  function likeClick() {
    
  }
    return (
      <div>
        <button onClick={this.likeClick} > Like: {count} </button>
      </div>
    )
  
  
}