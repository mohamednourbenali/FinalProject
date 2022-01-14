import React from 'react'

const Footer = () => {
    return (
        <div style={{backgroundColor:"black",display:"flex",justifyContent:"space-around"}}>
            <hr/>
            <div>
                <h1 style={{color:"red"}}>Bö-SPORT</h1>
                
            </div>
            <div>
                <h1 style={{color:"green"}}>Bö-SPORT</h1>
            </div>
            <div>
                <h1 style={{color:"#0082cb"}}>Bö-SPORT</h1>
                <div style={{flexDirection:"column"}}>
                    <a href="/" style={{textDecoration:"none"}}>A propos</a><br/>
                    <a href="/" style={{textDecoration:"none"}}>Reclamation</a><br/>
                    <a href="/" style={{textDecoration:"none"}}>FAQ</a><br/>
                </div>
            </div>
            <div>
                <h1 style={{color:"yellow"}}>Bö-SPORT</h1>
            </div>
            
        </div>
    )
}

export default Footer
