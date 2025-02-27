import rufiles from '../assets/rufiles-mineral.jpg'
export const Benefit = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <h3 className='animate-left'>Why Choose Us?</h3>
                <div className="row">
                    <div className="col-md-6">
                        <p className='animate-right'>
                        We are certified professionals dedicated to providing high-quality organic minerals to
                        industries worldwide. Through our strong global supply network and strategic partnerships,
                        We ensure the seamless export of premium-grade minerals that meet international standards.
                        Our commitment to excellence guarantees reliable and sustainable solutions for all your mineral needs.
                        </p>
                        <div>
                            <button className='btn btn-success animate-up '>Contact Us</button>
                            {/* <ion-icon name="heart"></ion-icon> */}

                        </div>
                    </div>
                    <div className="col-md-6" style={{ display:'flex', justifyContent:'center'}}>
                        
                        
                        
                    </div>
                </div>
            </div>
        </section>
    )
}