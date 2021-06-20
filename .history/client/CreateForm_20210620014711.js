import React, { useState } from 'react'
import Form  from './Form'

export default class CreateForm extends React.Component{
      constructor(){
            super()
            this.state = {
                  search :'',
                  text : '',
            }
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
            this.countSentence = this.countSentence.bind(this)
      }
      handleChange(evt){
            this.setState({
                  [evt.target.name]: evt.target.value
            })
      }
      countSentence(){
            let regex = /[!\.\?]/
            let textSplit = this.state.text.split(regex)
            console.log('textSplit', textSplit)
            let sentenceArray = textSplit.filter(sentence => sentence.length > 0)
            sentenceArray.forEach(s => console.log('word length', s.length, 's', ))
            console.log('sentenceArray', sentenceArray)
            return sentenceArray.length   
      }
      async handleSubmit (evt){
            evt.preventDefault()
      }
      render(){
            return (
                  <Form 
                  {...this.state } 
                  handleChange={this.handleChange} 
                  handleSubmit={this.handleSubmit} 
                  numberOfSentence = {this.countSentence}
                  />
            )
      }
}
