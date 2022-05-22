import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import PricesS1 from "../components/prices-s1";
import PricesS2 from "../components/prices-s2";
import PricesS3 from "../components/prices-s3";

class Prices extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <PricesS1/>
                <PricesS2/>
                <PricesS3/>
            </Container>    
        );
    }
}

export default Prices;
