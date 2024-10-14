import Image from "next/image";

export default function Home() {
  return (
    <div className="main">
      <div>
        <div>
      <Image src="/img1.png" alt="img1" width={300} height={200}/>
      </div>
      <div>
        <p>Lorem Ipsum is simply dummy text of the printing <br/>and typesetting industry.
           Lorem Ipsum has been the<br/> industry's standard dummy text ever since the 1500s,<br/> 
           when an unknown printer took a galley of type and <br/>scrambled it to make a type specimen book.<br/> 
           It has survived not only five centuries,<br/> but also the leap into electronic typesetting, <br/>
           remaining essentially unchanged.</p>
      </div>

      </div>
      <div className=" right-side-img">
        <img  src="/img7.jpeg"/>
        <img  src="/img11.jpeg"/>
         <img  src="/img10.jpeg"/>
         <img src="/img21.jpeg"/>
         <img src="/img0001.jpeg"/>
         <img src="/img24.jpeg"/>

        </div>
        </div>
  );
}
