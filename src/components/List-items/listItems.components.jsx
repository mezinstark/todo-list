import './listItems.styles.css';

export const ListItems =({listItem, handleChange, checked})=>{
   return(
       <>
    {listItem.map((item, index)=>{
            
        return (
            <>
            {/* <p
            className={`task-${checked[index]?"c":""}`}
            >Completed!</p>
             */}
        <div 
        className={`task-container${checked[index]?"-chkd":""}`}
        key={index}>
          <p
            className={`task-${checked[index]?"c":""}`}
            >Completed!</p>
        <ul style={{listStyle: "none"}} >
            <li>
            <label className="cb-container">
             <input
                className="cb"
                type="checkbox"
                id={index}
                name={item}
                checked={checked[index]}
                onChange={()=>{
                    handleChange(index);}}
            />
            {index+1}. {item}
            </label>
        </li>
        </ul>
        </div>
        </>
        
       
        )
    })}
    </>
   )
}