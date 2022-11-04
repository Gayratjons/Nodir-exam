let elUsernameInp = document.querySelector('.username');
let elPasswordInp = document.querySelector('.password');
let elLoginButton = document.querySelector('.input-login-btn');


elLoginButton.addEventListener('click', async (e) => {
    e.preventDefault()
    try {
        let username = elUsernameInp.value;
        let password = elPasswordInp.value;
        if (username !== '' && password !== '') {
            let auth = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
            let res = await auth.json();
            if (res.token) {
                localStorage.setItem('access_token', res.token);
                localStorage.setItem('userId', res.id);
                location = 'posts.html'
            } else {
                localStorage.removeItem('access_token');
                location.reload();
            }
        }
    } catch (error) {
        console.log(error);
    }
});

// kminchelle
// 0lelplR