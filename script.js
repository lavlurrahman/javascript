

console.log("ok");

// let i=1;
// while (i<33) {
//     console.log(i)
//     i++;
// }
// for (let i = 1; i <22 ; i++) {
//    if (i%2==0) {
//     console.log(i);
    
//    }
    
// }

//  let i=1;
//  while (i<16) {
//      if (i%2==1) {
//           console.log(i); 
//      }
//  i++;
//  }

// for (let i=1; i<11; i++){
//     console.log(`5*${i}=${5*i}`);
// }
// let  sum = 0;
// for (let i =1; i <101; i++){
//        sum=sum+i;
// }
// console.log(sum);


// for (let i=1; i<101 ; i++){
//     console.log(i)
//     if (i%7===0) {
//         break ;
//     }
// }
// function abcd(){
//     return 13;
// }

// let val =abcd()
// console.log(val);

// function lolo() {
//     console.log("Happy New Year");
// }
// lolo();

// function dance(v1){
//     console.log(`${v1}  is a beautiful country`);
// }
// dance("Bangladesh");
// dance("Bangladesh");
//  function sayHi(ghuest="hi" ){
// console.log("hi", ghuest)
//  }
//  sayHi("Lavlu")
//  function name(params) {
    
//  }

// function bmi(weight,height) {
//     return weight/(height*height);
// }
// console.log(bmi(70,6).toFixed(2));

//  function checkAge(age) {
//     if (age<27) 
//        return"too young";
//    return "adult"
//  }
//   console.log(checkAge(32));

// function calculator(money) {
//     let discount =0;
//     if (money===500) {
//        dis=money+100;
//     } 
//     return dis;
// }
// console.log(calculator(500);
// function double(val) {
//     return val*2
// }
// console.log(double(7))
// const calculator = (money) =>> money === 500 ? money + 100 : 0;
//  const calculator =(money)=>money ===500? money+200:0
//   console.log (calculator(500));
// let ary =[23,45,45,67,755,856,90];
//   console.log (ary[4]=300);
//   console.log (ary);

// let num =[1,2,3,4];
// num.push(5);
// num.pop(5);
// num.shift(1);
// num.unshift(1);
// console.log(num);
// const fruits = ["Apple", "Banana", "Mango", "Pineapple"];
// const sliced = fruits.slice(2, 3); 
// console.log(sliced);
// const items =["ADF", "DEF", "RTE" ,"BDE"];
// console.log(items.sort());
// console.log(items.slice(0,3))
// console.log(items.reverse());

// let arr =[3,45,6,87,48,65,7,4,36,78,46];
//  let newArr=arr.filter((val)=>
// {
// return  val >29;
// }
// );
// console.log(newArr)

    // let countries=["USA","UK"];
    // add=[  "Bangladesh",...countries];
    // console.log(add)

//     let name ="Name";
  
//   name="ok"
// console.log(name);

// const sum =(a,b,c)=>{
    //  const  add=a+b+c;
    // console.log(add)
//         const add =a+b+c;
//         return add;
// }
//   const ok=sum(1,5,3);
//   console.log(ok)

// const numbers=[12,34,5,6];
// const add =[12,45,67];
// console.log(...numbers,...add );

// const friends =["Hero Alom","Hena","Himu"];
// const [F1,F3,F2] = friends;
// console.log(F3);
// const person = {
//   name: "Himu",
//   age: 22,
//   friends: ["Hero Alom", "Hena", "Hasan"]
// };
// const {name,age,friends}=person ;
// console.log(friends[1])

// if (0) {
//   console.log("This is truthy");
// } else {
//   console.log("This is falsy");
// }

// const  test ="Tmimm";
// test ? console.log("true"): console.log("This is falsy");

// const num="20";
//   const num1= (num>=20 && num %2===0)
//   ?console.log("true"): console.log("This is fals");
//  const handleAdd=()=>{
//      const name =document.getElementById("name").value;
//       console.log(name);
//   localStorage.setItem("name",name)
//  const data ={id,name};
//  localStorage.setItem(data,JSON.stringify(data))

