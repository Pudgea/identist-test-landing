import { phoneNumber } from "../constants/infoConstants";

export default () =>{
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
}