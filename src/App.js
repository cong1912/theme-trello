import List from './components/List/List';
import React,{useState} from 'react';
import {v4 as uuid } from 'uuid';
import store from './utils/store'
import StoreApi from './utils/storeApi'
function App() {
  const [data,setData] =useState(store);
  const addMoreCard=(title,listId)=>{
   const newCardId =uuid();
   const newCard={
     id:newCardId,
     title,
   };
   const list = data.lists[listId];
   list.cards=[...list.cards,newCard]

   const newState ={
     ...data,lists:{
       ...data.list,
       [listId]:list,
     },
   };
   setData(newState);
  }
  return (
    <StoreApi.Provider value={{ addMoreCard}}>

    
    <div>
      {data.listIds.map((listId)=>{
        const list = data.lists[listId];
        return <List list={list} key={listId} /> 
      })}
    </div>
    </StoreApi.Provider>
  );
}

export default App;
