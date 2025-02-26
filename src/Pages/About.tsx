import { Product } from "./Product"

export const About = ()=>{
    return(
        <section>
            <div className="container-fluid" style={{textAlign:'center'}}>
            <h3 className="animate-down">About</h3>
            <div className="afterclass"></div> <br/>
               
                        
                        <p>
                            Kingsagrominerals Co. Ltd supply the top solid minerals
                            and metals. We are highly equipped with supply of 
                            different minerals you need. We are certified, professional 
                            and unbeatable in Agro minerals. 
                            Your business is sure on track with Kingsagrominerals Co. Ltd.
                        </p>
               
               <Product/>
            </div>
        </section>
    )
}