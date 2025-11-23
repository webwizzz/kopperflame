import BrandPageTemplate from '../components/BrandPageTemplate'

const AceBlend = () => {
  return (
    <BrandPageTemplate
      header="Ace Blend"
      year="2024"
      client="Shivam Hingorani"
      service="UIUX,Website on Shopify,Content"
      industry="Health, Fitness & Food"
      mainImage="/4.png"
      pdp1="Wellness made easy—find your balance with India's most loved health platform"
      pdp2="From daily nutrition to fitness essentials, the website provides a seamless journey that's both inspiring and practical. AceBlend is now more than just a store,it's a digital destination for health and wellness, embodying the balance of innovation and simplicity."
      d1="Enhanced Visual Communication"
      d2="UIUX Design"
      d3="Website Development"
      images={[
        '/ace1.png',
        '/ace2.png',
        '/ace3.png',
        '/ace4.png',
        '/ace5.png',
        '/ace6.png'
      ]}
    />
  )
}

export default AceBlend

