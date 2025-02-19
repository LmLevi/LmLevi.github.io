async function getCryptoPrice() {
    const crypto = document.getElementById('cryptoInput').value.toLowerCase();
    const priceResult = document.getElementById('priceResult');
    
    if (!crypto) {
        priceResult.innerText = 'Kérjük, adjon meg egy kriptovaluta nevet';
        return;
    }
    
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`);
        const data = await response.json();
        
        if (data[crypto]) {
            priceResult.innerText = `${crypto} aktuális ára: $${data[crypto].usd}`;
        } else {
            priceResult.innerText = 'A megadott kriptovaluta nem található';
        }
    } catch (error) {
        priceResult.innerText = 'Hiba történt az adatok lekérésekor. Kérjük, próbálja újra később.';
    }
}