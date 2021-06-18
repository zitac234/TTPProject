import React from 'react'

export default function textBox(props){
      const {text} = props
      return (
            <div>
                  <h2 id = 'paragraph'>Write text or include the link to document</h2>
                  <div className = 'split left'>
                        <div  className = 'centered'>
                        <p  id = 'line'><textarea placeholder = 'Write here' ></textarea></p>
                        </div>
                  </div>
                  <div className = 'split right'>
                        <div className = 'centered'>
                              <form >    
                                    <input className="w3-input w3-border" name="last" type="text" placeholder = 'Link'/>    
                                    <button className="w3-btn w3-blue">Submit</button>
                              </form>
                        </div>
                        <h5>Character Count</h5>
                        <h5>Word Count</h5>
                        <h5>Sentence Count</h5>
                        <h5>Character Count</h5>
                  </div>
            </div>
      )
}
