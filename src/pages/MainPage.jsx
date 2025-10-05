import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProductsServicesSection from '../components/ProductsServicesSection'
import ExhibitionHallSection from '../components/ExhibitionHallSection'
import IntegratedComplexSection from '../components/IntegratedComplexSection'
import FoundersSection from '../components/FoundersSection'
import LocationsSection from '../components/LocationsSection'
import FAQsSection from '../components/FAQsSection'
import EndSection from '../components/EndSection'
import CareerSection from '../components/CareerSection'
import ScrollButton from '../components/ScrollButton'
import NavigationBar from '../components/NavigationBar'

export const MainPage = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <ProductsServicesSection />
      <ExhibitionHallSection />
      <IntegratedComplexSection />
      <FoundersSection />
      <LocationsSection />
      <CareerSection />
      <FAQsSection />
      <EndSection />
      <ScrollButton />
    </>
  )
}
