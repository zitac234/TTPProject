import React, { useState } from 'react'
import Form  from './Form'

export default function CreateForm (props) {
      const [text, setText] = useState('')
      const [search, setSearch] = useState('')
      let [counted, numberOfCharacter, searchedWord] = [0,0, 0]
      function handleChange(evt){
            if(evt.target.name === 'text') setText(evt.target.value)
            else setSearch(evt.target.value)
      }
      function handleSubmit(evt){
            evt.preventDefault()
            let s = searchWord(text, search)
            console.log('s', s)
            return s
      }
      return(
            <Form 
                  text={text}
                  search={search}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  numberOfCharacter = {countCharacters}
                  counted = {counts}
                  // searchedWord ={searchWord}
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
const searchWord = (str, demilter) => {
      let count =  (str.match(/demilter/g )|| []).length
      console.log('count',count)
      return (count)? `There are ${count} ${str}'s in your text.` : `There are no ${str} in your text.`
}