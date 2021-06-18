import React from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
const textBox = (props) => {
      const {text} = props
      return (
      <TextareaAutosize
            rowsMax={50}
            aria-label="maximum height"
            placeholder="Maximum 50 rows"
            defaultValue="Write here"
    />
      )
}
export 