import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//       margin: {
//         margin: theme.spacing(1),
//       },
//  }));
export default function textBox(props){
      // const classes = useStyles();
      const {text} = props
      return (
            <div>
                  <p id = 'paragraph'>Write text or include the link to document</p>
                  <div className = 'split left'>
                        <div  className = 'centered'>
                              <textarea placeholder = 'Write here' ></textarea>
                        </div>
                  </div>
                  <div className = 'split right'>
                        <div className = 'centered'>
                              <form >    
                                    <input className="w3-input w3-border" name="last" type="text" placeholder = 'Link'/>    
                                    <button className="w3-btn w3-blue">Submit</button>
                              </form>
                        </div>
                  </div>
            </div>
      )
}
