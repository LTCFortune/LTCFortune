function generateAddress() {
  let address = localStorage.getItem('ltc_address');
  if (!address) {
    address = 'ltc1q' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('ltc_address', address);
  }
  document.getElementById('ltcAddress').textContent = address;
}
function copyAddress() {
  const address = document.getElementById('ltcAddress').textContent;
  navigator.clipboard.writeText(address).then(() => {
    alert("Address copied!");
  });
}
window.onload = generateAddress;
