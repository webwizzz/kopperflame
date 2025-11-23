import BrandPageTemplate from '../components/BrandPageTemplate'

const FeelWell = () => {
  return (
    <BrandPageTemplate
      header="Feel Well"
      year="2024"
      client="Jay Lakhani"
      service="UIUX Revamp, Website Development"
      industry="Jewellery"
      mainImage="/feelwell.png"
      pdp1="Jewelry that tells a story,crafted with precision, now made effortlessly accessible online"
      pdp2="Feelwell Garments specializes in jewelry that combines craftsmanship and elegance. We helped bring their exquisite designs to the digital world by revamping their website with a seamless UI/UX experience. With a focus on accessibility and elegance, the site now showcases their stunning collections in a way that enhances every customer's journey from browsing to purchase."
      d1="Visual Identity"
      d2="UIUX Revamp"
      d3="Website Development"
      images={[
        '/feel1.png',
        '/feel2.png',
        '/feel3.png',
        '/feel4.png'
      ]}
    />
  )
}

export default FeelWell

