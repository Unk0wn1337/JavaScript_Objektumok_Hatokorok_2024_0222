/* lista - azonos tipusú változók tárolására! */
let lista = ["első","második"];

console.log(lista[0]);
lista[0] = "átirt első"

console.log(lista);

lista[10] = "tizenegyedik";

console.log(lista);
console.log(lista[5]);


//listához elem adás -utolsó hely után teszi az elemet

lista.push("következő elem");
console.log(lista);

// utolsó elem eltávolítása
lista.pop(lista);
console.log(lista)

const szam = 5;
// szam=12;kontsant értéke nem változtható meg

const lista2=[23,521,623,23,88];
console.log(lista2);
// lista2 = [23,45,25] konstant változónak akartam új értéket adni
lista2[0] = 55;
console.log(lista2);
lista2.push(33333);
console.log(lista2)

// objektumok
// étlapos feladat
// ételnév lista --> szöveges tipus
// ételár lista --> szám tipusú változó
// ezt egy egységként tudná kezelni

const etel1= {
    nev: "Brassói aprópecsenye",
    ar: 2990
}

console.log(etel1.nev);
console.log(etel1.ar);

etel1.mennyiseg = 3; //új kulcsot adok az objektumhoz
console.log(etel1)

const etel2 = {
    nev: "BBQ pizza",
    ar: 4200,
    meret: 45,
    mennyiseg: 2
}

// egy kutyát adatait ir le
// egy obejktum tulajdonkeppen olyan mint egy adatbázisank a rekordja 
// Kulcsok - tulajdonságok az adatbázis egy mezője

const kutya = {
    nev: "Doggo",
    szul_datum: 2020,
    fajta: "Rottweiler",
    szorSzin: "fekete",
    magassag: 60, 
    szul_hely: "Szent János korház"
}

const kutyaLista = [
    {
        nev: "Doggo",
        szul_datum: 2020,
        fajta: "Rottweiler",
        szorSzin: "fekete",
        magassag: 60, 
        szul_hely: "Szent János korház"
    },
    {
        nev: "DogXyZ",
        szul_datum: 2020,
        fajta: "Rottweiler",
        szorSzin: "fekete",
        magassag: 60, 
        szul_hely: "Szent János korház"
    },
    
    
]
console.log(kutyaLista[0].szorSzin);