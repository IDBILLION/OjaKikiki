import { useState} from "react"


export const ToggleApp = () => {
    const [isVisible, setIsVisible] = useState(false);
    function handleToggleVisibility() {
        setIsVisible(!isVisible);
       
    }
return(
    <div id="toggle-container">
<button id="toggle-button" onClick={handleToggleVisibility}>Message</button>
<p id="message"></p>
{isVisible && <p id="message">I love freeCodeCamp!</p>}
    </div>
)
};