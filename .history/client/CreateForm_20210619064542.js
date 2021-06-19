import React from 'react'
// import axios from 'axios'
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
      }
      handleChange(evt){
            this.setState({
                  [evt.target.name]: evt.target.value
            })
      }
      async handleSubmit (evt){
            console.log('search')
      }
      render(){
            console.log('state',this.state)
            return (
                  <Form {...this.state } handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            )
      }
}