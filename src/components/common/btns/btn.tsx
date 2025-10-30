import './index.scss'

const Button = ({type, txt, onClick}:{type?: string; txt: string;onClick:()=>void}) => {
    return ( 
        <div className={type?`btn btn--${type}`:'btn'} onClick={onClick}>
            {txt}
        </div>
     );
}
 
export default Button;