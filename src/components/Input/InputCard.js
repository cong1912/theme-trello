import { Button, IconButton, InputBase, Paper } from '@material-ui/core'
import React,{useState,useContext} from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import {fade, makeStyles} from '@material-ui/core/styles';
import storeApi from '../../utils/storeApi';
const useStyle = makeStyles((theme) =>({
    card: {
        margin:theme.spacing(0,1,1,1),
        paddingBottom:theme.spacing(4),
    },
    input:{
        margin:theme.spacing(1),
    },
    btnConfirm:{
        background:"#5AAC44",
        color:"#fff",
        "&:hover":{
            background:fade("#5AAC44",0.75)
        }
    },
    confirm:{
        margin:theme.spacing(0,1,1,1),
    }
}))
function InputCard({setOpen,listId}) {
    const classes =useStyle();
    const {addMoreCard}=useContext(storeApi);
    const [cardTitle,setCartTitle]=useState('');

    const handleChange=(e)=>{
        setCartTitle(e.target.value);
    };
    const handleBtnConfirm=(e)=>{
        addMoreCard(cardTitle,listId);
        setCartTitle('');
        setOpen(false);
    }
    const handleBlur=()=>{
        setOpen(false);
        setCartTitle('');
    }
    return (
        <div>
            <div >
                <Paper className={classes.card}>
                    <InputBase value={cardTitle} onChange={handleChange} multiline onBlur={handleBlur} fullWidth inputProps={{
                        className:classes.input,
                    }}
                    placeholder="Enter a title of this card"
                    />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>add card</Button>
                <IconButton>
                    <ClearIcon onClick={()=>setOpen(false)}/>
                </IconButton>
            </div>
        </div>
    )
}

export default InputCard
