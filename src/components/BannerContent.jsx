import React from 'react'

const BannerContent = ({ discount, link }) => {
  return (
    <>
    <p>One Click Shop <span>Up To {discount}% off</span></p>
    <a href={link}>Shop Now</a>
    </>
  )
}

export default BannerContent