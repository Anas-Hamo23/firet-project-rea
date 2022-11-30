import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg';
import {MdEmail} from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io'

import  './contact.css';

const Contact = () => {
  return (
     <>
        <Header title="Get In Touch" image={HeaderImage}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore laudantium repellat in nisi? Dignissimos, architecto delectus repudiandae, excepturi culpa molestiae officia voluptas dolorem tenetur laboriosam dolorum.
        </Header>
        <section className='contact'>
          <div className="container contact-container">
            <div className="contact-wrapper">
              <a href="mailto:support@hvscsv.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
              <a href="mailto:support@hvscsv.com" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
              <a href="mailto:support@hvscsv.com" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
            </div>
          </div>
        </section>
     </>
  )
}

export default Contact