//primitivni tipovi podataka
//number
var godine = 20;
//string
var ime = "Pera";
//boolean
var studira = true;
//kompleksni tipovi podataka
//1)niz
//niz stringova
var predmeti = ["EPOS", "MATEMATIKA", "PROGRAMIRANJE1"];
//niz number
var ocene = [10, 9, 9];
//2) tuples -->tacno se zna kolko elemenata ima u n-torci
//uredjena entorka
var entorka = ["Zika", 24];
//3)enumi  -->tipa dani u nedelji
var Modul;
(function (Modul) {
    Modul[Modul["Softversko"] = 0] = "Softversko";
    Modul[Modul["Elektronsko"] = 1] = "Elektronsko";
    Modul[Modul["InformacioniSistemi"] = 2] = "InformacioniSistemi";
    Modul[Modul["InformacioneTehnologija"] = 3] = "InformacioneTehnologija"; //index 3
})(Modul || (Modul = {}));
var konkretniModul = Modul.Elektronsko;
//4)objekti
var student = {
    ime: "Mara",
    godine: 24,
    studira: true
};
//5)unija tipova 
var brojIliString = 10;
//6)any tip
var biloSta = "ovo moze biti bilo sta";
//7)void 
//najcesce kod funkcija
function sayHello() {
    console.log("Hello!");
}
//8)null i undefined
var n = null;
var u = undefined;
//9) type assertions
var nekaVrednost = "ovo je string";
var duzinaString = nekaVrednost.length;
console.log(godine, ime, studira); //primitivni
console.log(predmeti, ocene); //nizovi
console.log(entorka); //tuples
console.log(konkretniModul); //enum
console.log(student); //objekat
console.log(brojIliString); //unija tipova
console.log(biloSta); //any
console.log(n, u); //null, undefined
console.log(duzinaString); //type assertion   (promenim any u toku koda da ga gleda kao neku konkretnu vrednost)
