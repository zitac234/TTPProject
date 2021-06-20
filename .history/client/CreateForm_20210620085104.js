import React, { useState } from 'react'
import Form  from './Form'

export default function CreateForm (props) {
      const [text, setText] = useState('')
      const [search, setSearch] = useState('')
      let[ numberOfSentence, numberOfWord, numberOfCharacter, numberOfParagraph] =  [0, 0, 0, 0]
      let [counted,] = 0
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
                  numberOfCharacter = {countCharacters}
                  counted = {counts}
                  />
      )
}
const counts = (str,demilter)=>{
      let textSplit = str.split(demilter)
      let strArray = textSplit.filter(s => s && s.trim())
      return strArray.length
}
const countCharacters = (str)=>{
      let textSplit = str.split('')
      let characterArray = textSplit.filter(character => character)
      return characterArray.length
}
