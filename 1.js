
var kecepatan = 3 // meter/detik
var kt = 4
var waktu = 25

console.log("seseorang mengendarai mobil yang berjalan pada waktu 5:25:15 dengan kecepatan jalan 3 m/detik")
while(kecepatan < kt){
    waktu += 10
    kecepatan +=1
   
    console.log("pada waktu 5:"+waktu+":15 kecepatan naik menjadi "+kecepatan+" m/detik")
}
var waktuA = 35
var waktux = 60
var jam = 5

while(waktu < waktux){
    waktuA += 7
    kt += 1
    while(waktuA%63===0){
        jam += 1
        waktuA = 3
       
    }
    while(waktuA%66===0){
            jam += 1
            waktuA = 6
        }
    while(waktuA%62===0){
            jam += 1
            waktuA = 2
        }
    while(waktuA%65===0){
            jam += 1
            waktuA = 5
        }
        if (jam%9===0){
            break;
        }
    console.log("pada waktu "+jam+":"+waktuA+":15 kecepatan naik menjadi "+kt+" m/detik")
   
}console.log("pada waktu 9:00:00 kecepatan mobil tetap 33 m/detik")