import React from 'react'

export default function textBox(props){
      const {text} = props
      return (
            <div>
                  <h3 id = 'paragraph'>Write text or include the link to document</h3>
                  <div >
                  <div className = 'split left'>
                        <div  className = 'centered'>
                              <textarea placeholder = 'Write here' ></textarea>
                        </div>
                  </div>
                  <div className = 'split right'>
                        <div className = 'centered'>
                              <form >    
                                    <input className="w3-input w3-border" name="last" type="text" placeholder = 'Link'/>    
                                    <button className="w3-btn w3-blue">Submit</button>
                              </form>
                        </div>
                  </div>
                  </div>
            </div>
      )
}
