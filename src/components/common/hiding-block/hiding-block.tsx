import type React from "react";
import { useState } from "react";

interface IHidingBlock{
    header:React.ReactNode;
    content: React.ReactNode;
}

const HidingBlock = ({header, content}:IHidingBlock) => {
    const [open, setOpen]=useState<boolean>(false)

    return ( 
        <div className="hiding-block">
            <div className="hiding-block--header">
                {header}
            </div>
            <div 
                className={
                    open?
                    "hiding-block--content--close":
                    "hiding-block--content--open"
                }
                onClick={() => setOpen(prev => !prev)}
            >
                {content}
            </div>
        </div>
     );
}
 
export default HidingBlock;