//  }

// var a = document.querySelector("h1")
// a.innerText="ok"
// a.style.color="red"
// a.style.background="green"

// a.addEventListener( "click", function () {
//  console.log("ENGLAND")  
// a.style.color="green"
// a.style.background="red"
// a.innerHTML=" BD is a beautiful country"
// })

// function changeText() {
//    document.getElementById("ok");
//   a.innerText = "Welcome to Bangladesh!";
// }
// var bulb =document.querySelector("#ok");
// var btn =document.querySelector("button");

//   var  lal =0;
// btn.addEventListener("click",
//    function name(params) {
// if (lal==0) {
//     bulb.style.color = "black";
//      bulb.style.background = "red";
//      bulb.style.fontSize="100px";
// lal=1;
// }
// else{
//     bulb.style.background = "yellow";
//      bulb.style.fontSize="40px";
//      lal=0;
// }
//    }
// );
// //APPENCHILD
// const container = document.getElementById('container');
//     const button = document.getElementById('addBtn');

//     button.addEventListener('click', () => {
//       const newPara = document.createElement('p');
//       newPara.textContent = " Thanks Add me";
//       container.appendChild(newPara);
//     });


//APPENCHILD
// var bulb = document.querySelector("#bulb")
// var btn = document.querySelector("button")
//  var flag = 0
//      btn.addEventListener("click",function () {
//  if (flag==0) {
//      bulb.style.background="yellow"
//      flag=1
//  } else {
//     bulb.style.background="red"
//      flag=0
//  }
//  })
// let abcd = document.querySelector("#abcd",)
//    abcd.innerText="ok"
// abcd.style.color="red"
//  abcd.style.background="green"
// let B = document.getElementById("A");
//  B.style.color="red"
// console.dir(B)
// console.log("B")
    // B.innerHTML="<p>Thanks</p>";
// let link = document.getElementById("downloadLink");
// link.setAttribute("href", "https://www.google.com");

// let img = document.querySelector("img")
// img.setAttribute("src","https://images.unsplash.com/photo-1754404053324-8f910c2b7e2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")


// let b =document.querySelector("a")

// b.setAttribute("href","https://www.youtube.com/watch?v=1aR7tcmWo_w&list=PPSV")


//  let a = document.querySelector("a")
// console.log( a.getAttribute("href"))


// let a = document.querySelector("a")
//  a.removeAttribute("href")

// let h1 =  document.createElement("h1");
// h1.textContent ="WELLCOME TO USA"
// console.log(h1);
// document.querySelector("body").prepend(h1);
// document.querySelector("body").appendChild(h1);

// let h1 = document.createElement("p");
// h1.textContent = "Bangladesh is a beautifull country";
// document.querySelector("div").prepend(h1)

//  let b= document.querySelector("h3");
// b.style.color="red";


 
//  let h = document.querySelector("h1");
//  h.innerText="Tik acha " ;


//   let d = document.getElementsByClassName(".b")
// console.log(d)
 
// let  d = document.querySelector("#h1")
// d.addEventListener("click",function () {
//     d.textContent="Bangladesh"
// })


// let b = document.querySelectorAll(".buy-now")
//  b.forEach((btn) => {
//       btn.style.color = "white"; 
//       btn.style.background="green"
//       btn.style.fontSize = "25px";
//       btn.addEventListener("click",function () {
//     alert(" SUCCESSFUL")
//     });
// })


// 

// let img = document.createElement("img");
// img.setAttribute(
//     "src", "https://images.unsplash.com/photo-1658226500474-9a01f528a93b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
// );

// img.classList.add("placeholder")
// document.querySelector("div").prepend(img)

// let b= document.getElementById("a")
//  b.removeAttribute("id");
// b.remove()



// 08/09/2025

// p.forEach(function (elem)) {
//     elem.style.fontSize ="30px"
// }) 

// let p = document.querySelectorAll("p");
// p.forEach(function name(elem) {
//    elem.style.fontSize ="30px"
//    elem.style.color ="green"
// })

