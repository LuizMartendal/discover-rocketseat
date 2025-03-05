function toggleLightButton() {
    const html = document.documentElement;
    const button = document.getElementById('toggle-button');

    if (html.classList.contains('light')) {
        html.classList.remove('light');
        button.classList.remove('toggle-light-button');
    } else {
        html.classList.add('light');
        button.classList.add('toggle-light-button');
    }
}