export default function reducer(state,action){

    switch(action.type){

    case 'AddList':
        const newItem = {title: action.title , content: action.content};
        return {...state, cookingList: [...state.cookingList, newItem]};
    default:
        return state;
    }

}