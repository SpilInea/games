const games = [
    {
        title: "Mario FPS",
        image: "https://funhtml5games.com/images/mariofps.png",
        url: "mario-fps.html"
    },
    {
        title: "Summer Maze",
        image: "https://i.ibb.co/hDNs7ww/New-Project.png",
        url: "summer-maze.html"
    },
    {
        title: "Go Up Dash",
        image: "https://www.jopi.com/cdn-cgi/image/quality=70,width=256,height=256,f=auto/img/t/go-up-dash.png",
        url: "go-up-dash.html"
    },
    {
        title: "Painting Tiles",
        image: "https://www.jopi.com/cdn-cgi/image/quality=70,width=256,height=256,f=auto/img/t/painting-tiles.png",
        url: "painting-tiles.html"
    },
    {
        title: "drunk drive",
        image: "https://funhtml5games.com/images/drunkdrive.png",
        url: "drunk-drive.html"
    },
    {
        title: "PackMan",
        image: "https://funhtml5games.com/images/pacman.png",
        url: "packman.html"
    }
];

const gameList = document.getElementById('game-list');

games.forEach(game => {
    const gameItem = document.createElement('div');
    gameItem.className = 'game-item';
    gameItem.innerHTML = `
        <a href="${game.url}">
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
        </a>
    `;
    gameList.appendChild(gameItem);

    
});
