import React,{useState} from 'react';
import { Button,Modal,Form,Col,Row } from 'react-bootstrap';
import Picture from './pic5.jpg';

const Three = () => {
    const [poids,setPoids]=useState();
    const [taille,setTaille]=useState();
    const handleSubmit=()=>{
        console.log("taille",taille);
        console.log("poids",poids);
        if (poids==0) { alert("veuillez fournir un poids valide")}
        else if (taille==0) { alert("veuillez fournir une taille")}
        const imc = poids /((taille/100)*(taille/100));
        console.log("imc ",imc);
        if(imc << 18.5){alert (`votre IMC ${imc}, Vous avez quelques kilos en plus`)}
        else if((imc>=18.5)||(imc<=24.9)){alert("votre IMC ",imc," Vous avez des mesures idéales")}
        else{alert("votre IMC ",imc," Vous avez quelques kilos en plus")}
    }
    return (
        <div style={{display:"flex",backgroundColor:"#DAD5D4"}}>
            <div style={{alignSelf:"center"}}>
                <h1 style={{color:"#0082cb"}}>Calculez votre IMC</h1>
                <p>Calculez votre indice de masse corporel (IMC) et découvrez votre poids idéal !© </p>
                <Form style={{marginTop:"50px"}}>
                    <Row className="g-2">
                        <Col md>
                            <Form.Control name="taille" type="text" placeholder="Taille/cm" onChange={(e)=>setTaille(e.target.value)} />
                        </Col>
                        <Col md>
                            <Form.Control name="poids" type="text" placeholder="Poids/kg" onChange={(e)=>setPoids(e.target.value)} />
                        </Col>
                    </Row>
                    <Row className="g-2">
                        <Col md>
                            <Form.Control name="age" type="text" placeholder="Age" />
                        </Col>
                        <Col md>
                        <Form.Select aria-label="Default select example">
                            <option>SEXE</option>
                            <option value="Homme">Homme</option>
                            <option value="Femme">Femme</option>
                        </Form.Select>
                        </Col>
                    </Row>
                    <Button variant="primary" style={{marginTop:"20px"}} onClick={handleSubmit}>CALCULER</Button>
                </Form>
            </div>
            <div style={{marginLeft:"250px"}}>
                <img src={Picture}/>
            </div>
        </div>
    )
}

export default Three
