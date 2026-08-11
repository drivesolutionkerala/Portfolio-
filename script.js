document.addEventListener('DOMContentLoaded', () => {
    // Booking Form Submission Alert
    const bookingForm = document.querySelector('form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Booking submitted successfully!');
        });
    }
});
