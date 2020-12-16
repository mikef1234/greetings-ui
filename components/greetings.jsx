import React, { useState } from 'react'

export default () => {
  const [slug, setSlug] = useState('')

  return (

    <div className="page">
      <div className="title">To whom am I speaking? </div>
      <input type="text" name="search" onChange={event => setSlug(event.target.value)} />
      <div className="setSlug">
        {slug ? `It's nice to meet you ${slug}` : null}
      </div>
    </div>
  )
}
