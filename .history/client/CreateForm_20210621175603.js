import React, { useEffect, useState } from 'react'
import Form  from './Form'

export default function CreateForm (props) {
      const [text, setText] = useState('')
      const [search, setSearch] = useState('')
      let [counted, numberOfCharacter, number] = [0,0]
      function handleChange(evt){
            if(evt.target.name === 'text') setText(evt.target.value)
            else setSearch(evt.target.value)
      }
      function handleSubmit(evt){
            evt.preventDefault()
            let  s = countBigrams(text)
            console.log('s', s)
      }
      useEffect(()=>{
            document.getElementById('btn').addEventListener('click', ()=>{
                  searchWord(text, search)
            }, false)
      })
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
      return characterArray.length
}

const searchWord = (text, search)=>{
      let SearchArray = counts(text, ' ')[1].filter(word => word === search)
      let searchWord = (SearchArray.length)? `There are ${SearchArray.length} ${search}.`:`There is no ${search}.`
      document.getElementById('result').innerHTML = searchWord
}
const countBigrams = (str)=>{
      let regex = /\?|\.|!|,|:|;|[0-9]|/g
      let newStr = str.replace(regex, "")
      let wordsArray  = counts(newStr, ' ')[1]
      let bigramArray = []
      let bigramObj = {}
      for(let k = 0; k < wordsArray.length-2; k++){
            let [currentWord, nextWord] = [wordsArray[k], wordsArray[k+1]]
            let bigram = `${currentWord} ${nextWord}`
            bigramArray.push(bigram)
      }
      bigramArray.forEach(b => bigramObj[b]=( bigramObj[b] || 0)+1)
      let  values = Object.values(bigramObj )
      console.log('values', values, 'bigramObj', bigramObj)
      let result = values.reduce((a, c)=>{
            return a+c-1
      }, 0)
      return result
}