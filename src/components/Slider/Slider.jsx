import React, { useState } from 'react'
import { MdOutlineWest, MdOutlineEast } from 'react-icons/md'
import styles from './Slider.module.css'
export default function Slider() {
  const data = [
    '/img/image_1.png',
    '/img/image_2.png',
    '/img/image_3.png',
    '/img/image_4.png',
  ]
  const [currentSlide, setCurrentSlide] = useState(0)
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1)
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1)
  }
  return (
    <div className={styles.slider}>
      <div
        className={styles.container}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="slider images" />
        <img src={data[1]} alt="slider images" />
        <img src={data[2]} alt="slider images" />
      </div>
      <div className={styles.icons}>
        <button className={styles.icon} onClick={prevSlide}>
          <MdOutlineWest />
        </button>
        <button className={styles.icon} onClick={nextSlide}>
          <MdOutlineEast />
        </button>
      </div>
    </div>
  )
}
