import { useState } from "react";

export const SideMenu = () => {
     const [isVisible, setIsVisible] = useState(false);
    function handleToggleVisibility() {
        setIsVisible(!isVisible); }
        return (
            <>
            <div className="bg-blue-200 grid font-semibold inline-block gap-2 rounded-xl m-20 p-5 text-indigo-600 h-1/4">
             <div id="toggle-container" className="group relative w-fit">
            <button id="toggle-button" onClick={handleToggleVisibility}>Animal & Pet</button>
            <p id="message"></p>
            {isVisible && <p id="message">
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Pet's Accesories</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Cat & Kitten</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Dogs & Puppies</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Fish</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Birds</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Other Animals</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Pet Service</button>
                </p>}
                </div>
                 <div id="toggle-container" className="group relative w-fit">
        <button id="toggle-button" onClick={handleToggleVisibility}>Babies & Kids</button>
         <p id="message"></p>
         {isVisible && <p id="message">
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Toys, Games & Bikes</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Children's Furnitre</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Children's Clothing</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Children's Shoes</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Babies & Kids Accessories</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Baby Gear & Equipment</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Care & Feeding</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Maternity & Pregnancy</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Transport & Safety</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Playground Equipment</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Child Care & Education</button>
            </p>}
            </div>
             <div id="toggle-container" className="group relative w-fit">
            <button id="toggle-button" onClick={handleToggleVisibility}>Property</button>
            <p id="message"></p>
            {isVisible && <p id="message">
                        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">New Builds</button>
                        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Houses & Apartment For Rent</button>
                        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Houses & Apartment For Sale</button>
                        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Short Let</button>
                        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Land & Plots For Sale</button>
                        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Land & Plots For Rent</button>
                        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Events Centers, Venues & Workstations</button>
                        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Commercial Property For Sale</button>
                        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Commercial Property For Rent</button>
                    </p>}
                    </div>
                    <div id="toggle-container" className="group relative w-fit">
<button id="toggle-button" onClick={handleToggleVisibility}>Beauty Personal & Care</button>
<p id="message"></p>
{isVisible && <p id="message">
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Hair Beauty</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Face Care</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Oral Care</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Beauty Care</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Fragrance</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Makeup</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Sexual Wellness</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Tools & Accessories</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Vitamins & Supplements</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Massagers</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Health & Beauty Services</button>
    </p>}
    </div>
    <div id="toggle-container" className="group relative w-fit">
         <button id="toggle-button" onClick={handleToggleVisibility}>Commercial Equipment & Tools</button>
            <p id="message"></p>
                {isVisible && <p id="message">
                    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Medical Equipment & Supplies</button>
                    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Safety Equipment & Protective Gear</button>
                    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Manufacturing Equipemt</button>
                    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Manufacturing Materials & Supplies</button>
                    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Retail & Store Equipment</button>
                    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Restaurant & Catering Equipment</button>
                    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Stationary & Office Equipment</button>
                    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Salon & Beauty Equipment</button>
                    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Printing & Graphics Equipment</button>
                    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Stage & Event Equipment</button>
                    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Manufacturing Services</button></p>}
                    </div>
                     <div id="toggle-container" className="group relative w-fit">
        <button id="toggle-button" onClick={handleToggleVisibility}>Electronics</button>
        <p id="message"></p>
        {isVisible && <p id="message"><button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Laptops & Computers</button>
        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">TV & DVD Equipment</button>
        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Video Game Console</button>
        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Audio & Music Equipment</button>
        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Headphones</button>
        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Photo & Video Cameras</button>
        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Security & Suveillance</button>
        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Network Products</button>
        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Printers & Scanners</button>
        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Computer Monitors</button>
        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Computer Hardware</button>
        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Computer Accesories</button>
        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Accessories & supplies of Electronics</button>
        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Video Games</button>
        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Software</button>
        </p>}
        </div>
          <div id="toggle-container" className="group relative w-fit">
        <button id="toggle-button" onClick={handleToggleVisibility}>Fashion</button>
        <p id="message"></p>
{isVisible && <p id="message">
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Men's Fashion</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Women's Fashion</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Baby & Kids Fashion</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Hot Granny Fashion</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Hot Grandpa Fashion</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2"></button></p>}
    </div>
     <div id="toggle-container" className="group relative w-fit">
            <button id="toggle-button" onClick={handleToggleVisibility}>Food Agriculture & Farming</button>
            <p id="message"></p>
            {isVisible && <p id="message">
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Food & Beverages</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Farm Animal</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Feeds, Supplements & Seeds</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Farm Machinery & Equipment</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Farm Animal Feeds & Supplements</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Farm Services</button>
                </p>}
                </div>
                <div id="toggle-container" className="group relative w-fit">
         <button id="toggle-button" onClick={handleToggleVisibility}>Home Furniture & Appliances</button>
         <p id="message"></p>
         {isVisible && <p id="message">
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Furniture</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Lightning</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Storage & Organization</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Home Accessories</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Home Appliances</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Kitchen Appliances</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Kitchenware & Cookware</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Household Chemicals</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Garden Supplies</button>
            </p>}
            </div>
             <div id="toggle-container" className="group relative w-fit">
         <button id="toggle-button" onClick={handleToggleVisibility}>Job</button>
            <p id="message"></p>
            {isVisible && <p id="message">
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Advertising & Marketing Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Accounting & Finance Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Arts & Entertainment Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Childcare & Babysitting Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Clerical & Administrative Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Computing & IT Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Constructing & Skilled Trade Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Consulting & Startegy Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Customer Service Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Driver Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Engineering & Architechtural Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Farming & Vertinery Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Gardening & Landscapping Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Health & Beauty Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Healthcare & Nursing Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Htoel Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Housekeeping & Cleaning Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Human Resources Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Intenship Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Legal Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Logistics & Transportation Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Manual Labour Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Manufacturing Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Mining Industry Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Office Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Partime & Weekend Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Quabuttonty Control & Assurance job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Research & Survey Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Restaurant & Bar Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Retail Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Sales & Telemarketing Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Security Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Sport Club Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Teaching job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Technology Job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Travel & Tourism job</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Other Job</button></p>}
                </div>
                 <div id="toggle-container" className="group relative w-fit">
        <button id="toggle-button" onClick={handleToggleVisibility}>Leisure And Activities</button>
         <p id="message"></p>
         {isVisible && <p id="message">
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Sports Equipment</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Massager</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Musical Instrument & Gear</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Books & Table Game</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Arts, Crafts & Award</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Outdoor Gear</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Smoking Accesories</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Music & Video</button>
            <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Fitness & Personal Training Services</button>
            </p>}
            </div>
             <div id="toggle-container" className="group relative w-fit">
        <button id="toggle-button" onClick={handleToggleVisibility}>Mobile Phones & Tablet</button>
        <p id="message"></p>
        {isVisible && <p id="message"><button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Mobile Phones</button>
        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Accessories For Phones & Tablet</button>
        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Smart Watches</button>
        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Tablet</button> 
        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Watches</button></p>}
        </div>
        <div id="toggle-container" className="group relative w-fit">
         <button id="toggle-button" onClick={handleToggleVisibility}>Repair & Construction</button>
            <p id="message"></p>
            {isVisible && <p id="message">
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Electrical Equipment</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Building Materials & Suppbuttones</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Plumbing & Wtaer System</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Electrical Hand ToolsHand Tools</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Measuring & Testing Tools</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Hardware & Fasteners</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Door & Security</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Windows & Glass</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Other Repair & Construction Item</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Buiding & Trade Service</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Repair Service</button>
                <button className="hidden group-hover:flex mt-2 bg-white shadow p-2"></button></p>}
                </div>
                <div id="toggle-container" className="group relative w-fit">
    <button id="toggle-button" onClick={handleToggleVisibility}>Services</button>
    <p id="message"></p>
{isVisible && <p id="message">
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Buiding & Trades Services</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Car Services</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Computer & IT Services</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Repair Services</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Cleaning Services</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Printing Services</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Manufacturing Services</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Logistics Services</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Legal Services</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Tax & Financial Services</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Valuation Services</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Recuitment Services</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Rental Services</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Chaffeur & Airport Transfer Services</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Travel Agent & Tours</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">CXlasses & Course</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Child Care & Educational Services</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Health & Beauty Service</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Fitness & Personal Traning Service </button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Party, Catering  & Event Service</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">DJ & Entertainment Service</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Wedding Venues & Services</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Photigraphy & Video Services</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Landscaping & Gardening Service</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Pet Srervice</button>
    <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Other Service</button></p>}
    </div>
    <div id="toggle-container" className="group relative w-fit">
                 <button id="toggle-button" onClick={handleToggleVisibility}>Vehicles</button>
                <p id="message"></p>
                {isVisible && <p id="message"><button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Vehicles part & Accessories</button>
                        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Cars</button>
                        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Scooters & Motorcycle</button>
                        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Buses & MicroBuses</button>
                        <button className="hidden group-hover:flex mt-2 bg-white shadow p-2">Trucks & Trailer</button></p>}
                        </div>
                        </div>
                </>
        )
}