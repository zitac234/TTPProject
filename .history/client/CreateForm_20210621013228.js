import React, { useState } from 'react'
import Form  from './Form'

export default function CreateForm (props) {
      const [text, setText] = useState('')
      const [search, setSearch] = useState('')
      let [counted, numberOfCharacter] = [0,0]
      function handleChange(evt){
            if(evt.target.name === 'text') setText(evt.target.value)
            else setSearch(evt.target.value)
      }
      function handleSubmit(evt){
            evt.preventDefault()
            let SearchWord = counts(text, ' ')[1].filter(word => word === search)
            return (SearchWord)? <p>There are {SearchWord.length} {search}'s in your text.</p> : <p>`There are no {search} in your text.`</p>
      }
      return(
            <Form 
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
      return [strArray.length, strArray]
}
const countCharacters = (str)=>{
      let textSplit = str.split('')
      let characterArray = textSplit.filter(character => character)
      // console.log(document.getElementById('result'))
      return characterArray.length
}
// const searchWord = (str, demilter) => {
//       let d = new RegExp(demilter, 'g')
//       let count =  (str.match(d) || [])
//       console.log('count',count, 'demilter', demilter)
//       let result = (count)? `There are ${count.length} ${demilter}'s in your text.` : `There are no ${demilter} in your text.`
//       return result
//       // document.getElementById('result').innerHTML = result
// }