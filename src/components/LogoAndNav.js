const LogoAndNav = () => {

    const logoContainer = document.createElement('div');
    logoContainer.innerHTML = '<h1> Logo Container</h1>';

    const nav = document.createElement('nav');
    nav.innerHTML = '<li>Nav Element</li>';

    const appContainer = document.createElement('div');
    appContainer.setAttribute('id', 'app');
    appContainer.innerHTML = '<h1>App Container</h1>'

    document.body.appendChild(logoContainer);
    document.body.appendChild(nav);
    document.body.appendChild(appContainer);


}

export default LogoAndNav