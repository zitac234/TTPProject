import React, { useState } from 'react'

export default function Form(props){
      const[text, setText] = useState('')
      const [search, setSearch] = useState('')
      return (
            <div>
                  <h2 id = 'paragraph'>Write text or include the link to document</h2>
                  <div className = 'split left'>
                        <div  className = 'centered'>
                              <p  id = 'line'><textarea  name= 'text'   onChange={event => setText(event)} id = 'textarea'  placeholder = 'max character 2500' maxLength='2500'></textarea></p>
                        </div>
                  </div>
                  <div className = 'split right'>
                        <div className = 'centered'>
                              <form onSubmit={props.handleSubmit} >    
                                    <input  name="search"  onChange={props.handleChange} type="text" placeholder = 'Search...'/>    
                                    <button  type='submit' disabled={!props.search}>Search</button>
                              </form>                 
                              <h5>Character Count:</h5>
                              <h5>Word Count:</h5>
                              <h5>Sentence Count:</h5>
                              <h5>Bigram  Count:</h5>
                              <h5>Most Frequeney Word:</h5>
                              <h5>Word Result:</h5> {/*word serch result */}
                        </div>
                  </div>
            </div>
      )
}


