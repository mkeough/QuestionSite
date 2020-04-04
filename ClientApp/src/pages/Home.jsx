import React from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <main className="home">
        <header>
          <section class="hero">
            <h1>Suncoast Overflow</h1>
          </section>
          <footer>
            <h4>Find your solution, here!</h4>
          </footer>
        </header>
        <p>View All Questions</p>
        <button>
          <Link to="/view">View</Link>
        </button>
        <p>Search for a Question</p>
        <button>
          <Link to="/search">Search</Link>
        </button>
        <p>Add a Question</p>
        <button>
          <Link to="/add">Add</Link>
        </button>
      </main>
    </>
  )
}
