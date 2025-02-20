document.getElementById('generateWand').addEventListener('click', function() {
    const wandDisplay = document.getElementById('wandDisplay');
    const wand = generateWandDetails();
    wandDisplay.innerHTML = `<p>Congrats, you have found ${wand.name}'s wand!</p><img id="wandImage" src="${wand.image}" alt="Wand Image" style="width:200px;height:auto;">`;
    document.getElementById('lockInBtn').style.display = 'block';
});

function lockInWand() {
    const wandImage = document.getElementById('wandImage');
    const secretButton = document.createElement('button');
    secretButton.textContent = 'Go to Secret Page';
    secretButton.className = 'feature-btn';
    secretButton.onclick = function() {
        window.location.href = 'secret.html';
    };
    document.getElementById('wandDisplay').appendChild(secretButton);
}

function generateWandDetails() {
    const wands = [
        { name: 'Harry Potter', description: 'Wood: Holly, Core: Phoenix Feather, Length: 11 inches', image: 'images/harry-potter.jpg' },
        { name: 'Hermione Granger', description: 'Wood: Vine, Core: Dragon Heartstring, Length: 10¾ inches', image: 'images/hermione-granger.jpg' },
        { name: 'Ron Weasley', description: 'Wood: Willow, Core: Unicorn Hair, Length: 14 inches', image: 'images/ron-weasley.jpg' },
        { name: 'Albus Dumbledore', description: 'Wood: Elder, Core: Thestral Tail Hair, Length: 15 inches', image: 'images/albus-dumbledore.jpg' },
        { name: 'Voldemort', description: 'Wood: Yew, Core: Phoenix Feather, Length: 13½ inches', image: 'images/voldemort.jpg' },
        { name: 'Draco Malfoy', description: 'Wood: Hawthorn, Core: Unicorn Hair, Length: 10 inches', image: 'images/draco-malfoy.jpg' },
        { name: 'Sirius Black', description: 'Wood: Unknown, Core: Unknown, Length: Unknown', image: 'images/sirius-black.jpg' },
        { name: 'Severus Snape', description: 'Wood: Unknown, Core: Unknown, Length: Unknown', image: 'images/severus-snape.jpg' },
        { name: 'Rubeus Hagrid', description: 'Wood: Oak, Core: Unknown, Length: 16 inches', image: 'images/rubeus-hagrid.jpg' },
        { name: 'Luna Lovegood', description: 'Wood: Unknown, Core: Unknown, Length: Unknown', image: 'images/luna-lovegood.jpg' }
    ];

    return wands[Math.floor(Math.random() * wands.length)];
}

function generateWand() {
    // Example wand generation code
    const wandInfo = "Elder Wand, 15 inches, Thestral tail hair core"; // Replace with actual wand generation logic
    document.getElementById('wandInfo').innerText = wandInfo;
    document.getElementById('lockInBtn').style.display = 'block';
}

// Generate a wand on page load
generateWand();
