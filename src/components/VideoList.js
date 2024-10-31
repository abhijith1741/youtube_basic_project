import React from 'react'

const VideoList = ({video}) => {
  const {snippet, } = video
  const {channelTitle, description, thumbnails, title} = snippet
  // const {likeCount, viewCount} = statistics

  const truncateLetters = (text, letterLimit) => {
    return text.length > letterLimit ? text.substring(0, letterLimit) + "..." : text;
  };
  
  
  return (
    <div className='mx-2 my-6 shadow-md'>
      <img src={thumbnails?.medium?.url} alt="thumbnail" className='mb-2 w-80 h-48 rounded-md'/>
      <ul>
        <li className='text-bold max-w-[200px]'>{truncateLetters(title, 40)}</li>
        <li className='mt-2'>{channelTitle}</li>
        {/* <li>{likeCount??""} Likes</li>
        <li>{viewCount??""} Views</li> */}
      </ul>
    </div>
  )
}

export default VideoList