let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Gunakan addEventListener untuk menangani klik
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('#contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman form secara default

        let formData = new FormData(form);

        fetch('send_email.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            if (result === 'success') {
                alert('Pesan Anda telah terkirim! Terima kasih telah menghubungi kami.');
                form.reset(); // Reset form setelah berhasil
            } else {
                alert('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
            }
        })
        .catch(error => {
            alert('Terjadi kesalahan. Silakan coba lagi.');
            console.error('Error:', error);
        });
    });
});
