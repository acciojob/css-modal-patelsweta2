//your JS code here. If required.
const modal = doument.getElementById('myModal');
const openBtn = document.getElementById('openModal');

openBtn.addEventListener('click', openModal);

window.addEventListener('click', (event) => {
	if(event.target === modal){
		closeModal();
	}
});

function openModal() {
	modal.style.display = 'flex';
}
function closeModal() {
	modal.style.display = 'none';
}