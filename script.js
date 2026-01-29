document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const startScreen = document.getElementById('start-screen');
    const audio = document.getElementById('bgMusic');
    const dedicationCard = document.getElementById('dedication-card');

    startBtn.addEventListener('click', () => {
        // 1. Tocar música (interação do usuário permite isso)
        audio.volume = 1.0;
        audio.play().catch(e => console.log("Erro ao tocar áudio:", e));

        // 2. Sumir com a tela inicial
        startScreen.style.opacity = '0';
        setTimeout(() => {
            startScreen.style.display = 'none';
            
            // 3. Iniciar as animações das flores
            document.body.classList.remove("not-loaded");
            
            // 4. Mostrar o cartão (já configurado com delay no CSS)
            dedicationCard.classList.add('show-card');
        }, 1000);
    });
});