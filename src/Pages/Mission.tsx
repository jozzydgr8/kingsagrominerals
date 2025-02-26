import { useState } from "react";
import { Vision } from "./Vision"
import React from "react";

export const Mission = ()=>{
    return(
        <section id="mission-section">
            <div className="container-fluid">
                <h3 className="animate-left"> Our Philosophy</h3>
            <div className="row animate-right" style={{ margin:"0"}} >
                        <div className="col-md-6 backImg mis-grid " >
                            
                        </div>
                        <div className="col-md-6 article mis-grid">
                        <h4 >  Our Mission</h4>
                        <p>
                            Our mission is to therefore contribute globally the supply
                            of quality organic materials for ourselves and our environmental
                            purposes. We aim to provide exceptional services globally, ensurong excellence 
                            in every project we undertake.
                        </p>
                        
                            <Vision/>
                        
                        </div>
                    </div>
            </div>
               
                    
                    
                        
                    
        </section>
    )
}