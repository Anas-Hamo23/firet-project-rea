import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import Trainer from '../../components/Trainer';
import './trainers.css';

const Trainers = () => {
  return (
     <>
        <Header title="Our Trainers" image={HeaderImage}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quaerat. Alias architecto, corrupti asperiores autem eius reiciendis laboriosam natus qui?
        </Header>
        <section className='container trainers-container'>
            {
              trainers.map(({id,image,name,job,socials})=>{
                return(
                  <Trainer key={id} image={image} name={name} job={job} socials={
                    [
                      {icon:<BsInstagram/>,link:socials[0]},
                      {icon:<AiOutlineTwitter/>,link:socials[1]},
                      {icon:<FaFacebookF/>,link:socials[2]},
                      {icon:<FaLinkedin/>,link:socials[3]}
                    
                    ]
                  }
                  
                  />
                )
              })
            }
        </section>
     </>
  )
}

export default Trainers