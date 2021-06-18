import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
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
                        <div>

                        </div>
                       
                  </div>
                  <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end" className = 'split right'>
                        <Grid item>
                              <TextField id="input-with-icon-grid" label="Link here" className = 'centered'/>
                        </Grid>
                        </Grid>
                  </div>
            </div>
      )
}
