// API array of object
// [
//     {
//         id:"1",
//         name:"saleh",
//         age:"19"

//     },
//     {
//         id:"",
//         name:"ahmed",
//         age:"19"

//     }
// ]


 // Ajax

// new XMLHttpRequest()  بنشئ الطلب object

// onreadystatechange   بتراقب السيرفر وتشوف كل حاجه تمام ولا لا   true or false

// readyState
// 0: request not initialized  الطلب متعملش
// 1: server connection established فيه اتصال
// 2: request received  الطلب وصل
// 3: processing request  بيتعاملو مع الطلب  
// 4: request finished and response is ready  الرد جاهز

// status
// 200: "OK" تمام
// 403: "Forbidden" مرفوض
// 404: "Not Found" مش لاقي 

// الطبيعي بيرجع ف صورة array of object
 
// responseText	: Returns the response data as a string   بيرجع ف صورة نص

// sync  ===> متزامن  معتمد على القبله (ليك دور)

// Async ===> غير متزامن 

// js شغاله بمبدا التزامن  
// لازم ال داله ال هتجيب ال api لازم تكون غير متزامنه


 
// first task

  //  1- افضل طريقه لاكتشاف الاخطاء
(function getApi(){
    var xhttp=new XMLHttpRequest; //create request
    xhttp.onreadystatechange= function(){
if(this.status==200 && this.readyState==4){  //condition to continue
    var items =this.responseText; //string
    var result=JSON.parse(items);  //string to json (Array of object)
   


          var myText = "";
      var saleh = result.products;

      for (let i = 0; i < saleh.length; i++) {
        var cartoona = `
          <div class="col-md-4 text-center my-4 ">
            <div style="height: 250px; ">
              <img src="${saleh[i].images}" 
                   style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <h4>${saleh[i].title}</h4>
            <h5>${saleh[i].id}</h5>
            <h5>${saleh[i].price}</h5>
          </div>`;
        myText += cartoona;
      }

      document.querySelector(".test").innerHTML = myText;

 }     
}   

// لحد هنا مبعتش الريكوست

xhttp.open("GET","https://dummyjson.com/products",true);           //( "GET or POST" , "LINK API" , true or false)    true: Async  false(def):sync            شغال get بدل مش فورم فيها post
xhttp.send();
})() 




// ============================================================================================================================================================================================================================
// ============================================================================================================================================================================================================================
// ============================================================================================================================================================================================================================

// second task
// 2- fetch   then
(function getApi() {
  fetch("https://forkify-api.herokuapp.com/api/search?q=pizza")
    .then(function(items) {
      return items.json();
    })
    .then(function(result) {
      var myText = "";
      var pizza = result.recipes;

      for (let i = 0; i < pizza.length; i++) {
        var cartoona = `
          <div class="col-md-4 text-center my-4 ">
            <div style="height: 250px; ">
              <img src="${pizza[i].image_url}" 
                   style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <h4>${pizza[i].title}</h4>
            <h5>${pizza[i].publisher}</h5>
          </div>`;
        myText += cartoona;
      }

      document.querySelector(".test").innerHTML = myText;
    });
})();


// ============================================================================================================================================================================================================================
// ============================================================================================================================================================================================================================
// ============================================================================================================================================================================================================================


// task3

// 3
 (async function getApi(){
    var items= await fetch("https://jsonplaceholder.typicode.com/photos"); // awit عشان يستنى
    var result= await items.json();
    var myText="";
for(i=0; i <result.length; i++){
    var cartoona=   `
     <div class="col-md-4 text-center mb-5">
                    <img src="${result[i].url}" >
                     <h4> ${result[i].title}</h4>
                     <h5>${result[i].id}</h5>
                       </div>`;
    myText=myText+cartoona;
}
    document.querySelector(".test").innerHTML=myText;
})()