import React from 'react'

export default function commentList({commentContent}) {
  return (
    //must make a backend call to update db query api, then render this msg below
    <div> "Adding....." {commentContent} </div>
  )
}
