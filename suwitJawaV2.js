let eBaruKomp = document.createElement('p');
let eBaruPlayer = document.createElement('p');
let skorKomputer = 0;
let skorPlayer = 0;
let teksSkorKomp = document.createTextNode(skorKomputer.toString());
let teksSkorPlayer = document.createTextNode(skorPlayer.toString());
let areaKomp = document.querySelector('.area-komputer');
let areaPlayer = document.querySelector('.area-player');
let barisGambar = areaPlayer.querySelector('ul');
let styles = `
    margin: auto 100px;
    font-size: 50px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #e7e7e7;
    text-shadow: 1.5px 1.5px 0 #333, 0px 1.5px 0 #333, -1.5px -1.5px 0 #333, -1.5px -1.5px 0 #333, -1.5px 1.5px 0 #333, 1.5px -1.5px 0 #333, 0.7778174593px 0.7778174593px 0 #aaaaaa, 1.5556349186px 1.5556349186px 0 #aaaaaa, 2.3334523779px 2.3334523779px 0 #aaaaaa, 3.1112698372px 3.1112698372px 0 #aaaaaa, 3.8890872965px 3.8890872965px 0 #aaaaaa, 4.6669047558px 4.6669047558px 0 #aaaaaa, 5.4447222151px 5.4447222151px 0 #aaaaaa, 6.2225396744px 6.2225396744px 0 #aaaaaa, 7.0003571337px 7.0003571337px 0 #aaaaaa, 7.7781745931px 7.7781745931px 0 #aaaaaa
`;

eBaruKomp.appendChild(teksSkorKomp);
eBaruKomp.style.cssText = styles;
areaKomp.appendChild(eBaruKomp);

eBaruPlayer.appendChild(teksSkorPlayer);
eBaruPlayer.style = styles;
barisGambar.style = 'padding-top: 20px';
areaPlayer.insertBefore(eBaruPlayer, barisGambar);

function getPilihanKomputer() {
    let comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    function menang() {
        skorPlayer++;
        eBaruPlayer.innerHTML = skorPlayer;
        return 'MENANG!';
    }
    function kalah() {
        skorKomputer++;
        eBaruKomp.innerHTML = skorKomputer;
        return 'KALAH!'
    }
    if (player === comp) return 'SERI';
    if (player === 'gajah') return (comp === 'orang') ? menang() : kalah();
    if (player === 'orang') return (comp === 'semut') ? menang() : kalah();
    if (player === 'semut') return (comp === 'gajah') ? menang() : kalah();
}

function putarGambar() {
    const imgComputer = document.querySelector('.img-komputer');
    const optionGambar = ['gajah', 'semut', 'orang'];

    let i = 0;
    let waktuMulai = new Date().getTime();

    setInterval(function() {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'image/' + optionGambar[i++] + '.png');
        if (i == optionGambar.length) i = 0;
    }, 100)
}

let pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(imageDipilih) {
    imageDipilih.addEventListener('click', function() {
        let pilihanKomputer = getPilihanKomputer();
        let pilihanPlayer = imageDipilih.className;

        putarGambar();

        setTimeout(function() {
            let hasil = getHasil(pilihanKomputer, pilihanPlayer);

            const pKomputer = document.querySelector('.img-komputer');
            pKomputer.src = 'image/' + pilihanKomputer + '.png';
    
            const kolomHasil = document.querySelector('.info');
            kolomHasil.innerHTML = hasil;

        }, 1000);
    });
});

//let hasil = getHasil(pilihanKomputer, pilihanPlayer);
// const pSemut = document.querySelector('.semut');
// const pGajah = document.querySelector('.gajah');
// const pOrang = document.querySelector('.orang');

// pSemut.addEventListener('click', function() {
//     let pilihanKomputer = getPilihanKomputer();
//     let pilihanPlayer = pSemut.className;
//     let hasil = getHasil(pilihanKomputer, pilihanPlayer);

//     const pKomputer = document.querySelector('.img-komputer');
//     pKomputer.src = 'image/' + pilihanKomputer + '.png';

//     const kolomHasil = document.querySelector('.info');
//     kolomHasil.innerHTML = hasil;
// });
// pGajah.addEventListener('click', function() {
//     let pilihanKomputer = getPilihanKomputer();
//     let pilihanPlayer = pGajah.className;

//     const pKomputer = document.querySelector('.img-komputer');
//     pKomputer.src = 'image/' + pilihanKomputer + '.png';
    
//     let hasil = getHasil(pilihanKomputer, pilihanPlayer);
//     const kolomHasil = document.querySelector('.info');
//     kolomHasil.innerHTML = hasil;
// });
// pOrang.addEventListener('click', function() {
//     let pilihanKomputer = getPilihanKomputer();
//     let pilihanPlayer = pOrang.className;

//     const pKomputer = document.querySelector('.img-komputer');
//     pKomputer.src = 'image/' + pilihanKomputer + '.png';
    
//     let hasil = getHasil(pilihanKomputer, pilihanPlayer);
//     const kolomHasil = document.querySelector('.info');
//     kolomHasil.innerHTML = hasil;
// });