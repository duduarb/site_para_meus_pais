// Função para alternar entre modo noturno e modo claro
function toggleMode() {
    const body = document.getElementById('body');
    const header = document.querySelector('header');
    const nav = document.querySelector('nav ul');
    const buttons = document.querySelectorAll('button');

    body.classList.toggle('light-mode');
    header.classList.toggle('light-mode');
    nav.classList.toggle('light-mode');
    buttons.forEach(button => button.classList.toggle('light-mode'));

    // Mudar o texto do botão
    const modeButton = document.getElementById('modeToggle');
    if (body.classList.contains('light-mode')) {
        modeButton.textContent = 'Modo Noturno';
    } else {
        modeButton.textContent = 'Modo Claro';
    }
}

// Função para exibir o prompt de senha
function showPasswordPrompt() {
    document.getElementById('passwordPrompt').classList.remove('hidden');
    document.getElementById('parentOptions').classList.add('hidden');
    document.getElementById('parentContent').classList.add('hidden');
}

// Função para verificar a senha
function checkPassword() {
    const password = document.getElementById('password').value;
    
    if (password === 'mae123' || password === 'pai123') {
        document.getElementById('passwordPrompt').classList.add('hidden');
        document.getElementById('parentOptions').classList.remove('hidden');
    } else {
        alert('Senha incorreta! Tente novamente.');
    }
}

// Função para mostrar o conteúdo específico para cada um dos pais
function showParentContent(parent) {
    let parentText = '';

    if (parent === 'mae') {
        parentText = 'Texto para a mãe: (aqui você pode escrever algo especial para sua mãe)';
    } else if (parent === 'pai') {
        parentText = 'Texto para o pai: (aqui você pode escrever algo especial para seu pai)';
    }

    document.getElementById('parentOptions').classList.add('hidden');
    document.getElementById('parentContent').classList.remove('hidden');
    document.getElementById('parentText').textContent = parentText;
}
