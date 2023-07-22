import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLinkedin, faInstagram } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-5 py-3">
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faInstagram} />
    </div>  )
}

export default Footer;