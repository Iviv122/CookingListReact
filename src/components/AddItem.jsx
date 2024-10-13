import {createRef} from "react";

export default function AddItem({AddList}){
    
    const titleRef = createRef();
     
    return(
    
        <>
            <input type="text" placeholder="Add Title" name="title" ref={titleRef}/>
            <input type="text" placeholder="Add Content" name="content"/>
            <button onClick={(e)=> {
                const title = String(titleRef.current.value);
                AddList(title,e.target.previousSibling.value);
                console.log(title,e.target.previousSibling.value);
                }}>Submit</button>
        </>
    );
}