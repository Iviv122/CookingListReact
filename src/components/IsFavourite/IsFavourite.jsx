import { TiStarFullOutline } from "react-icons/ti";
import './IsFavourite.css'

export default function IsFavourite({SetFavourite, UnsetFavourite,isFav, index}){

    return(
        <button className="IsFavourite" onClick={()=>{
            if(isFav === true){ // mozna lepej?
                UnsetFavourite(index);
            }else{
                SetFavourite(index);
            }
        }
        }><TiStarFullOutline className="IsFavourite-text"
        style={{color: isFav ? 'yellow' : 'white'}} /></button> 
    );

}