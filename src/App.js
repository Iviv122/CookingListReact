import './App.css';
import { useReducer } from 'react';

import reducer from './reducers/listReducer';

import AddItem from './components/AddItem';
import CookList from './components/CookList';

function App() {
  const initialList=[
    {title: "Sample Title1",content: "Sample text1"}, 
    {title: "Sample Title2",content: "Sample text2"},
    {title: "Sample Title3",content: "Sample text3"}
]

  const[state, dispatch] = useReducer(reducer, {cookingList: initialList});
  
  function handleAddList(title,content){
    dispatch({type:"AddList", title,content});
  }


  return (
   <div className='App'>
    <AddItem AddList={handleAddList}/>
    <CookList cookingList={state.cookingList}/>
   </div> 
  );
}

export default App;
