import './App.css';
import { useReducer } from 'react';

import reducer from './reducers/listReducer';

import AddItem from './components/AddItem/AddItem';
import CookList from './components/CookList/CookList';
import Search from './components/Search/Search'

function App() {
  const initialList=[
    {title: "Sample Title1",content: "Sample text1",IsFavourite: false, id:1}, 
    {title: "Sample Title2",content: "Sample text2",IsFavourite: false, id:2},
    {title: "Sample Title3",content: "Sample text3",IsFavourite: false, id:3}
]

  const[state, dispatch] = useReducer(reducer, {cookingList: initialList,searchContent: '', SearchFavourite: false, id: 4});
  
  function handleAddList(title,content){
    dispatch({type:"AddList", title,content});
  }
  function handleRemoveList(index){
    dispatch({type:"RemoveList",index});
  }
  function handleSearchContent(text){
    dispatch({type:"SearchContent",text});
  }
  function handleSetFavourite(index){
    dispatch({type:"SetFavourite",index});
  }
  function handleUnsetFavourite(index){
    dispatch({type:"UnsetFavourite",index});
  }
  function handleSearchFavourite(){
    dispatch({type:"SearchFavourite"})
  }
  function handleSearchNormal(){
    dispatch({type:"SearchNormal"})
  }


  return (
    
   <div className='App'>        {/*Nie umiem kontekstow, nie rozumiem :( */}

    <h1>Lista przepisow</h1>

    <Search searchContent={handleSearchContent} searchFavouriteFunc={handleSearchFavourite} searchNormalFunc={handleSearchNormal} isFav={state.SearchFavourite}/>

    <AddItem AddList={handleAddList}/>  
   
    <CookList SearchVar={state.searchContent} cookingList={state.cookingList} isFav={state.SearchFavourite} removeList={handleRemoveList} SetFavourite={handleSetFavourite} UnsetFavourite={handleUnsetFavourite}/>
   </div> 
  );
}

export default App;
