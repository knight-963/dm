import Link from "next/link";

const Page2 =()=>{

    return (
      <div>

      <div className="bg-[#C5010A] h-[400px] mt-[-100px]"><h1 className="text-white text-center text-5xl pt-[200px]">Бренды</h1></div>
 


      <div className="flex justify-center gap-[50px] mt-[200px]">
      <div className="flex w-[700px] h-[150px] rounded-[12px] border-[5px] border-[#ff0000] justify-center  items-center  gap-[30px]"><Link href="/Kawasaki"><img src="lg-1.png" className="lg h-[180px] mt-[10px]" alt="" /></Link><a href="" className="text-6xl">-</a><Link href="/Kawasaki" className="text-5xl">KAWASAKI</Link></div>
       <div className="flex items-center gap-[30px]"><div className=" w-[700px] h-[150px] rounded-[12px] border-[5px] border-[#ff0000] flex justify-center items-center gap-[50px]"><a href="" className="text-5xl">SUZUKI</a><a href="" className="text-6xl">-</a><a href=""><img src="lg-2.png" className="lg h-[100px]" alt="" /></a></div></div>
      </div>


      <div className="flex justify-center mt-[150px]">
      <div className="flex w-[700px] h-[150px] rounded-[12px] border-[5px] border-[#ff0000] justify-center items-center gap-[80px]"><a href=""><img src="lg-3.png" className="lg h-[100px]" alt="" /></a><a href="" className="text-6xl">-</a><a href="" className="text-5xl">HONDA</a></div>
      </div>
 
      
      <div className="flex justify-center gap-[50px] mt-[150px]">
      <div className="flex items-center gap-[30px]"><div className=" w-[700px] h-[150px] rounded-[12px] border-[5px] border-[#ff0000] flex justify-center items-center gap-[50px]"><a href="" className="text-5xl ml-[30px]">BMW</a><a href="" className="text-6xl">-</a><a href=""><img src="lg-4.png" className="lg h-[120px]" alt="" /></a></div></div>
       <div className="flex w-[700px] h-[150px] rounded-[12px] border-[5px] border-[#ff0000] justify-center items-center gap-[80px]"><a href=""><img src="lg-5.png" className="lg h-[60px]" alt="" /></a><a href="" className="text-6xl">-</a><a href="" className="text-5xl">APRILIA</a></div>
      </div>
       
      
      <div className="flex justify-center mt-[150px]"><div className="flex items-center gap-[30px]"><div className=" w-[700px] h-[150px] rounded-[12px] border-[5px] border-[#ff0000] flex justify-center items-center gap-[50px]"><a href="" className="text-5xl">KTM</a><a href="" className="text-6xl">-</a><a href=""><img src="lg-6.png" className="lg h-[80px]" alt="" /></a></div></div></div>
















      <div className="pt-[100px] mt-[200px] bg-gray-100 h-[500px]">

<h1 className="text-center text-5xl pt-[50px]">Bizning yangiliklar xatimizga obuna bo'ling</h1>

<h1 className="text-center text-xl text-gray-500 pt-[50px]">Siz bizning yangiliklar xatimizni o'qib, bepul bilim olishingiz mumkin</h1>

<div className="flex justify-center pt-[50px] gap-[100px]">

  <div className="flex justify-center gap-[40px] items-center">

<div class="form__group field">
<input type="input" class="form__field" placeholder="Name" required=""></input>
<label for="name" class="form__label">Name</label>
</div>
 
  </div>

  <div className="flex justify-center gap-[100px] items-center">

<div class="form__group field">
<input type="input" class="form__field" placeholder="Name" required=""></input>
<label for="name" class="form__label">Your Email</label>
</div>

<button className="w-[150px] h-[50px] rounded-[10px] text-white bg-[#FA3C45]">Obuna bo'lish</button>

 

  </div>



</div>

</div>

</div>
);
}

export default Page2;