import './AddItem.css'
import {createRef} from "react";

export default function AddItem({AddList}){
    
    const titleRef = createRef();
    const contentRef = createRef();
     
    return(
    
        <div className="inputField">
            <input className="inputTitle" type="text" placeholder="Add Title" name="title" ref={titleRef}/>
            <textarea className="inputContent" type="text" placeholder="Add Content" name="content" ref={contentRef}/>
            <button onClick={(e)=> {
                const title = String(titleRef.current.value);
                const content = String(contentRef.current.value); 

                if(title && content){

                    e.preventDefault();
                    AddList(title,content);
                    console.log(title,content);

                }
    
            }}>Submit</button>
        </div>
    );
}