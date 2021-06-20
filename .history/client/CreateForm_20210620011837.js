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
            let sentences = this.state.search.split(regex)
            return sentences
            console.log('setences', sentences)
      }
      async handleSubmit (evt){
            evt.preventDefault()
            let s = this.countSentence()
            console.log
            // console.log('state from submit',)
      }
      render(){
            console.log('state', this.state)
            return (
                  <Form 
                  {...this.state } 
                  handleChange={this.handleChange} 
                  handleSubmit={this.handleSubmit} 
                  // countSentence={this.countSentence}
                  />
            )
      }
}
