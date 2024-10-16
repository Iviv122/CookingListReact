export default function reducer(state,action){

    switch(action.type){

    case 'AddList':
        const newItem = {title: action.title , content: action.content,IsFavourite: false, id: state.id};
        return {...state, cookingList: [...state.cookingList, newItem], id : state.id+1};
    case 'RemoveList':
        const newList = state.cookingList.filter((item)=> item.id!== action.index);
        return {...state, cookingList: newList};
    case 'SearchContent':
        return {...state, searchContent: action.text};
    case 'SetFavourite':
        const newFav = state.cookingList.map((item)=>{
            if(item.id !== action.index){
                return item;
            }else{
                return{
                    ...item,
                    IsFavourite: true
                };
            }
        });
        return {...state, cookingList: newFav };

    case 'UnsetFavourite':
        const newUnFav = state.cookingList.map((item,index)=>{
            if(item.id !== action.index){
                return item;
            }else{
                return{
                    ...item,
                    IsFavourite: false 
                };
            }
        });
        return {...state, cookingList: newUnFav };

    case 'SearchFavourite':
        return {...state,SearchFavourite : true}; // probowalem zronic jedna funckja ktora by zwracala !SearhFavorite i mozna bylo by odwrac wartoscz ale mi nie zadzialo :<(
    
    case 'SearchNormal': 
        return {...state,SearchFavourite: false};

    default:
        return state;
    }

}