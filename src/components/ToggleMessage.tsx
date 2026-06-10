import { useState } from "react";

export default function ToggleMessage() {
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(show ? false : true);
    return(
        <div>
            {show && <p>Hello World</p>}
            <button onClick={handleToggle}>Toggle</button>
        </div>
    )
}