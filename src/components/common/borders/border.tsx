import './index.scss'

const Border = ({type = 'horizontal'}:{type?:string}) => {
    return (
        <div className={`border border--${type}`}/> 
    );
}
 
export default Border;