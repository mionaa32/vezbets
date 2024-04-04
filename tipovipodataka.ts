//primitivni tipovi podataka
//number
let godine:number=20;
//string
let ime:string="Pera";
//boolean
let studira:boolean=true;


//kompleksni tipovi podataka

//1)niz
//niz stringova
let predmeti:string[]=["EPOS", "MATEMATIKA", "PROGRAMIRANJE1"];
//niz number
let ocene:number[]=[10,9,9];

//2) tuples -->tacno se zna kolko elemenata ima u n-torci
//uredjena entorka
let entorka:[string,number]=["Zika", 24];

//3)enumi  -->tipa dani u nedelji
enum Modul{
    Softversko,              //index 0
    Elektronsko,             //index 1
    InformacioniSistemi,     //index 2
    InformacioneTehnologija  //index 3
}

let konkretniModul:Modul=Modul.Elektronsko;

//4)objekti
let student:{ime:string,godine:number,studira:boolean}={
    ime:"Mara",
    godine:24,
    studira:true
}

//5)unija tipova 
let brojIliString:number|string=10;

//6)any tip
let biloSta:any="ovo moze biti bilo sta";

//7)void 
//najcesce kod funkcija
function sayHello():void{
    console.log("Hello!");
}

//8)null i undefined
let n:null=null;
let u:undefined=undefined;

//9) type assertions
let nekaVrednost:any="ovo je string";
let duzinaString:number=(nekaVrednost as string).length;

console.log(godine,ime,studira);  //primitivni
console.log(predmeti,ocene);      //nizovi
console.log(entorka);             //tuples
console.log(konkretniModul);      //enum
console.log(student);             //objekat
console.log(brojIliString);       //unija tipova
console.log(biloSta);             //any
console.log(n,u);                 //null, undefined
console.log(duzinaString);        //type assertion   (promenim any u toku koda da ga gleda kao neku konkretnu vrednost)


