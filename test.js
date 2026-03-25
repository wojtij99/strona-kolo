console.log("Uruchamianie testów...");

function dodaj(a, b) {
    return a + b;
}


if(dodaj(2, 3) === 5) {
    console.log("Test 1 przeszedł pomyślnie!");
} else {
    console.log("X: Test 1 nie przeszedł!");
    process.exit(1);
}