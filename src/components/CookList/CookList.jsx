import './CookList.css'
import Remove from '../Remove/Remove'
import IsFavourite from '../IsFavourite/IsFavourite';

export default function CookList({SetFavourite, UnsetFavourite,isFav, SearchVar, cookingList, removeList}){
    return(
        <div className='list'>
        {cookingList
                
        .filter((item) => item.title.toLowerCase().includes(SearchVar.toLowerCase()) && isFav === item.IsFavourite )
        .map((item,index)=>(
                <div className='list-item'>
                    <Remove removeList={removeList} index={index}/>
                    <IsFavourite isFav={item.IsFavourite} index={index} SetFavourite={SetFavourite} UnsetFavourite={UnsetFavourite}/>
                    <h2 key={index}>{item.title}</h2>
                    <p className='list-content'>{item.content}</p>
                </div>
        ))}
        </div>
    );
}