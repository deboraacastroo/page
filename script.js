// ===================== toggle icon navbar ====================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// ===================== scroll sections active link ====================  - torna azul no menu a secção onde estamos e se descermos no site, vai mudando a secção ativa e colocando azul no menu

let sections = document.querySelectorAll('section');       //  Esta linha seleciona todos os elementos <section> na página e os armazena em uma NodeList na variável sections.
let navLinks = document.querySelectorAll('header nav a');       // Esta linha seleciona todos os links <a> dentro do elemento <nav> dentro do <header> na página e os armazena em uma NodeList na variável navLinks.

window.onscroll = () => {        // Este bloco de código define uma função de retorno de chamada (callback) que é executada toda vez que ocorre um evento de rolagem na janela do navegador. A função abaixo será executada sempre que a janela for rolada.
    sections.forEach(sec => {      //  Este método forEach itera sobre cada elemento <section> na NodeList sections.
        let top = window.scrollY;      //  Obtém a posição atual de rolagem vertical da janela do navegador.
        let offset = sec.offsetTop - 150;      //  Calcula a posição de rolagem vertical da seção atual, subtraindo 150 pixels da posição do topo da seção. Isso é feito para dar algum espaço entre o topo da página e a marcação de ativação do link.
        let height = sec.offsetHeight;     //  Obtém a altura da seção atual.
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {        // Verifica se a posição de rolagem vertical da janela está dentro da faixa de visualização da seção atual.
            navLinks.forEach(links => {
                links.classList.remove('active');       // Remove a classe "active" de todos os links de navegação.
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');       // Seleciona o link de navegação correspondente à seção atual usando seu atributo "href", que contém o valor do atributo "id" da seção. Adiciona a classe "active" a esse link de navegação.
            });
        };
    });


    // ===================== sticky navbar ==================== 

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // ===================== remove toggle icon and navbar when click navbar link (scroll) ====================

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


    // ===================== scroll reveal ==================== 

    ScrollReveal({ 
        // reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// ===================== typed js ==================== 

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Scientist', 'Java Developer', 'Outsystems Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})