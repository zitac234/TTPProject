import React, { useState } from 'react'
import Form  from './Form'

export default function CreateForm (props) {
      const [text, setText] = useState('')
      const [search, setSearch] = useState('')
      let [counted, numberOfCharacter, searchedWord] = [0,0,0]
      function handleChange(evt){
            if(evt.target.name === 'text') setText(evt.target.value)
            else setSearch(evt.target.value)
      }
      function handleSubmit(evt){
            evt.preventDefault()
            let s = searchWord(text, search)
            console.log('s', s)
            // document.getElementById('btn').addEventListener('click',searchWord  )
      }
      return(
            <Form 
                  text={text}
                  search={search}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  numberOfCharacter = {countCharacters}
                  counted = {counts}
                  searchedWord ={searchWord}
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
      // console.log(document.getElementById('result'))
      return {length}
}
// const searchWord = (str, demilter) => {
//       let d = new RegExp(demilter, 'g')
//       let count =  (str.match(d) || [])
//       console.log('count',count, 'demilter', demilter)
//       let result = (count)? `There are ${count.length} ${demilter}'s in your text.` : `There are no ${demilter} in your text.`
//       return result
//       // document.getElementById('result').innerHTML = result
// }