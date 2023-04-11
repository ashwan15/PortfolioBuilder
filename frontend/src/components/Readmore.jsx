import React, { useState, memo, useCallback, useMemo } from 'react'

const ReadMore = memo(({ children, maxLength }) => {
  const text = children
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = useCallback(() => {
    setIsReadMore(!isReadMore)
  }, [isReadMore])
  const content = useMemo(() => {
    return isReadMore ? text.slice(0, maxLength) : text
  }, [text, isReadMore, maxLength])

  return (
    <p className="text">
      {content}
      {text.length > maxLength && (
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={toggleReadMore}>
            {isReadMore ? 'Read More' : 'Read Less'}
          </button>
        </div>
      )}
    </p>
  )
})

export default ReadMore

/**const Content = () => {
  return (
    <div className="container">
      <h2>
        <ReadMore maxLength={100}>
          GeeksforGeeks: A Computer Science portal for geeks. It contains well
          written, well thought and well explained computer science, programming
          articles and quizzes. It provides a variety of services for you to
          learn, so thrive and also have fun! Free Tutorials, Millions of
          Articles, Live, Online and Classroom Courses ,Frequent Coding
          Competitions, Webinars by Industry Experts, Internship opportunities,
          and Job Opportunities. Knowledge is power!
        </ReadMore>
      </h2>
    </div>
  )
}**/

/**import React, { useState } from 'react'

function Readmore({ text, maxLength }) {
  const [hidden, setHidden] = useState(true)

  if (typeof text !== 'string') {
    return null // or return an error message or default value
  }

  if (text.length <= maxLength) {
    return <span>{text}</span>
  }

  return (
    <span>
      {hidden ? `${text.slice(0, maxLength)}...` : text}
      <br />
      <button onClick={() => setHidden(!hidden)}>
        {hidden ? 'Read more' : 'Show less'}
      </button>
    </span>
  )
}
export default Readmore**/
