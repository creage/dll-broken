import b from 'LIB/b'; // success
//import c from 'LIB/c'; // error

console.log(b.init());

b.loadC().then(C => {
    console.log(C.init()); // success
});

