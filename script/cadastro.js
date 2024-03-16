document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Remove todas as mensagens de erro
    document.querySelectorAll('.error-message').forEach(element => {
        element.textContent = '';
    });

    // Obtém os valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const phone = document.getElementById('phone').value;

    // Validação do campo de usuário
    if (username.trim() === '') {
        document.getElementById('username-error').textContent = 'Campo obrigatório';
        return;
    }

    // Validação do campo de senha
    if (password.trim() === '') {
        document.getElementById('password-error').textContent = 'Campo obrigatório';
        return;
    }
    if (password.length < 8) {
        document.getElementById('password-error').textContent = 'A senha deve ter pelo menos 8 caracteres';
        return;
    }

    // Validação do campo de confirmação de senha
    if (confirmPassword.trim() === '') {
        document.getElementById('confirm-password-error').textContent = 'Campo obrigatório';
        return;
    }
    if (confirmPassword !== password) {
        document.getElementById('confirm-password-error').textContent = 'As senhas não coincidem';
        return;
    }

    // Validação do campo de telefone
    if (phone.trim() === '') {
        document.getElementById('phone-error').textContent = 'Campo obrigatório';
        return;
    }
    if (!isValidPhone(phone)) {
        document.getElementById('phone-error').textContent = 'O telefone não está no formato correto';
        return;
    }

    // Exibe mensagem de sucesso
    document.getElementById('success-message').textContent = 'Cadastro realizado com sucesso! Você será redirecionado para a tela de login.';
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 3000); // Tempo de espera para redirecionamento em milissegundos
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

function isValidPhone(phone) {
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return regex.test(phone);
}