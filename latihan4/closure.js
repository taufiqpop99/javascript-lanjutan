// 2.1 xecution Context, Hoisting, Scope

console.log(nama);
var nama = "Pop";

// 1. creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// disebut hoisting
// window = global object
// this = window

// 2. Execution phase
// console.log(sayHello());

var nama = "Pop";
var umur = 21;

function sayHello () {
    return `Halo, nama saya ${nama}, saya umur ${umur} tahun.`;
};

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

var nama = "Taufiq Pop";
var username = "@taufiqpop99";

function cetakURL () {
    console.log(arguments);
    var instagramURL = "https://instagram.com/";
    return instagramURL + username;
};

// console.log(cetakURL(username));
console.log(cetakURL("@lalapo19", "@ainunafi"));