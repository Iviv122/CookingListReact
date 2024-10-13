import { CgClose } from "react-icons/cg";
import './Remove.css'

export default function Remove({removeList, index}){

    return(
        <button className='Remove' onClick={()=> removeList(index)}><CgClose className="Remove-text"/></button>
    );

}