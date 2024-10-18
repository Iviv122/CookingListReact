import './CookList.css'
import Remove from '../Remove/Remove'
import IsFavourite from '../IsFavourite/IsFavourite';

export default function CookList({SetFavourite, UnsetFavourite,isFav, SearchVar, cookingList, removeList}){
    return(
        <div className='list'>
        {
        !isFav ? (
        cookingList 
        .filter((item) => item.title.toLowerCase().includes(SearchVar.toLowerCase()))
        .map((item)=>(
                <div className='list-item'>
                    <Remove removeList={removeList} index={item.id}/>
                    <IsFavourite isFav={item.IsFavourite} index={item.id} SetFavourite={SetFavourite} UnsetFavourite={UnsetFavourite}/>
                    <h2 key={item.id}>{item.title}</h2>
                    <p className='list-content'>{item.content}</p>
                </div>
        ))) :(
         cookingList 
        .filter((item) => item.title.toLowerCase().includes(SearchVar.toLowerCase()) && item.IsFavourite)
        .map((item)=>(
                <div className='list-item'>
                    <Remove removeList={removeList} index={item.id}/>
                    <IsFavourite isFav={item.IsFavourite} index={item.id} SetFavourite={SetFavourite} UnsetFavourite={UnsetFavourite}/>
                    <h2 key={item.id}>{item.title}</h2>
                    <p className='list-content'>{item.content}</p>
                </div>
        ))
        )
        }
        </div>
    );
}