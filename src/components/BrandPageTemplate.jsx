import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import ConceptSection from './ConceptSection'
import DeepaGurnaniHeader from './DeepaGurnaniHeader'
import ZoomImageSection from './ZoomImageSection'

const BrandPageTemplate = ({ 
  header, 
  year, 
  client, 
  service, 
  industry, 
  mainImage, 
  pdp1, 
  pdp2, 
  d1, 
  d2, 
  d3, 
  images 
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.6 }}
      className="min-h-screen text-white  bg-[#171717]"
    >
      <DeepaGurnaniHeader 
        header={header}
        year={year}
        client={client}
        service={service}
        industry={industry}
      />
      <ZoomImageSection image={mainImage} />
      <ConceptSection 
        pdp1={pdp1}
        pdp2={pdp2}
        d1={d1}
        d2={d2}
        d3={d3}
      />
      {images.map((image, index) => (
        <ZoomImageSection key={index} image={image} />
      ))}
    </motion.div>
  )
}

BrandPageTemplate.propTypes = {
  header: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  client: PropTypes.string,
  service: PropTypes.string.isRequired,
  industry: PropTypes.string.isRequired,
  mainImage: PropTypes.string.isRequired,
  pdp1: PropTypes.string.isRequired,
  pdp2: PropTypes.string.isRequired,
  d1: PropTypes.string.isRequired,
  d2: PropTypes.string.isRequired,
  d3: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

BrandPageTemplate.defaultProps = {
  client: '',
  d3: '',
}

export default BrandPageTemplate
