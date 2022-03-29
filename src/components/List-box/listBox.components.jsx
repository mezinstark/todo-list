import { useState } from "react";
import { ListItems } from "../List-items/listItems.components";
import './listBox.styles.css';

export const ListBox=({item, checkItem, handleChange})=>{

    
    // setChecked(prevValues=>[...prevValues, false]);
   
        

    // const handleChange=(position)=>{
    //     const updatedChecked=checked.map((item, index)=>
    //     index === position? !item :item
        
    //     );
    //     setChecked(updatedChecked);
    //     //console.log(checked[position])
    //     // console.log(position);
    //     // setChecked()
    // }
    
    return(
        <>
            <ListItems listItem={item} checked={checkItem} handleChange={handleChange} />
        </>
    )
}