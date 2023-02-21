import React from 'react'
import { Link } from 'react-router-dom'

const InfoPage = () => {
  return (
    <div>
        <p>Nyt ollaan infopage komponentissa</p>

        <button>
            <Link to="/">Takaisin</Link>
        </button>
    </div>
  )
}

export default InfoPage

/*
export default function InfoPage(){
    return <p>Nyt ollaan infopage komponentissa</p>
}
*/