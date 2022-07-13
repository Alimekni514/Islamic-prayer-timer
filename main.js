let btn=document.getElementById("next1");
let search=document.querySelector(".search");
let country=document.querySelector("#country");
let city=document.querySelector("#city");
let searchbtn=document.getElementById("#searcho");
let result_box=document.querySelector(".result_box");
let exitbtn=document.getElementById("exit");
let previousres=document.getElementById("previousres");
let error_box=document.querySelector(".error_box");
let previouserror=document.getElementById("previouserror");







// search  page
btn.onclick=function() {
   search.classList.add("active"); 
}
//  go tto the result box or to the error box
searcho.onclick=function() {
   prayer();


}
// exit button 
exitbtn.onclick=function() {
    window.location.reload();
}
//previous btn for result box
previousres.onclick=function() {
    result_box.classList.remove("active");
    search.classList.add("active");
}
previouserror.onclick=function() {
    error_box.classList.remove("active");
    search.classList.add("active");
}
// function: prayer api 
async function prayer() {
    let countryvalue=country.value;
    let cityvalue=city.value;
    let datenow=new Date();
    let year=datenow.getFullYear();
    let month=datenow.getMonth()+1;
    let day=datenow.getDate();
    console.log(year);

    try {
        let mydata=await fetch(`  http://api.aladhan.com/v1/timingsByCity?city=${cityvalue}&country=${countryvalue}`);
        let mydatavalue= await mydata.json();
        let sobeh=mydatavalue.data.timings.Fajr;
        let duhur=mydatavalue.data.timings.Dhuhr;
        let asr=mydatavalue.data.timings.Asr;
        let maghreb=mydatavalue.data.timings.Maghrib;
        let asha=mydatavalue.data.timings.Isha;
        let sobehin=document.getElementById("sobeh");
        let dhoherin=document.getElementById("dhoher");
        let asrin=document.getElementById("asr");
        let maghrebin=document.getElementById("maghreb");
        let achein=document.getElementById("ache");
        let countrymod=document.querySelector(".result_box .header .title span");
        let daymod=document.querySelector(".result_box .header .day span");
        search.classList.remove("active");
        result_box.classList.add("active");
        sobehin.value=sobeh;
        dhoherin.value= duhur;
        asrin.value=asr;
        maghrebin.value=maghreb;
        achein.value=asha;
        countrymod.textContent=countryvalue;
        daymod.textContent=`${year}/${month}/${day}`;
        
    }catch(reason) {
        console.log("failed to load the data ");
        error_box.classList.add("active");

    }finally {
        console.log("terfess");
    }

   
}