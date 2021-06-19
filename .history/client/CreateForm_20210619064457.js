import React from 'react'
// import axios from 'axios'
import Form  from './Form'

export default class CreateForm extends React.Component{
      constructor(){
            super()
            this.state = {
                  link :'',
                  text : '',
                  linkData: ''
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
            evt.preventDefault()
            let url = 'file:///Users/nneommy/Downloads/Reflection_busypdf%20(1).json'
            const {data} = await axios.get(url)
            console.log(data)
            this.setState({ linkData: data })
      }
      render(){
            console.log('state',this.state)
            return (
                  <Form {...this.state } handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            )
      }
}