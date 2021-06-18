import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
      margin: {
        margin: theme.spacing(1),
      },
 }));
export default function textBox(props){
      // const classes = useStyles();
      const {text} = props
      return (
            <div>
                  <div id = 'paragraph'>Write text or include the link to document</div>
                  <div className = 'split left'>
                        <div  className = 'centered'>
                              <textarea ></textarea>
                        </div>
                  </div>
                  <div className={classes.margin}>
                        <div className = 'split right'>
                        <div className = 'centered'>
                        <form class="w3-container w3-card-4" action="/action_page.php">      
  <label class="w3-text-blue"><b>Last Name</b></label>
  <input class="w3-input w3-border" name="last" type="text"></p>
  <p>      
  <button class="w3-btn w3-blue">Register</button></p>
</form>
                        </div>
                        </div>
                  </div>
            </div>
      )
}
