import React from 'react'

export default function Form(props){
      let numberOfSentence = props.counted(props.text,   /[!\.\?]/)
      let numberOfWord = props.counted(props.text,   ' ')
      let  numberOfParagraph= props.counted(props.text,  /\r?\n/)
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
                                    <button  type='submit' disabled={!props.search}>Search</button>
                              </form>                 
                              <h3>Number of Characters:{props.numberOfCharacter(props.text)}</h3>
                              <h3>Number of Words:{numberOfWord}</h3>
                              <h3>Number of Sentences:{numberOfSentence}</h3>
                              <h3>Number of Paragraphs:{numberOfParagraph}</h3>
                              <h3>Bigram  Count:</h3>
                              <h3>Most Frequeney Word:</h3>
                              <h3>Searched Result:{props.}</h3> {/*word serch result */}
                        </div>
                  </div>
            </div>
      )
}


