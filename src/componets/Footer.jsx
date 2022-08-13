import React from 'react'
import { Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
        <Button variant="secondary" className="btn mb-3 p-2"><h5>Ver Más</h5></Button>
        <h5 className='footer p-4 bg-dark'>©Todos Los Derechos Reservados</h5>
    </div>
  )
}

export default Footer