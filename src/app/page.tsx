import Image from "next/image";

export default function Home() {
  return (
    <div className="main">
      <div>
        <div className="img1">
      <Image src="/img1.png" alt="img1" width={300} height={200}/>
      </div>
      <div>
        <p className="p1">
       <b>Welcome</b>  to the world of fun and adventure! Here,<br/>
         every click brings you closer to exciting games,<br/>
          colorful stories, and cool surprises. Whether <br/>
          you love puzzles, drawing, or exploring, there’s<br/>
           something for every curious mind. Get ready to<br/> 
           laugh, learn, and play your way through a day <br/>
           filled with imagination. Let’s jump into the<br/> 
           fun together!
        </p>
      </div>

      </div>
      <div className=" right-side-img">
        <Image  src="/img7.jpeg" alt="" width={250} height={250}/>
        <Image  src="/img18.jpeg" alt="" width={250} height={250}/>
         <Image  src="/img10.jpeg" alt="" width={250} height={250}/>
         <Image src="/img21.jpeg" alt="" width={250} height={250}/>
         <Image src="/img26.jpeg" alt="" width={250} height={250}/>
         <Image src="/img24.jpeg" alt="" width={250} height={250}/>

        </div>
        </div>
  );
}
