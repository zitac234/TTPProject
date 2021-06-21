import React from 'react'

export default function Form(props){
      let numberOfSentence =( props.counted(props.text,   /[!\.\?]/) || 0)
      let numberOfWord = (props.counted(props.text,   ' ') || 0)
      let  numberOfParagraph= (props.counted(props.text,  /\r?\n/) || 0)
      return (
            <div>
                  <h2 id = 'paragraph'>Write text or include the link to document</h2>
                  <div className = 'split left'>
                        <div  className = 'centered'>
                              <p  id = 'line'><textarea  name= 'text'   onChange={props.handleChange} id = 'textarea'  placeholder = 'max character 2500' maxLength='2500'></textarea></p>
                        </div>
                  </div>
                  <div className = 'split right'>
                        <div className = 'centered'>
                              <form  onSubmit={props.handleSubmit} >   
                                    <input  name="search"  onChange={props.handleChange} type="text" placeholder = 'Search...'/>    
                                    <button  id =  'btn'  onClick={}type='submit' disabled={!props.search} >Search</button>
                              </form> 
                              <h3 id = 'result'></h3>                
                              <h3>Number of Characters:{props.numberOfCharacter(props.text)}</h3>
                              <h3>Number of Words:{numberOfWord[0]}</h3>
                              <h3>Number of Sentences:{numberOfSentence[0]}</h3>
                               <h3>Number of Paragraphs:{numberOfParagraph[0]}</h3>
                              <h3>Bigram  Count:</h3>
                              <h3>Searched Result:{props.handleSubmit}</h3> {/*word serch result */}
                        </div>
                  </div>
            </div>
      )
}


