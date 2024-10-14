import { TiStarFullOutline } from "react-icons/ti";
import './SearchFavourite.css';

export default function SearchFavourite({searchFav , searchNormal ,isFav}){
    return(
    <button className="searchFav" onClick={()=>{ // mozna lepej...
        console.log(isFav);
        if(isFav){
            searchNormal();
        }else{
            searchFav();
        }
    }}>
    <TiStarFullOutline  className="searchText" style={{color: isFav ? 'yellow' : 'white'}}/>
    </button> 

    );
}