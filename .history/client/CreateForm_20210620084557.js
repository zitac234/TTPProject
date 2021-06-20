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
      let[ numberOfSentence, numberOfWord, numberOfCharacter, numberOfParagraph] =  [0, 0, 0, 0]
      let counted = 0
      function handleChange(evt){
            if(evt.target.name === 'text') setText(evt.target.value)
            else setSearch(evt.target.value)
            console.log('text:', text.split(' '))
      }
      function handleSubmit(evt){
            evt.preventDefault()
      }
      return(
            <Form 
                  // {...this.state } 
                  text={text}
                  search={search}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  // numberOfSentence = {countSentences }
                  numberOfWord = {countWords}
                  numberOfCharacter = {countCharacters}
                  numberOfParagraph = {countParagraphs}
                  counted = {counts}
                  />
      )
}
const counts = (str,demilter)=>{
      let textSplit = str.split(demilter)
      let strArray = textSplit.filter(s => s && s.trim())
      return strArray.length
}
// const countSentences = (str)=>{
//       let regex = /[!\.\?]/
//       let textSplit = str.split(regex)
//       let sentenceArray = textSplit.filter(sentence => sentence && sentence.trim())
//       return sentenceArray.length
// }
const countWords = (str)=>{
      let textSplit = str.split(' ')
      let wordArray = textSplit.filter(word => word && word.trim())
      return wordArray.length
}
const countCharacters = (str)=>{
      let textSplit = str.split('')
      let characterArray = textSplit.filter(character => character)
      return characterArray.length
}
const countParagraphs = (str)=>{
      let textSplit = str.split(/\r?\n/)
      let paragraphArray = textSplit.filter(word => word && word.trim())
      return paragraphArray.length
}