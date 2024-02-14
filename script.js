// Hide gift initially
document.getElementById("gift").style.display = "none";

function showGift() {
  document.getElementById("gift").style.display = "block";
}

// Hide gift when clicking outside tulips
document.addEventListener('click', function(e) {
  if (e.target !== document.querySelector('.tulips')) {
    document.getElementById('gift').style.display = 'none';
  }
});