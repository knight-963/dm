

const Page1 =()=>{

  return (
    <div>

    <div className="bg-[#C5010A] h-[400px] mt-[-100px]"><h1 className="text-white text-center text-5xl pt-[2  00px]">Kawasaki NINJA® 1100SX</h1></div>

    <div className="pt-[100px] bg-gray-100 h-[500px]">

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

export default Page1;