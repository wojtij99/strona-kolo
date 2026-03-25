console.log("Uruchamianie testów...");

function dodaj(a, b) {
    return a + b;
}


if(dodaj(2, 3) === 8) {
    console.log("Test 1 przeszedł pomyślnie!");
} else {
    console.log("Test 1 nie przeszedł!");
    process.exit(1);
}