// let p1 = document.querySelectorAll("h2");
// p1.forEach(function name(elem1) {
//    elem1.style.fontSize ="40px"
//    elem1.style.color ="red"
// })

//  let  h = document.querySelector("h1")
//   h.addEventListener("dblclick",function name(params) {
//      h.style.color ="red"
//   })


// Event listener যোগ করা
// btn.addEventListener("dblclick", sayHello);

// const  p = document.getElementsByName("p")
// const p= document.querySelector("p");

// function bd() {
//     p.innerHTML="<h1> BANGLADESH</h1>"
// }
//  p.addEventListener("click", bd);


//  let  h = document.querySelector("h1")

//  function h1() {
//      h.style.color ="red"
//  }
// h.addEventListener("click",h1)
//  h.removeEventListener("click",h1)

// let input= document.querySelector("input");
// input.addEventListener("input",function name(dets) {
//     if (dets.data !== null) {
//          console.log(dets.data)
//     }
// })

//  let sel  =document.querySelector("select");
//  let  device = document.querySelector("#device");
//  sel.addEventListener("change",function (dets) {
//     device.textContent= `${dets.target.value} device selected `;
//  }) 


// let mouse = document.querySelector("#ID");
//  mouse.addEventListener("mouseover",function() {
//    mouse.style.background="green"  
// })


//  mouse.addEventListener("mouseout",function() {
//    mouse.style.background="red"  
// })

// let mouse = document.querySelector("#ID");

// mouse.addEventListener("mouseover", function() {
//   mouse.style.background = "green";
// });

// mouse.addEventListener("mouseout", function() {
//   mouse.style.background = "red";
// });


// CHANGE
// let  food =document.querySelector("#food")
// let sel  =  document.querySelector("select");
// sel.addEventListener("change",function (dets) {
//     food.textContent=`${dets.target.value} thank you`
    // console.log(dets.target.value);
// }) 
//    let h1 = document.querySelector("h1")
//    window.addEventListener("keydown",function (dets) {
    
// if (dets.key === "") {  

   
//      h1.textContent="SPC"
// }

// else {
//      h1.textContent=dets.key
// }
//      console.log(dets)
//      h1.textContent=dets.key
//    })

//    let btn = document.querySelector("#btn")
// let fileinp =document.querySelector("#fileinp")
//    btn.addEventListener("click", function () {
//     fileinp.click()
//    })

//    fileinp.addEventListener("change",function (dets) {
//      const file = dets.target.files[0];
//      if (file) {

//           btn.textContent=file.name
//      }
 
//    })


        // ফর্ম সিলেক্ট করা
        // let form = document.getElementById("myForm");
        // let output = document.getElementById("output");
        // let profile =document.getElementById("profile");

        // submit ইভেন্ট যোগ করা
        // form.addEventListener("submit", function(event) {
        //     event.preventDefault(); // পেজ রিফ্রেশ বন্ধ

            // ইনপুট ভ্যালু গুলো নেওয়া
        //     let name = form.name.value;
        //     let age = form.age.value;
        //     let email = form.email.value;
        //   let photoFile = form.photo.files[0];

        //     let imgURL = photoFile ? URL.createObjectURL(photoFile) : "";
 


            // আউটপুট দেখানো
//             output.innerHTML = `
//                 <h3>আপনার দেওয়া তথ্য:</h3>
//                 <p><b>নাম:</b> ${name}</p>
//                 <p><b>বয়স:</b> ${age}</p>
//                 <p><b>ইমেইল:</b> ${email}</p>
//  ${imgURL ? `<img src="${imgURL}" alt="প্রোফাইল ছবি"  class="photo">` : ""}
//             `;
//         });


// br
// const use = [
//     { name: "Lavlu", age: 23 },
//     { name: "Abdullah", age: 30 }
// ];

// function showUser() {
//     use.forEach(user => {
//         console.log(`Name: ${user.name}, Age: ${user.age}, Next Year Age: ${user.age + 1}`);
//     });
// }

// showUser();


