
const Page3 =()=>{

    return (
      <div>

<div className="flex h-[700px] mt-[-100px]">



<div className="bg-[#FA3C45] w-[42%]">

  <div className="flex justify-center mt-[160px] gap-[30px] items-start">

    <a href=""><img src="LOGO.jpg" className="w-[200px] h-[200px] rounded-[50%]" alt="" /></a>

    <div className="text-white">
      <h1 className="text-3xl">Muhammad Amirxon</h1><br />
      <h1 className="text-xl">Веб-Прогроммист</h1><br />
      <div className="flex justify-start gap-[10px]"><img src="tel.svg" alt="" /><h1 className="text-xl">(95) 951 77 75</h1></div><br />
      <h1 className="text-xl">@_sma__369</h1>
    </div>

  </div>

  <div className="flex justify-center pt-[50px]"><h1 className="text-white w-[80%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h1></div>

</div>



<div className="bg-[#C5010A] w-[58%]">

    
    <div className="mt-[160px] w-[80%] ml-[80px]">

                  <h1 className="text-white text-xl">Полное имя</h1>
                  <input type="text" placeholder="Введите свое полное имя" name="text" className="w-[100%] h-[50px] p-[10px] mt-[20px] rounded-[10px] border-[2px] border-red-500" class="input"/>
                  <h1 className="text-white text-xl pt-[20px]">Адрес электронной почты</h1>
                  <input type="text" placeholder="Введите свой адрес электронной почты" name="text" className="w-[100%] h-[50px] p-[10px] mt-[20px] rounded-[10px] border-[2px] border-red-500" class="input"/>
                  <h1 className="text-white text-xl pt-[20px]">Ваши сообщения</h1>
                  <input type="text" placeholder="Введите ваши сообщения" name="text" className="w-[100%] h-[100px] p-[10px] pb-[50px] mt-[20px] rounded-[10px] border-[2px] border-red-500" class="input"/>


                  <button className="w-[180px] h-[50px] rounded-[10px] mt-[50px] border-[1px] text-white text-[12px]">Отправить сообщения</button>

                  </div>

</div>



</div>












































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

export default Page3;