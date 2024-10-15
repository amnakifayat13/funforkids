import Image from "next/image"

function About(){
    return(
        <div className="main">
            <div className="about">
            <h2 className="about-heading">About Us</h2>
            <div>
                <p>
                At <b>Fun for Kids</b> , we believe that learning and fun go hand-in-hand! Our mission is to create a safe,<br/>
                 colorful, and exciting space where kids can explore, discover, and enjoy new adventures every day.<br/>
                  From interactive games to creative activities and educational stories, we offer something special <br/>
                  for every curious mind. We are dedicated to providing a playful environment that sparks imagination,<br/>
                   builds new skills, and brings smiles to kids of all ages!
                </p>
            </div>
            </div>
            <div className="about-img">
            {/* <img src="img0005.jpeg" height={200} width={300}/> */}
                <Image src="/img16.png" alt="" width={400} height={400}/>
                
            </div>
            
            </div>
    )
}
 export default About