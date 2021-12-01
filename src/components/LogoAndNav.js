const LogoAndNav = () => {

    // Attaching Logo
    const logoContainer = document.createElement('div');
    logoContainer.className = 'logoContainer';
    logoContainer.innerHTML = '<img src="./static/panagora-logo.svg" alt="Panagora Logo"/>';

    // createing nav element
    const nav = document.createElement('nav');
    nav.className = 'nav';
    nav.innerHTML = 
    `
    <a href="/" id="home-link" class="nav-link" data-link>Products</a>
    <a href="/about" id="about-link" data-link class="nav-link">About</a>
    `;


    // creating container for dynamic content
    const appContainer = document.createElement('div');
    appContainer.setAttribute('id', 'app');
    appContainer.innerHTML = '<h1>App Container</h1>'


    // Attaching elements to DOM
    document.body.appendChild(logoContainer);
    document.body.appendChild(nav);
    document.body.appendChild(appContainer);


    return;
}

export default LogoAndNav