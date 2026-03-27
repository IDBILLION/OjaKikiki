import { useState } from "react";
import { Logo } from "./Component/Logo";

export const Navbar = () => {
        const [isVisible, setIsVisible] = useState(false);
        function handleToggleVisibility() {
            setIsVisible(!isVisible); }
    return( 
        <>
        <div className="bg-blue-200 text-right ring-gray-200 rounded-xl p-10 font-semibold text-indigo-600 w-full">
<div id="nav-bar-container">
            <nav id="nav-bar" className="inline">
                <Logo size={180} className="absolute right-[25rem]"/>
                <p className="inline-flex gap-7 relative bottom-[5rem] right-[5rem]">
                    <a href="#">Home</a>
                    <a href="#" aria-expanded="false">Premium Membership</a>
                    <a href="#" aria-expanded="false">Services</a>
                    <button className="nav-item"><a href="#">Post Ads</a></button>
                    <button className="nav-item"><a href="#">Notification</a></button>
                    <button className="nav-item"><a href="#">Messages</a></button>
                    <button className="nav-item"><a href="#">My Adverts</a></button>
                    <span id="toggle-container" className="group relative w-fit">
                      <button onClick={handleToggleVisibility} aria-expanded="false">Profile</button>
                    <p id="message"></p>
                    {isVisible && <p id="message"> 
                        <button className="inline-flex absolute left-[5%] top-[5vh]" aria-label="Profile">Feedback</button>
                        <button className="inline-flex absolute left-[5%] top-[5vh]" aria-label="Profile">Ads Performance</button>
                        <button className="inline-flex absolute left-[5%] top-[5vh]" aria-label="Profile">Setting</button>
                        <button className="inline-flex absolute left-[5%] top-[5vh]" aria-label="Profile">Logout</button>
                    </p>}
                    </span>
                    </p>
            </nav>
        </div>

        </div>
        </>
    )  
}
