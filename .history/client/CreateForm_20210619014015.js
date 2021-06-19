import React from 'react'
import axios from 'axios'
import Form  from './Form'

export default class CreateForm extends React.Component{
      constructor(){
            super()
            this.state = {
                  link :'',
                  text : ''
            }
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
      }
}