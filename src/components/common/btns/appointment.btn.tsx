import whatsappClick from "../../../utils/whatsappClick";
import Button from "./btn";

const AppointmentBtn = () => {
    return ( 
        <Button
            type="primary"
            txt="записаться"
            onClick={whatsappClick}
        />
     );
}
 
export default AppointmentBtn;