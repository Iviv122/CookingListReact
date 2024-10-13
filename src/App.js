import './App.css';
import { useReducer } from 'react';

import reducer from './reducers/listReducer';

import AddItem from './components/AddItem/AddItem';
import CookList from './components/CookList/CookList';
import Search from './components/Search/Search'

function App() {
  const initialList=[
    {title: "Sample Title1",content: "Sample text1"}, 
    {title: "Sample Title2",content: "Sample text2"},
    {title: "Sample Title3",content: "Sample text3"}
]

  const[state, dispatch] = useReducer(reducer, {cookingList: initialList, searchContent: ''});
  
  function handleAddList(title,content){
    dispatch({type:"AddList", title,content});
  }
  function handleRemoveList(index){
    dispatch({type:"RemoveList",index});
  }
  function handleSearchContent(text){
    dispatch({type:"SearchContent",text});
  }


  return (
   <div className='App'>
    <AddItem AddList={handleAddList}/>
    <Search searchContent={handleSearchContent}/>
    <CookList SearchVar={state.searchContent} cookingList={state.cookingList} removeList={handleRemoveList}/>
   </div> 
  );
}

export default App;
