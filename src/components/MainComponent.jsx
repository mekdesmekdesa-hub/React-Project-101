import { Phone, Mail, MapPin } from "lucide-react";
function MainComponent() {
    return (
        <main className="main-component">
            <div className="name-container">
                <h2>Mekdes M.</h2>
                <div className="title-container">
                    <h3>Frontend Developer</h3>
                    <div className="line"></div>
                </div>
                
            </div>
            
            <div className="contact-container">
                <ul>
                    <li >
                       <Phone className="phone-icon"/>
                        <span>+251 93 152 1741</span>
                    </li>
                    <li>
                        <Mail className="mail-icon" />
                        <span>mekdesmekdesa@gmail.com</span>
                    </li>   
                    <li>
                        <MapPin className="map-pin-icon" />
                        <span>Addis Ababa, Ethiopia</span>
                    </li>
                </ul>
            </div>
           
        </main>
        
    )
}

export default MainComponent;
