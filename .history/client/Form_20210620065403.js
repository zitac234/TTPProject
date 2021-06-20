import React from 'react'

export default function Form(props){
      // console.log('props', props)
      let regex = /[!\.\?]/
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
                              <h3>Number of Words:{props.numberOfWord(props.text)}</h3>
                              <h3>Number of Sentences:{props.numberOfSentence(props.text, regex)}</h3>
                              <h3>Number of Paragraphs:{props.numberOfParagraph(props.text)}</h3>
                              <h3>Bigram  Count:</h3>
                              <h3>Most Frequeney Word:</h3>
                              <h3>Word Result:</h3> {/*word serch result */}
                        </div>
                  </div>
            </div>
      )
}


