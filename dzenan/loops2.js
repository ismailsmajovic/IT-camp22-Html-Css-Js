const secret = 999;
while (true) {
    let pogadaj = (Math.random() * (1000-1) +1).toFixed(0);
    console.log('pokusavamo sa brojem:', pogadaj);
    if (pogadaj == secret) {
        break;
    }
}
//console.log('pokusavamo sa brojem:', pogadaj);

