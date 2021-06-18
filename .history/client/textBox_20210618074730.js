import React from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
const textBox = (props) => {
      const {text} = props
      return (
      <TextareaAutosize
            rowsMax={}
            aria-label="maximum height"
            placeholder="Maximum 4 rows"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua."
    />
      )
}