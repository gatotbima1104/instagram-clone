import React from 'react'

const Gallery = () => {
  return (
    <div className='mt-5'>
      <div className='grid grid-cols-2 text-slate-500 font-semibold text-sm border gap-10 py-7 px-96'>
          <button className='border tracking-wider'>POSTS</button>
          <button className='tracking-wider'>TAGGED</button>
      </div>
    </div>
  )
}

export default Gallery;