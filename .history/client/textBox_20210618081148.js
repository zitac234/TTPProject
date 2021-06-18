import React from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
export default function textBox(props){
      const {text} = props
      return (
            <div>
                  <div>Write text or include the link to docu</div>
                  <TextareaAutosize
                        rowsMax={50}
                        aria-label="maximum height"
                        placeholder="Maximum 50 rows"
                        defaultValue="Write text here"
            />
            </div>
      )
}
