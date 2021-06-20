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
            let s = countSentence()
            console.log('state', this.state, 's', s)
      }
      countSentence(){
            let regex = /[!\.\?]/
            let textSplit = this.state.text.split(regex)
            let sentenceArray = textSplit.filter(sentence => sentence.length > 0)
            console.log()
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
