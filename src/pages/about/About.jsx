import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import Vision from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css';


const About = () => {
  return (
     <>
      <Header title="About us" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium adipisci vero quisquam, ratione ea eum neque voluptatibus. Deleniti facilis doloribus et laboriosam perspiciatis omnis corrupti id.
      </Header>

      <section className='about-story'>
          <div className="container about-story-container">
            <div className="about-section-image">
              <img src={StoryImage} alt="our_story" />
            </div>
            <div className="about-section-content">
              <h1>Our Story</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem praesentium ipsa animi at iste necessitatibus eligendi deserunt magni alias excepturi sed, aliquam voluptas. Cumque, dolorum veritatis labore tempora eligendi nisi.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint impedit amet nobis pariatur nisi dolore reprehenderit, minima molestias libero temporibus! Soluta labore laborum alias dicta cumque maiores reprehenderit illo laboriosam.</p>

            </div>
          </div>
      </section>
      <section className='about-vision'>
          <div className="container about-vision-container">
            <div className="about-section-content">
              <h1>Our Vision</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem praesentium ipsa animi at iste necessitatibus eligendi deserunt magni alias excepturi sed, aliquam voluptas. Cumque, dolorum veritatis labore tempora eligendi nisi.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint impedit amet nobis pariatur nisi dolore reprehenderit, minima molestias libero temporibus! Soluta labore laborum alias dicta cumque maiores reprehenderit illo laboriosam.</p>
            </div>
            <div className="about-section-image">
              <img src={Vision} alt="our_vision" />
            </div>
          </div>
      </section>
      <section className='about-mission'>
          <div className="container about-mission-container">
            <div className="about-section-image">
              <img src={MissionImage} alt="our_Mission" />
            </div>
            <div className="about-section-content">
              <h1>Our Mission</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem praesentium ipsa animi at iste necessitatibus eligendi deserunt magni alias excepturi sed, aliquam voluptas. Cumque, dolorum veritatis labore tempora eligendi nisi.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint impedit amet nobis pariatur nisi dolore reprehenderit, minima molestias libero temporibus! Soluta labore laborum alias dicta cumque maiores reprehenderit illo laboriosam.</p>
              
            </div>
          </div>
      </section>
     </>
  )
}

export default About