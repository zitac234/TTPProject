import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'

const useStyles = makeStyles((theme) => ({
      margin: {
        margin: theme.spacing(1),
      },
 }));
export default function textBox(props){
      const classes = useStyles();
      const {text} = props
      return (
            <div>
                  <div id = 'paragraph'>Write text or include the link to document</div>
                  <div className = 'split left'>
                        <div  className = 'centered'>
                        <textarea id="w3review" name="textarea" rows="100" cols="50" ></textarea>
                        </div>
                  </div>
                  <div className={classes.margin}>
                        <div className = 'split right'>
                        <div className = 'centered'>
                              <TextField id="input-with-icon-grid" label="Link here"  id = 'link'/>
                        </div>
                        </div>
                  </div>
            </div>
      )
}
