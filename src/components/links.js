import React from 'react'

const Links = (props) => {
  return (
    <div>
        <a href={props.links.github}>Github</a>
        <a href={props.links.linkedin}>linkedin</a>
    </div>
  )
}

export default Links