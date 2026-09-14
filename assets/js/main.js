/* Tobize two-brand website — main.js */
document.addEventListener('DOMContentLoaded', function () {
  // 1) Current year in footers
  document.querySelectorAll('#yr').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // 2) Reveal-on-scroll animations
  var els = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('on'); });
  }

  // 3) Contact form -> opens WhatsApp of the chosen restaurant
  var form = document.getElementById('waForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var brand = document.getElementById('f-brand').value;
      var name  = document.getElementById('f-name').value.trim();
      var topic = document.getElementById('f-topic').value;
      var msg   = document.getElementById('f-msg').value.trim();
      var num   = brand === 'intercontinental' ? '97474444386' : '97431194370';
      var bname = brand === 'intercontinental' ? 'Tobize Intercontinental' : 'Tobize African (Najma)';
      var text  = encodeURIComponent('Hello ' + bname + '! My name is ' + name + '. [' + topic + '] ' + msg);
      window.open('https://wa.me/' + num + '?text=' + text, '_blank');
    });
  }
});
