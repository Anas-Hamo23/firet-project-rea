
import { useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
const FAQ = ({question,answer}) => {
    const [isAnawerShowing,setIsAnswerShowing]=useState(false);


  return (
    <article className="faq" onClick={()=>setIsAnswerShowing(prve=>!prve)}>
        <div>
            <h4>{question}</h4>
            <button className="faq__icon">
                {
                    isAnawerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>
                }
            </button>
        </div>
     
            {
                isAnawerShowing && <p>{answer}</p>
            }
        
    </article>
  )
}

export default FAQ