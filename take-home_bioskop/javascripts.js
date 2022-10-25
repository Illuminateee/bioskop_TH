
// let myTicket = Number(document.getElementById("tiket").value);
// localStorage.setItem('myTiket',myTicket);

// function bookNow (){
// const harga_tiket = 15000;
// let total = myTicket * harga_tiket;

// console.log(total);
// }


const seats = document.querySelectorAll(".seat");
const harga_tiket = 15000

seats.forEach(seats => {
    const tiket = document.getElementById('tiket').value;
    if(seats.classList.contains("seat") && (!seats.classList.contains("serve") || !seats.classList.contains("none"))){
        

            seats.addEventListener('click', tekan);
        
    }
    
})



function tekan(e) {
    const cell = e.target;
    cell.style = "background-color: green";
    console.log("target");
}

function myTiket(){
    const tiket = document.getElementById('tiket').value;
    const total = tiket * harga_tiket;
   

    if(tiket > 0 && tiket <= 9 ){
        const tampilan = document.querySelector('#total');
        tampilan.innerHTML = total;
    }else{
        alert("invalid input");
    }
   
   
    return tiket;
}

function hover(){
    const cell = e.target;
    cell.style = "background-color: blue";
    console.log("hover");
}

function bookNow(){
    const tiket = myTiket();
    const total = tiket * harga_tiket;
    const tampilan = document.querySelector('#total');
    tampilan.innerHTML = total;
    const cell = document.querySelectorAll(".seat[style='background-color: green;']");
    cell.forEach(cel => {
        cel.style = "background-color: red";
    })
    
   if(tiket > 0 && tiket <=9){
    alert(`Pemesanan anda untuk ${tiket} buah tiket berhasil dilakukan\nTotal yang harus dibayar sebesar ${total}`);
   }else{
    alert("invalid input");
   }
    
    
    
    
    
}

// function serve(e){
//     const cell = e.target;
//     cell.style = "background-color: red";
// }