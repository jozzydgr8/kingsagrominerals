import { useEffect } from "react"

export const Header = ()=>{
    useEffect(()=>{
        var container = document.querySelector('.headerWrite');
        var containerButton = document.querySelector('.headerbutton');
        container?.classList.add('sectionAnimationDown');
        containerButton?.classList.add('sectionAnimationUp')
    },[])
    return(
        <section id="headerSection">
            <div className="container-fluid backdrop" style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
                <h1 className="headerWrite">
                    Premium Solid Minerals, Global Reach.
                    Supplying the World's Best solid Minerals
                    with Unmatched Quality & Reliability
                </h1>
                <div className="headerbutton"><button className="btn btn-success btn-lg "> <a href="tel:08056008168">Contact Us</a></button></div>
            </div>
        </section>
    )
}