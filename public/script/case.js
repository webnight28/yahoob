
const input = document.getElementById('uppercase-input');

input.addEventListener('input', function () {
    // Remove any non-alphabetic characters, then format with spaces
    this.value = this.value
        .replace(/[^a-zA-Z]/g, '') // Remove non-alphabetic characters
        .toUpperCase() // Convert to uppercase
        .split('') // Convert to array
        .join(' ') // Join with spaces
        .trim(); // Remove trailing space
});
