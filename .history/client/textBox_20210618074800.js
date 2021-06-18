import React from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
const textBox = (props) => {
      const {text} = props
      return (
      <TextareaAutosize
            rowsMax={50}
            aria-label="maximum height"
            placeholder="Maximum  rows"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua."
    />
      )
}