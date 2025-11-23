import BrandPageTemplate from '../components/BrandPageTemplate'

const Atelier = () => {
  return (
    <BrandPageTemplate
      header="Atelier"
      year="2024"
      client="Ashiesh Shah"
      service="UIUX Revamp,Shopify Website Development,Visual Communication "
      industry="Decor"
      mainImage="/atelier.png"
      pdp1="Where luxury meets simplicity, crafting an online experience as refined as the designs"
      pdp2="Bringing luxury into the digital space takes precision, and with Atelier Ashiesh Shah, we ensured every element reflected their design ethos. From the curated user flow to the seamless navigation, the website captures the atelier's attention to detail while making the experience effortless for users. It's not just a website; it's a virtual extension of the ateliera space where craftsmanship and innovation come together beautifully."
      d1="UIUX"
      d2="Website Development"
      d3="Visual Communication"
      images={[
        '/at1.png',
        '/at2.png',
        '/at3.png',
        '/at4.png'
      ]}
    />
  )
}

export default Atelier
