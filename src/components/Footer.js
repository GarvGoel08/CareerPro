import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-secondary-bg text-white text-center p-3">
      <p>&copy; 2024 CareerPro. All Rights Reserved.</p>
      {/* Socials using Icons */}
        <div className="flex justify-center items-center gap-3 mt-2">
            <a href="https://www.linkedin.com/in/garvgoel2908/" target="_blank" className='max-h-4' rel="noreferrer">
              <img alt='Linkedin' className='max-h-4' src='https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF'/>
            </a>
            <a className='max-h-4' href="https://www.instagram.com/garvgoel6/" target="_blank" rel="noreferrer">
              <img alt='Instagram' className='max-h-4' src='https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF'/>
            </a>
            <a className='max-h-4' href="https://github.com/GarvGoel08" target="_blank" rel="noreferrer">
              <img alt='Github' className='max-h-4' src='https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF'/>
            </a>
        </div>
    </footer>
  )
}
