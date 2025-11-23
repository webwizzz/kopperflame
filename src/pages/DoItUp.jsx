import BrandPageTemplate from '../components/BrandPageTemplate'

const DoItUp = () => {
  return (
    <BrandPageTemplate
      header="Do It Up"
      year="2024"
      client="Taral Jadhav"
      service="Visual Identity, Digital Revamp "
      industry="Decor, Event"
      mainImage="/doitup.png"
      pdp1="From local flair to luxury vibes, we gave Do It Up's events a digital glow-up"
      pdp2="At Bamboo Digital, we helped Do It Up take their event expertise online with flair. From bridal showers to dazzling soirées, we revamped their website to match their vision—simple, stylish, and as organized as their events. With our UI/UX wizardry and sleek functionality, finding decor solutions is now as effortless as saying, Let's celebrate!"
      d1="Visual Identity "
      d2="UIUX Revamp"
      d3="Website Development"
      images={[
        '/do1.png',
        '/do2.png',
        '/do3.png'
      ]}
    />
  )
}

export default DoItUp
