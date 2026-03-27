

const Footer = () => {
    return(
        <>
        <div className="bg-orange-200 grid md:grid-cols-3 lg:grid-cols-5 mt-16 p-8">
            <div>
        <ul>
            <li><b>About Us</b></li>
            <li>About Ojakikiki</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Billing Policy</li>
            <li>Candidate Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Copyright Infringement Policy</li>
        </ul>
        </div>
        <div>
        <ul>
            <li><b>Support</b></li>
            <li>Support@OjaKikiki</li>
            <li>Safety tips</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li></li>
        </ul>
        </div>
        <div>
        <ul>
            <li><b>Our App</b></li>
            <li></li>
        </ul>
        </div>
        <div>
        <ul>
            <li><b>Our resources</b></li>
            <li>Ojakikiki Facebook</li>
            <li>Ojakikiki IG</li>
            <li>Ojakikiki YT</li>
            <li>Ojakikiki X</li>
        </ul>
        </div>
            <p>&copy; {new Date().getFullYear()} OjaKikiki </p>
        </div>
        </>
    )
};

export default Footer;