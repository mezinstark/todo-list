import { useState } from "react";
import { ListBox } from "../List-box/listBox.components";
import './textField.styles.css'


export function TextField({item, checkItem, addItem, handleChange}) {
    let active=false;
    return (
        <>
            <form onSubmit={addItem} className="form-container">
                <input
                    className="text-f"
                    type="text"
                    name="item"
                    placeholder="Add your Task here..." 
                    />
                <input 
                className="btn-f"
                type="submit" 
                value="Add Task"/>
            </form>
        {item.length>0?active=true:active=false}
        <p className={`header-${active?"active":""}`}>My Tasks:</p>
        <ListBox 
        item={item}
        checkItem={checkItem}
        handleChange={handleChange}

         />
        </>

    );
}
