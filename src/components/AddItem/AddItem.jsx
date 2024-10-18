import './AddItem.css'
import {createRef} from "react";

export default function AddItem({AddList}){
    
    const titleRef = createRef();
    const contentRef = createRef();
     
    return(
    
        <div className="inputField">
            <input className="inputTitle" type="text" placeholder="Dodaj nazwe" name="title" ref={titleRef}/>
            <textarea className="inputContent" type="text" placeholder="Napisz Trescz" name="content" ref={contentRef}/>
            <button className="inputButton" onClick={(e)=> {
                const title = String(titleRef.current.value);
                const content = String(contentRef.current.value); 

                if(title && content){

                    e.preventDefault();
                    AddList(title,content);
                    console.log(title,content);

                    contentRef.current.value = "";
                    titleRef.current.value = "";               
                }
    
            }}>Dodaj</button>
        </div>
    );
}