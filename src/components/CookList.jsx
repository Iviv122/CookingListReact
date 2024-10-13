export default function CookList({cookingList}){
    return(
        <>
        {cookingList.map((item,index)=>(
                <div>
                    <h2 key={index}>{item.title}</h2>
                    <p>{item.content}</p>
                </div>
        ))}
        </>
    );
}