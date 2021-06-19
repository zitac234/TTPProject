import React from 'react'
import axios from 'axios'
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
            console.log()
      }
      async handleSubmit (evt){
            evt.preventDefault()
            let url = this.link
            const {data} = await axios.get(url)
            this.setState({ linkData: data })
      }
      render(){
            console.log('props', this.props)
            return (
                  <Form {...this.state } handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            )
      }
}