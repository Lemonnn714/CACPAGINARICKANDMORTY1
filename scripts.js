document.addEventListener('DOMContentLoaded', () => {
    
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        console.log('Inicio de Sesión:', { username, password });
        
    });

    
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        console.log('Registro:', { username, password });
        
    });

    
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            const characterGallery = document.getElementById('characterGallery');
            data.results.forEach(character => {
                const characterDiv = document.createElement('div');
                characterDiv.classList.add('col-md-4');
                characterDiv.innerHTML = `
                    <img src="${character.image}" class="img-fluid" alt="${character.name}" />
                    <p class="text-center">${character.name}</p>
                `;
                characterGallery.appendChild(characterDiv);
            });
        })
        .catch(error => console.error('Error fetching characters:', error));
});
