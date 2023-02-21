import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div>
        Homepage
        <button className='btn-info'>
            <Link to="/InfoPage" className="InfoPage">Ohjeet</Link>
        </button>
    </div>
  )
}

export default Homepage

/*
export default function Homepage(){
    return <p>Nyt ollaan homepage komponentissa</p>
}


function Homepage() {
  return (
    <div>
        Homepage
        <button>
            <a href='/InfoPage' class='InfoPage'>Ohjeet</a>
        </button>
        

    </div>
  )
}


*/