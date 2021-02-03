import React, { useEffect, useState } from "react";
import { Typography, InputBase } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyle = makeStyles((theme) =>({
    root: {
        width:'300px',
        backgroundColor:'#EBECF0',
        marginLeft:theme.spacing(1),
    },
    edittableTitle:{
       flexGrow:1,
       fontsize:'1.2rem',
       fontWeight:'bold'
    },
    edittableTitleContainer:{
        marginLeft:theme.spacing(1),
        display: 'flex',
    },
    input:{
        margin:theme.spacing(1),
        '&:focus':{
            background:'#ddd'
        }
    }
}))
function Title({title}) {
    const [open, setOpen] = useState(false);
  const classes=useStyle();
  return (
    <div>
      {open ? (
        <div>
          <InputBase autoFocus onBlur={()=>setOpen(!open)} fullWidth value={title} inputProps={{className:classes.input,}} />
        </div>
      ) : (
        <div className={classes.edittableTitleContainer}>
          <Typography className={classes.edittableTitle} onClick={()=>setOpen(!open)}>{title}</Typography>
            <MoreHorizIcon/>
        </div>
      )}
    </div>
  );
}

export default Title;
