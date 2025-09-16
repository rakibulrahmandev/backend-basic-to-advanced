const toggleBtn = document.getElementById('toggle_btn');
const passField = document.getElementById('pass_field');

toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    passField.type = passField.type === 'password' ? 'text' : 'password';
    toggleBtn.innerHTML = passField.type === 'password' ? '<i class="far fa-eye-slash text-gray-800"></i>' : '<i class="far fa-eye text-gray-800"></i>'
});