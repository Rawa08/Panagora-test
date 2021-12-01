const LogoAndNav = () => {

    // Attaching Logo
    const logoContainer = document.createElement('div');
    logoContainer.className = 'logoContainer';
    logoContainer.innerHTML = '<img src="./static/panagora-logo.svg" alt="Panagora Logo"/>';

    // createing nav element
    const nav = document.createElement('nav');
    nav.className = 'nav';
    nav.innerHTML = '<li>Nav Element</li>';


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