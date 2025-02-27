import mineralVid from '../assets/limonite-video.mp4'
export const Benefit = ()=>{
    return(
        <section>
            <div className="container-fluid">
                
                <div className="row" style={{display:'flex', alignItems:'center'}}>
                    <div className="col-md-6">
                    <h3 className='animate-left'>Why Choose Us?</h3>
                        <p className='animate-right'>
                        We are certified professionals dedicated to providing high-quality organic minerals to
                        industries worldwide. Through our strong global supply network and strategic partnerships,
                        We ensure the seamless export of premium-grade minerals that meet international standards.
                        Our commitment to excellence guarantees reliable and sustainable solutions for all your mineral needs.
                        </p>
                        <div>
                            <button className='btn btn-success animate-up '><a href='tel:08056008168'>Contact Us</a></button>
                            {/* <ion-icon name="heart"></ion-icon> */}

                        </div>
                        <br/>
                    </div>
                    
                    <div className="col-md-6" style={{display:'flex', justifyContent:'center'}}>
                        
                    <video className="hover animate-right" width="320" height="240" autoPlay loop controls muted>
                        <source className="vid" src ={mineralVid}
                        type="video/mp4"/>
                    </video>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}