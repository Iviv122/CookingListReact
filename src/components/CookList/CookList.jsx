import './CookList.css'
import Remove from '../Remove/Remove'

export default function CookList({SearchVar,cookingList, removeList}){
    return(
        <div className='list'>
        {cookingList
                
        .filter((item) => item.title.toLowerCase().includes(SearchVar.toLowerCase()))
        .map((item,index)=>(
                <div className='list-item'>
                    <Remove removeList={removeList} index={index}/>
                    <h2 key={index}>{item.title}</h2>
                    <p className='list-content'>{item.content}</p>
                </div>
        ))}
        </div>
    );
}