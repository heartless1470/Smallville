function revealPatronus() {
  const patronuses = ['Stag', 'Otter', 'Phoenix', 'Doe', 'Hare', 'Horse', 'Wolf', 'Cat'];
  const randomPatronus = patronuses[Math.floor(Math.random() * patronuses.length)];
  document.getElementById('patronusDisplay').innerText = `Your Patronus is a ${randomPatronus}!`;
}

document.getElementById("revealPatronus").addEventListener("click", function() {
    const patronusNames = [
        { name: "Lunarae Stag", img: "stag.jpg", description: "A majestic silver stag with glowing moonlit antlers, symbolizing wisdom, protection, and an unbreakable spirit." },
        { name: "Nyxshadow Panther", img: "panther.jpg", description: "A sleek, mystical panther that moves like a shadow, embodying stealth, resilience, and an unyielding heart." },
        { name: "Aetherwing Falcon", img: "falcon.jpg", description: "A dazzling falcon that glides on currents of pure magic, representing clarity, foresight, and boundless freedom." },
        { name: "Emberfox Noctis", img: "fox.jpg", description: "A fiery fox with flickering golden embers in its fur, symbolizing cleverness, adaptability, and inner strength." },
        { name: "Celestis Lynx", img: "lion.jpg", description: "A glowing, ethereal lion with shimmering star-like markings, representing mystery, intuition, and deep magical insight." }
    ];

    const randomPatronus = patronusNames[Math.floor(Math.random() * patronusNames.length)];

    document.getElementById("patronusImage").src = randomPatronus.img;
    document.getElementById("patronusName").textContent = "Your Patronus is a " + randomPatronus.name + "!";
    document.getElementById("patronusDescription").textContent = randomPatronus.description;

    const effect = document.getElementById("patronusEffect");
    effect.classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("patronusImage").style.opacity = "1";
        document.getElementById("patronusImage").style.transform = "scale(1)";
        document.getElementById("patronusName").style.opacity = "1";
        document.getElementById("patronusDescription").style.opacity = "1";
    }, 500);

    document.getElementById("patronusSound").play();
});
