import Image from 'next/image'
import React from 'react'

const services = [ 
  {
      icon: '/assets/icon-dev.webp',
      iconAlt: 'Icon Dev',
      titleService: 'Web Development',
      projects: 5
  },
  {
      icon: '/assets/icon-diseno-ux-ui.webp',
      iconAlt: 'Icon Diseño UX/UI',
      titleService: 'Diseño UX/UI',
      projects: 5
  },
  {
      icon: '/assets/icon-marketing-digital.webp',
      iconAlt: 'Icon Marketing Digital',
      titleService: 'Marketing Digital',
      projects: 5
  }
]

export default function About () {
  return (
    <div className='flex flex-col md:flex-row mt-12'>
      <div className='order-2 mt-7 md:order-1 w-full columns-auto'>
        {
          services.map((service, index) => (
              <div key={index} className='card-service flex items-center p-5 shadow-lg rounded-lg w-full mb-6 dark:bg-teal-800'>
                  <div>
                      <Image src={service.icon} alt='Icon Dev' width={57} height={57} />
                  </div>
                  <div className='ml-4'>
                      <h3 className='text-xl'>{service.titleService}</h3>
                      <small>{service.projects} Projects</small>
                  </div>
              </div>
          ))
        }
      </div>
      <div className='order-1 md:order-2 w-full columns-auto'>
        <h2 className='text-5xl md:text-7xl font-bold text-black dark:text-white'>What do I help?</h2>
        <p className='text-lg mt-3 text-gray-600 md:mt-4 dark:text-white'>I will hel you with finging a solution and solve
          your problems. We use process design to create digital products. Besids that also help their business
        </p>
        <p className='text-lg text-gray-600 md:mt-3 dark:text-white'>We use process design to create digital products. Besids that also help their business</p>
        <div className='flex justify-between md:justify-start mt-4 md:mt-7'>
            <div className='flex flex-col'>
                <strong className='text-6xl'>12+</strong>
                <small className='text-md text-gray-600 dark:text-gray-300'>Project Complete</small>
            </div>
            <div className='flex flex-col md:ml-12'>
                <strong className='text-6xl'>5+</strong>
                <small className='text-md text-gray-600 dark:text-gray-300'>Happy Clients</small>
            </div>
        </div>
      </div>
    </div>
  )
}
