document.querySelector('.ss').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^\d]/g, '');
});
