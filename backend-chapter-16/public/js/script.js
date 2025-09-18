const input = document.getElementById('input');
const toggleBtn = document.getElementById('toggle_btn');
// <i class="fa-solid fa-eye-slash text-gray-500/20"></i>

toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (input.type === 'password') {
        input.type = 'text';
        toggleBtn.innerHTML = '<i class="fa-solid fa-eye text-gray-500/20"></i>';
    } else if (input.type === 'text') {
        input.type = 'password';
        toggleBtn.innerHTML = '<i class="fa-solid fa-eye-slash text-gray-500/20"></i>'
    };
});