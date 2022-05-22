import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import LocationsS1 from "../components/locations-s1";
import LocationsS2 from "../components/locations-s2";

class Locations extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <LocationsS1/>
                <LocationsS2/>
            </Container>    
        );
    }
}

export default Locations;