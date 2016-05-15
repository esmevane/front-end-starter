import React from 'react'

const scale = 16

const dotStyle = {
  backgroundColor: 'black',
  borderRadius: `${scale}px`,
  border: `1px solid black`,
  display: 'inline-block',
  height: `${scale}px`,
  width: `${scale}px`
}

const emptyDotStyle = {
  backgroundColor: 'white',
  borderRadius: `${scale}px`,
  border: `1px solid black`,
  display: 'inline-block',
  height: `${scale}px`,
  width: `${scale}px`
}

const listStyle = {
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: 'white',
  boxShadow: `0 0 ${scale * 1.5}px -${scale * 0.25}px rgba(0, 0, 0, 0.5)`,
  border: `1px solid black`,
  color: 'white',
  cursor: 'pointer',
  display: 'flex',
  fontFamily: 'Helvetica, sans-serif',
  fontWeight: 'lighter',
  padding: `0 ${scale * 0.5}px`,
  textAlign: 'center',
  height: `${scale * 2}px`,
  width: `${scale * 10}px`
}

const Dots = () =>
  <div className='dots' style={ listStyle }>
    <div className='dot' style={ dotStyle } />
    <div className='dot' style={ dotStyle } />
    <div className='dot' style={ emptyDotStyle } />
    <div className='dot' style={ emptyDotStyle } />
    <div className='dot' style={ emptyDotStyle } />
  </div>

export default Dots
