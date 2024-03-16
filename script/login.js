document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Caso 1: Login bem-sucedido com usuário e senha corretos
    if (username === 'john_doe' && password === 'Test@1234') { 
        document.getElementById('success-container').style.display = 'flex';
        setTimeout(function() {
            window.location.href = 'https://yasmincos.github.io/SOMOS_TECH/';
        }, 3000);
    } 
    // Caso 2: Login com usuário correto e senha incorreta
    else if (username === 'john_doe' && password !== 'Test@1234') {
        document.getElementById('error-message').textContent = 'Senha incorreta.';
    }
    // Caso 3: Login com usuário incorreto e senha correta
    else if (username !== 'john_doe' && password === 'Test@1234') {
        document.getElementById('error-message').textContent = 'Usuário não encontrado.';
    }
    // Caso 4: Login com usuário e senha incorretos
    else if (username !== 'john_doe' && password !== 'Test@1234') {
        document.getElementById('error-message').textContent = 'Usuário ou senha inválidos.';
    }
    // Casos 5, 6 e 7: Login com campos em branco
    else if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Por favor, preencha todos os campos.';
    }
    // Casos 8 a 12: Outros cenários
    else {
        document.getElementById('error-message').textContent = 'Usuário ou senha inválidos.';
    }
});

function togglePasswordVisibility(fieldId) {
    const passwordInput = document.getElementById(fieldId);
    const passwordToggleIcon = document.getElementById(`${fieldId}-toggle-icon`);

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggleIcon.classList.remove('fa-eye');
        passwordToggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        passwordToggleIcon.classList.remove('fa-eye-slash');
        passwordToggleIcon.classList.add('fa-eye');
    }
}