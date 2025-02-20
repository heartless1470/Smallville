const users = {
    'friend1': 'password1',
    'friend2': 'password2',
    'puckett': 'puckettpassword'
};

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (users[username] && users[username] === password) {
        window.location.href = username + '.html';
    } else {
        alert('Invalid username or password');
    }
}

function logout() {
    window.location.href = 'index.html';
}

function showOptions() {
    document.getElementById('option1').classList.remove('hidden');
    document.getElementById('option2').classList.remove('hidden');
}

function option1() {
    alert('Oops, wrong one! LOL');
    const cats = ['cat1.jpg', 'cat2.jpg', 'cat3.jpg'];
    cats.forEach((cat, index) => {
        const img = document.createElement('img');
        img.src = cat;
        img.className = 'popup-cat';
        img.style.position = 'fixed';
        img.style.top = `${Math.random() * 80 + 10}%`;
        img.style.left = `${Math.random() * 80 + 10}%`;
        img.style.width = '100px';
        img.style.height = '100px';
        img.style.zIndex = 1000;
        document.body.appendChild(img);
        setTimeout(() => img.remove(), 4000);
    });
}

function option2() {
    const videoContainer = document.createElement('div');
    videoContainer.id = 'video-container';
    const video = document.createElement('video');
    video.src = 'birthday_video.mp4'; // Replace with the actual video file path
    video.controls = true;
    const closeButton = document.createElement('button');
    closeButton.id = 'close-video';
    closeButton.innerText = 'Close';
    closeButton.onclick = () => videoContainer.remove();
    videoContainer.appendChild(video);
    videoContainer.appendChild(closeButton);
    document.body.appendChild(videoContainer);
    video.play();
}
