let fortune = document.getElementById('fortune');
let array = [
    
    'Today is the day to show someone that you care.',
    'You can create your own happiness. Stop watching Money Heist on Netflix and go make it a reality!',
    'Mistakes happen, turn them into oppurtunities.',
    'You can not have everything...where would you put it all?',
    'There is great love in your future.',
    "Life's journey is always on adventure. So do not panic when you wake up inside a UFO today.",
    'Say YES to exciting oppurtunities.',
    'In your beginning, you will find your end.',
    'Shame on you for thinking I am psychic.',
    'I know what you did! I see EVERYTHING!!!',
    'Someone has Googled you recently.',
    'You will seek food again in one hour.',
    'The star of riches will shine on you everytime you give a student A.',
    'Never trouble trouble till trouble troubles you.',
    'RUN!!!',
    
];

fortune.innerHTML = array[Math.floor(Math.random() * array.length)];
