import React from 'react'

const Footer = ({ siteTitle }) => (
    <div
      style={{
        background: 'light',
        marginBottom: '1.45rem',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
        
      >
        <h1 style={{margin:0}}>
          <p>
              {siteTitle}
          </p>
        </h1>
      </div>
    </div>
  )
  
  export default Footer