// Slider Gambar
let counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 4000);


// // Contact Us


let nama = document.getElementById("name-pengirim");
let email =document.getElementById("email-pengirim");
let komentar =document.getElementById("komentar-pengirim");

function send(){

    if(nama.value !== "" && email.value !== "" && komentar.value !== ""){
        alert(`Hallo ${nama.value}.., Terimakasih, Pesan Anda Telah Terkirim !`);
        confirm(`Kami akan mengkonfirmasi pesan Anda melalui e-mail ${email.value} yang telah Anda inputkan. ${nama.value} Tetap Semangat dan Stay Healthy !`);
    }else{
        alert("Silahkan Inputkan Data Diri dan Komentar Terlebih Dahulu !");
    }
    
    nama.value = "";
    email.value = "";
    komentar.value = "";

}