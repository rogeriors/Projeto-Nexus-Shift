// Espera 2000 milissegundos (2 segundos)
setTimeout(function() {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    // Opcional: Adiciona a classe fade-out para um efeito suave
    splashScreen.classList.add('fade-out');
    document.body.style.backgroundColor = 'black';

    // Espera o fade-out terminar (0.5s) para esconder os elementos completamente
    setTimeout(function() {
        splashScreen.style.display = 'none';
        mainContent.style.display = 'block'; // Mostra o conteúdo principal
        

        // Restaura a rolagem da página
        document.body.style.overflow = 'auto';
    }, 500); // 500ms é a duração da transição CSS
}, 1000);