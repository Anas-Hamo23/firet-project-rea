import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'

import  './gallery.css';

const Gallery = () => {
  const galleryL=15;
  const images=[]
  for(let i=1;i<=galleryL;i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }
console.log(images);
  return (
     <>
        <Header title="Our Gallery" image={HeaderImage}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, impedit eveniet culpa illum id fugit molestias dolore sint ipsum repudiandae, itaque sapiente repellendus aperiam. Accusantium, corporis.
        </Header>
        <section className='gallery'>
            <div className="container gallery-container">
              {
                images.map((image,index)=>{
                  return <article key={index}>
                    <img src={image} alt={`Gallery ${index+1}`} />
                  </article>
                })
              }
            </div>
        </section>
     </>
  )
}

export default Gallery