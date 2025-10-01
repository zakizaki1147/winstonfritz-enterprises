import React from 'react'
import LocationsCard from './LocationsCard'
import LocationsFirstFactory from '../assets/locations-first-factory.png'
import LocationsExhibitionHall from '../assets/locations-exhibition-hall.png'
import LocationsIntegratedComplex from '../assets/locations-integrated-complex.png'

const locationImages = [
  {id: 1, src: LocationsFirstFactory, name: 'FIRST FACTORY', location: 'Cindervale'},
  {id: 2, src: LocationsExhibitionHall, name: 'EXHIBITION HALL', location: 'Midgard'},
  {id: 3, src: LocationsIntegratedComplex, name: 'INTEGRATED COMPLEX', location: 'Neo-Karta, Nusantara'}
]

const LocationsSection = () => {
  return (
    <>
      <section className='w-full h-screen flex flex-col justify-center items-center gap-8'>
        <h2 className='text-cream-main text-2xl font-aclonica'>OUR LOCATIONS</h2>
        <div className='flex justify-center items-center gap-8'>
          {locationImages.map((locationImage) => (
            <LocationsCard key={locationImage.id} locationImage={locationImage} />
          ))}
        </div>
      </section>
    </>
  )
}

export default LocationsSection
