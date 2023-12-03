const nama = "Muhammad Dhia Ramadhanil Haq";
let usia = 12;
console.log (`Ha-haloo..Nama saya ${nama} umur sayaaaa ${usia} tahun`);

function generateBiodata() {
    if (usia < 8) {
        console.log("Bocil epep")
    } else if (usia < 15 && usia >= 7){
        console.log("Dewasa")
    } else if (usia >= 15 && usia <= 30) {
        console.log("sepuh")
    } else if (usia > 30 && usia <= 101) {
        console.log ("Fosil")
    } else {
        console.log("Bot")
    }
}

generateBiodata();