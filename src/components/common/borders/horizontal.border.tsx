import Border from "./border";


const HorizontalBorder = ({txt}:{txt?:string}) => {
    if(!txt) return ( <Border/> );
    return ( 
        <div className="border--container">
            <p className={'border-txt'}>{txt}</p>
            <Border/> 
        </div>
    );
}
 
export default HorizontalBorder;