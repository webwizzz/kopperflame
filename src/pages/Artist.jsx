import BrandPageTemplate from '../components/BrandPageTemplate'

const Artist = () => {
  return (
    <BrandPageTemplate
      header="The Artist"
      year="2024"
      client=" Anu Kedia "
      service="Visual Identity "
      industry="Decor"
      mainImage="/artist.png"
      pdp1="Handcrafted luxury, now online—elevating tradition with a modern touch  "
      pdp2="The Artisan Anukedia's timeless jewelry now shines in the digital space. With a complete website and UI/UX revamp, we've created an effortless shopping experience that mirrors the elegance of their handcrafted designs. Customers can explore a seamless blend of luxury and simplicity, with every detail reflecting the meticulous craftsmanship behind each piece."
      d1="Visual Identity "
      d2="UIUX Design"
      d3="Website Development"
      images={[
        '/Artist1.png',
        '/artist2.png',
        '/art4.png',
        '/art5.png',
        '/art6.png',
        '/art7.png'
      ]}
    />
  )
}

export default Artist
