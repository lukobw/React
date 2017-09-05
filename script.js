var movies = [
    {
        id: 1,
        title: 'Gladiator',
        desc: 'Movie about the gladiators',
        src: 'http://icons.iconarchive.com/icons/jake2456/movie-pack-12/256/Gladiator-icon.png'
    },
    {
        id: 2,
        title: 'Armaggeddon',
        desc: "Movie about end of the world",
        src: 'https://orig03.deviantart.net/bca2/f/2016/363/9/6/armageddon_folder_icon_by_dahlia069-datd46k.png'
    },
    {
        id: 3,
        title: 'Wonder Woman',
        desc: 'When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.',
        src: 'https://avatarfiles.alphacoders.com/814/81414.png'
    },
    {
        id: 4,
        title: 'Logan: Wolverine',
        desc: "'In the near future, a weary Logan cares for an ailing Professor X, somewhere on the Mexican border. However, Logan's attempts to hide from the world, and his legacy, are upended when a young mutant arrives, pursued by dark forces.'",
        src: 'https://pbs.twimg.com/profile_images/792095191893016576/VQFaEq6o.jpg'
    },
    {
        id: 5,
        title: 'Justice League',
        desc: "'Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy.'",
        src: 'https://orig13.deviantart.net/d11a/f/2017/103/1/7/justice_league_folder_icon_by_dahlia069-dahybxv.png'

    }
];

var moviesElements = movies.map(movie =>
    React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.src})
    )
);

var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Movies list'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));