import React from "react";
import Navbar from "./navbar";
import Card from "./card";
import Jumbotron from "./jumbotron";
import Footer from "./footer";

const Home = () => {
    return(
    <div>
        <Navbar 
        logo = "HOLA"
        
        />
        <Jumbotron
         title = "A Warm Welcome"
         description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et posuere augue. Morbi semper commodo dolor, ut vulputate eros. Donec mollis, erat eget fermentum elementum, quam diam mollis urna, nec accumsan magna justo in urna. Curabitur et nibh mauris."
         buttonLabel = "Call to Action!"
         buttonUrl = "https://picsum.photos/"
        />
        <div className="card-container">
          <div className="row">
            <div className="col-3">
            <Card 
                imageSrc = "https://picsum.photos/600/400?random=1"
                title = "Foto 1"
                description = "Lorem ipsum dolor sit amet"
                buttonUrl = "https://logoipsum.com/"
                buttonLabel = "Website"
              />
            </div>
            <div className="col-3">
            <Card 
                imageSrc = "https://picsum.photos/600/400?random=2"
                title = "Foto 1"
                description = "Lorem ipsum dolor sit amet"
                buttonUrl = "https://logoipsum.com/"
                buttonLabel = "Website"
              />
            </div>
            <div className="col-3">
            <Card 
                imageSrc = "https://picsum.photos/600/400?random=3"
                title = "Foto 1"
                description = "Lorem ipsum dolor sit amet"
                buttonUrl = "https://logoipsum.com/"
                buttonLabel = "Website"
              />
            </div>
            <div className="col-3">
            <Card 
                imageSrc = "https://picsum.photos/600/400?random=4"
                title = "Foto 1"
                description = "Lorem ipsum dolor sit amet"
                buttonUrl = "https://logoipsum.com/"
                buttonLabel = "Website"
              />
            </div>
         
       
          </div>
        </div>
        <Footer 
        copyright = "Todos los derechos reservados"
        
        />
        
    </div>
    );
};

export default Home;