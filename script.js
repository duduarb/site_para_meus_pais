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

// Função para exibir o conteúdo de uma aba
function showContent(sectionId) {
    // Ocultar todas as seções
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => section.classList.remove('active'));

    // Mostrar a seção clicada
    const section = document.getElementById(sectionId);
    section.classList.add('active');

    // Se estamos na aba "Somente Pais", garantir que a tela de senha seja resetada
    if (sectionId === 'pais') {
        resetPasswordState();
    }
}

// Função para mostrar a aba de senha para a mãe ou pai
function showPasswordPrompt(parent) {
    document.getElementById('passwordPrompt').classList.remove('hidden');
    document.getElementById('parentOptions').classList.add('hidden');
    document.getElementById('parentContent').classList.add('hidden');
    document.getElementById('parentText').innerHTML = '';
    document.getElementById('errorMessage').classList.add('hidden');

    // Armazenar qual é o usuário (mãe ou pai)
    sessionStorage.setItem('parent', parent);
}

// Função para verificar a senha
function checkPassword() {
    const password = document.getElementById('password').value;
    const parent = sessionStorage.getItem('parent');
    const correctPassword = parent === 'mae' ? 'fatimama' : 'andersonson';

    if (password === correctPassword) {
        // Exibe o conteúdo específico para mãe ou pai
        document.getElementById('passwordPrompt').classList.add('hidden');
        document.getElementById('parentOptions').classList.add('hidden');
        document.getElementById('parentContent').classList.remove('hidden');
        document.getElementById('parentText').innerHTML = `<h3>Oi ${parent === 'mae' ? 'mãe' : 'pai'}</h3><p>Texto: Aqui está uma mensagem especial para ${parent === 'mae' ? 'sua mãe' : 'seu pai'}.</p>`;
    } else {
        // Mensagem de erro
        document.getElementById('errorMessage').classList.remove('hidden');
    }
}

// Função para resetar o estado da senha e voltar para a tela de opções
function resetPasswordState() {
    // Resetando a tela de erro ou senha
    document.getElementById('passwordPrompt').classList.add('hidden');
    document.getElementById('parentOptions').classList.remove('hidden');
    document.getElementById('parentContent').classList.add('hidden');
    document.getElementById('password').value = '';
    document.getElementById('errorMessage').classList.add('hidden');
    sessionStorage.removeItem('parent'); // Limpa o estado armazenado
}

// Adicionar evento para limpar a área de senha ao recarregar a página
window.onload = function () {
    // Se a página carregar diretamente na área de senha, resetar a tela
    resetPasswordState();
};
