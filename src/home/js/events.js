import {showBtn} from "./dom";
import {showBtnMethod} from "./methods";

const events = () => {
    showBtn.addEventListener('click' , showBtnMethod );
}

export default events;