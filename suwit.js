function getPilihanKomputer() {
	const comp = Math.random();
	if ( comp < 0.36 ) return 'Gajah';
	if ( comp >= 0.36 && comp < 0.67 ) return 'Orang';
	return 'Semut';
}
function getHasil(comp, player) {
	if (player == comp) return 'SERI!';
	if (player == 'Gajah') return (comp == 'Orang') ? 'MENANG!' : 'KALAH!';
	if (player == 'Orang') return (comp == 'Gajah') ? 'KALAH!' : 'MENANG!';
	if (player == 'Semut') return (comp == 'Gajah') ? 'MENANG!' : 'KALAH!';
}

const pGajah = document.querySelector('.Gajah');
pGajah.addEventListener('click', function(){
	const pilihanKomputer = getPilihanKomputer();
	const pilihanPlayer = pGajah.className;
	const hasil = getHasil(pilihanKomputer, pilihanPlayer);

	const pilkom = document.querySelector('.pilih');
	pilkom.innerHTML = pilihanKomputer;

	const info = document.querySelector('.hasil');
	info.innerHTML = hasil;
});
const pOrang = document.querySelector('.Orang');
pOrang.addEventListener('click', function(){
	const pilihanKomputer = getPilihanKomputer();
	const pilihanPlayer = pOrang.className;
	const hasil = getHasil(pilihanKomputer, pilihanPlayer);

	const pilkom = document.querySelector('.pilih');
	pilkom.innerHTML = pilihanKomputer;

	const info = document.querySelector('.hasil');
	info.innerHTML = hasil;
});
const pSemut = document.querySelector('.Semut');
pSemut.addEventListener('click', function(){
	const pilihanKomputer = getPilihanKomputer();
	const pilihanPlayer = pSemut.className;
	const hasil = getHasil(pilihanKomputer, pilihanPlayer);

	const pilkom = document.querySelector('.pilih');
	pilkom.innerHTML = pilihanKomputer;

	const info = document.querySelector('.hasil');
	info.innerHTML = hasil;
});