/* Perbaikan untuk script.js */

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            hamburger.classList.toggle("active");
        });
    }
});

$(document).ready(function () {
    $('#contactForm').on('submit', function (e) {
      e.preventDefault();
  
      const name = $('#name').val().trim();
      const email = $('#email').val().trim();
      const message = $('#message').val().trim();
      let errorMsg = '';
  
      if (!name || !email || !message) {
        errorMsg = 'Semua kolom wajib diisi.';
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorMsg = 'Email tidak valid.';
      } else if (name.length > 50 || email.length > 50 || message.length > 200) {
        errorMsg = 'Salah satu kolom melebihi batas maksimal karakter.';
      }
  
      if (errorMsg) {
        alert(errorMsg);
      } else {
        alert('Form berhasil dikirim!');
      }
    });
  });
  
