import React, { useState } from 'react'

const Exercise1 = () => {
  const [gallery, setGallery] = useState({
    images: [
      'https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*',
      'https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*',
      'https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*',
    ],
    currentImg: 0,
  })

  // wrap with modulo so we loop around instead of going out of bounds
  const shiftImageBack = () => {
    const next = (gallery.currentImg - 1 + gallery.images.length) % gallery.images.length
    setGallery({ ...gallery, currentImg: next })
  }

  const shiftImageForward = () => {
    const next = (gallery.currentImg + 1) % gallery.images.length
    setGallery({ ...gallery, currentImg: next })
  }

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1 - Image Gallery</h4>
      <div className="exercise" id="ex-1">
        <div>
          <button className="back" onClick={shiftImageBack}>
            Back
          </button>
          <button className="forward" onClick={shiftImageForward}>
            Forward
          </button>
        </div>
        <img
          className="gallery-img"
          src={gallery.images[gallery.currentImg]}
          alt="fruit"
        />
      </div>
    </div>
  )
}

export default Exercise1
