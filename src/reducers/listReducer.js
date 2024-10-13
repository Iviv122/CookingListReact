export default function reducer(state,action){

    switch(action.type){

    case 'AddList':
        const newItem = {title: action.title , content: action.content};
        return {...state, cookingList: [...state.cookingList, newItem]};
    case 'RemoveList':
        const newList = state.cookingList.filter((item,index)=> index!== action.index);
        return {...state, cookingList: newList};
    case 'SearchContent':
        return {...state, searchContent: action.text};
    default:
        return state;
    }

}