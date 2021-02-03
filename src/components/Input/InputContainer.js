import { Collapse, Paper,Typography } from '@material-ui/core'
import React,{useState} from 'react'
import {fade, makeStyles} from '@material-ui/core/styles';
import InputCard from './InputCard';
const useStyle = makeStyles((theme) =>({
    addCard:{
        padding:theme.spacing(1,1,1,2),
        margin:theme.spacing(0,1,1,1),
        background:'#EBECF0',
        "&:hover":{
            backgroundColor: fade("#000",0.25),
        }
    },
    root:{
        marginTop:theme.spacing(2)
    }
}))
function InputContainer({listId}) {
    const classes =useStyle();
    const [open, setOpen]= useState(false);
    return (
        <div className={classes.root}>
            <Collapse in={open}>
                <InputCard setOpen={setOpen} listId={listId}/>
            </Collapse>
            <Collapse in={!open}>
                <Paper className={classes.addCard} elevation={0} onClick={()=>setOpen(!open)}>
                    <Typography>+ add a card</Typography>
                </Paper>
            </Collapse>
        </div>
    )
}

export default InputContainer
