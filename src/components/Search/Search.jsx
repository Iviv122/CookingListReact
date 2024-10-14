import { FaSearch } from "react-icons/fa";
import './Search.css'

import SearchFavourite from'../SearchFavourite/SearchFavourite'

export default function Search({searchContent, searchFavouriteFunc, searchNormalFunc, isFav}){
    return(
    <div className="SearchField">
        <FaSearch className="SearchIcon"/>
        <input onChange={(e) => searchContent(e.target.value)}></input>
        <SearchFavourite searchFav={searchFavouriteFunc} searchNormal={searchNormalFunc} isFav={isFav}/>
    </div>
    );
}