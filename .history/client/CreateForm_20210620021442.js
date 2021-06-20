import React, { useState } from 'react'
import Form  from './Form'

// export default class CreateForm extends React.Component{
//       constructor(){
//             super()
//             this.state = {
//                   search :'',
//                   text : '',
//             }
//             this.handleChange = this.handleChange.bind(this)
//             this.handleSubmit = this.handleSubmit.bind(this)
//             this.countSentence = this.countSentence.bind(this)
//       }
//       handleChange(evt){
//             this.setState({
//                   [evt.target.name]: evt.target.value
//             })
//       }
//       countSentences(){
//             let regex = /[!\.\?]/
//             let textSplit = this.state.text.split(regex)
//             let sentenceArray = textSplit.filter(sentence => sentence && sentence.trim())
//             return sentenceArray.length   
//       }
//       async handleSubmit (evt){
//             evt.preventDefault()
//       }
//       render(){
//             return (
//                   <Form 
//                   {...this.state } 
//                   handleChange={this.handleChange} 
//                   handleSubmit={this.handleSubmit} 
//                   numberOfSentence = {this.countSentences}
//                   />
//             )
//       }
// }

export default function CreateForm (props) {
      const [text, setText] = useState('')
      const [search, setSearch] = useState('')
      function handleChange(evt){
            if(evt.target.name === 'text') setText(evt.target.value)
            else setSearch(evt.)
      }
      return(
            <Form 
                  // {...this.state } 
                  text={text}
                  search={search}
                  handleChange={handleChange}
                  // handleChange={this.handleChange} 
                  // handleSubmit={this.handleSubmit} 
                  // numberOfSentence = {this.countSentences}
                  />
      )
}