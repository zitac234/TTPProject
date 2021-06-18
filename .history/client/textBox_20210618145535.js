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
                  <div id = 'paragraph'>Write text or include the link to document</div>
                  <div className = 'split left'>
                        <div  className = 'centered'>
                              <textarea ></textarea>
                        </div>
                  </div>
                  <div className = 'split right'>
                        <div className = 'centered'>
                        <form  >    
                                    <label className="w3-text-blue"><b>Link</b></label>
                                    <input className="w3-input w3-border" name="last" type="text"/>    
                                    <button className="w3-btn w3-blue">Submit</button>
                              </form>
                        </div>
                  </div>
            </div>
      )
}
