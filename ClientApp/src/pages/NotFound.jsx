import React from 'react'
import image from '../images/404.jpg'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <section class="not-found">
        <section class="error-pic-box">
          {' '}
          <img
            class="error-image"
            src={image}
            alt="laptop with 404 error on screen"
          />
          <h6>
            {' '}
            Photo by 
            <a href=" https://unsplash.com/@introspectivedsgn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Erik Mclean
            </a>{' '}
             on 
            <a href="https://unsplash.com/s/photos/404?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
            .{' '}
          </h6>
        </section>
        <section class="redirect">
          {Math.ceil(Math.random() * 100) % 2 === 0 ? (
            <span></span>
          ) : (
            <span></span>
          )}
          <h1> Not sure how you got here?</h1> <br />{' '}
          <h2>
            We apologize that the page you were searching for is not available.
          </h2>
          <br />
          <h3>
            Do you want to{' '}
            <a href="" onclick="window.history.go(-1); return false;">
              go back?
            </a>
          </h3>
          <h3>
            {' '}
            <a href="/view">View</a> all question?
          </h3>
          <h3>
            {' '}
            <a href="/search">Search</a> a question?
          </h3>
          <h3>
            <a href="/add">Add</a> a question?
          </h3>
        </section>
      </section>
    </div>
  )
}

export default NotFound
