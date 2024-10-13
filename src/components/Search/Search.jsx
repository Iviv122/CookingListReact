export default function Search({searchContent}){
    return(
    <div className="SearchField">
        <input onChange={(e) => searchContent(e.target.value)}></input>
    </div>
    );
}