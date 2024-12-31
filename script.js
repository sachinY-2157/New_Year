

/////////////////////////////////////////////////


const messages = [
    "Happy New Year meri Tubee , ye dusri new year hai sath me tuee.. abhi aane wali saari  bhi sath  me celebrate krenge  ❤️",
    "Keep smiling! 😊",
    "You light up our world! ✨",
    "Spread love everywhere you go! 🌹",
    "Have a fantastic Year and Life Tubee! 🌈",
    "   👻  ",
    "Ek aur saal gya jisme bahut kuchh sikhi tm bahut logon ka real face dekhi lekin usse tmhe tension nhi lena n please kyuki already hmlog ke pass bahut problem hai...aur hm dono ko jldi se kuch krna hai life me isliye ye new year se dono kuchh resolution bna lenge jo dono ko follow krna hai..",
    "Missing You!🫴",
    
];


const backgrounds = [
    "pic1.jpg", // Replace with your image paths
    "pic2.jpg", // Replace with your image paths
    "pic3.jpg", // Replace with your image paths
    "pic4.jpg", // Replace with your image paths
    "pic5.jpg", // Replace with your image paths
    "pic6.jpg", // Replace with your image paths
    "pic7.jpg", // Replace with your image paths
    "pic8.jpg", // Replace with your image paths
    "pic9.jpg", // Replace with your image paths
     // Replace with your image paths
    // "background2.jpg",
    // "background3.jpg",
    // "background4.jpg",
    // "background5.jpg"
];

let clickCount = 0; // Tracks the number of clicks

function openHeart() {
   
    const heart = document.getElementById('heart');
    heart.classList.add('animate');
    

    // Cycle through the background images
    const newBackground = backgrounds[clickCount % backgrounds.length];
    document.body.style.backgroundImage = `url('${newBackground}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";


    document.body.style.height = "100vh"; 
    document.body.style.margin = "0";
    document.body.style.transition = "background 1.5s ease";

    clickCount++; // Increment the click counter
}

function showMessage(event) {
    const messageBox = document.getElementById('message-box');
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    messageBox.innerText = randomMessage;
    messageBox.style.display = 'inline';

    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 6000); // Message disappears after 3 seconds
}
