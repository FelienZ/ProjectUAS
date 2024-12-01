document.addEventListener('DOMContentLoaded', function () {
    const checkIn = document.getElementById('check-in');
    const checkOut = document.getElementById('check-out');
    const submitButton = document.querySelector('.submit-button');
  
    // Validasi tanggal check-in dan check-out
    submitButton.addEventListener('click', function (event) {
      if (new Date(checkIn.value) >= new Date(checkOut.value)) {
        alert('Tanggal check-out harus setelah tanggal check-in!');
        event.preventDefault();
      } else {
        alert('Formulir berhasil disubmit.');
      }
    });
  
    // Smooth scrolling for nav-tabs
    const sections = {
      description: document.querySelector('.isi'),
      reservation: document.querySelector('.isi2'),
      location: document.querySelector('.isi3'),
      services: document.querySelector('.ket2'),
    };
  
    document.querySelectorAll('.nav-tabs .nav-link').forEach((tab) => {
      tab.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.textContent.toLowerCase();
        const section = sections[target];
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  });
  