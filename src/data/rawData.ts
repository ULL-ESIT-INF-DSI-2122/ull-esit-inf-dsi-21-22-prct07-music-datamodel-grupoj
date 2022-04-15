import {Album} from '../objects/album';
import {Artist} from '../objects/artist';
import {musicGenreCollection, artistCollection, groupCollection, songCollection,
  albumCollection, playlistCollection} from './var/collections';
import {Group} from '../objects/group';
import {MusicGenre} from '../objects/musicGenre';
import {Playlist} from '../objects/playlist';
import {Song} from '../objects/song';

/**
 * @function Genera la colección del sistema con una serie de
 * datos preestablecidos
 */
export function rawData() {
  // Géneros musicales dentro de la colección del sistema
  {
    let genre = new MusicGenre('system', 'Urban');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Latino');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Rap');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Reguetón');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Pop');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Rock');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Alternativo');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Indie');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Metal');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'HardRock');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'SoftRock');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Country');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'GlamRock');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Electrónica');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Folk');
    musicGenreCollection.addItem(genre);
  }
  // Artistas dentro de la colección del sistema
  {
  // Calle 13
    let artist = new Artist('system', 'Residente', 7675337);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Visitante', 10203);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'ILe', 359876);
    artistCollection.addItem(artist);

    // Nirvana
    artist = new Artist('system', 'Kurt Cobain', 1023181);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Krist Novoselic', 36124);
    artistCollection.addItem(artist);

    // Imagine Dragons
    artist = new Artist('system', 'Dan Reynolds', 66679);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Daniel Wayne Sermon', 49514);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Ben McKee', 1352);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Daniel Platzman', 12909);
    artistCollection.addItem(artist);

    // Kiss
    artist = new Artist('system', 'Jene Simmons', 40051);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Paul Stanley', 143537);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Peter Criss', 45553);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Ace Frehley', 536081);
    artistCollection.addItem(artist);

    // Lady A
    artist = new Artist('system', 'Hillary Scott', 12466);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Charles Kelley', 80651);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Dave Haywood', 61);
    artistCollection.addItem(artist);

    // One Direction
    artist = new Artist('system', 'Harry Styles', 46490242);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Liam Payne', 6402885);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Zayn Malik', 20366071);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Niall Horan', 14948336);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Louis Tomlinson', 4019792);
    artistCollection.addItem(artist);

    // The Beatles
    artist = new Artist('system', 'John Lennon', 8692656);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Paul McCartney', 10487314);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'George Harrison', 6705654);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Ringo Starr', 1311265);
    artistCollection.addItem(artist);

    // Coldplay
    artist = new Artist('system', 'Chris Martin', 7449);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Jon Buckland', 7703);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Guy Berryman', 81675);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Will Champion', 15290);
    artistCollection.addItem(artist);

    // Single
    artist = new Artist('system', 'Avicci', 28923107);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Eminem', 52673522);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Melendi', 5291279);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Michael Jackson', 28631572);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Skrillex', 20151858);
    artistCollection.addItem(artist);
  }
  // Grupos dentro de la colección del sistema
  {
    let group = new Group('system', 'Calle13',
        [artistCollection.getList()[0], artistCollection.getList()[1],
          artistCollection.getList()[2]], 2004, 6543532);
    groupCollection.addItem(group);

    group = new Group('system', 'Nirvana',
        [artistCollection.getList()[3], artistCollection.getList()[4]],
        1987, 27116094);
    groupCollection.addItem(group);

    group = new Group('system', 'Imagine Dragons',
        [artistCollection.getList()[5], artistCollection.getList()[6],
          artistCollection.getList()[7], artistCollection.getList()[8]],
        2008, 59087675);
    groupCollection.addItem(group);

    group = new Group('system', 'Kiss',
        [artistCollection.getList()[9], artistCollection.getList()[10],
          artistCollection.getList()[11], artistCollection.getList()[12]],
        1973, 10550312);
    groupCollection.addItem(group);

    group = new Group('system', 'Lady A',
        [artistCollection.getList()[13], artistCollection.getList()[13],
          artistCollection.getList()[15]], 2006, 7226404);
    groupCollection.addItem(group);

    group = new Group('system', 'One Direction',
        [artistCollection.getList()[16], artistCollection.getList()[17],
          artistCollection.getList()[18], artistCollection.getList()[19],
          artistCollection.getList()[20]], 2010, 28220667);
    groupCollection.addItem(group);

    group = new Group('system', 'The Beatles',
        [artistCollection.getList()[21], artistCollection.getList()[22],
          artistCollection.getList()[23], artistCollection.getList()[24]],
        1960, 25216593);
    groupCollection.addItem(group);

    group = new Group('system', 'Coldplay',
        [artistCollection.getList()[25], artistCollection.getList()[26],
          artistCollection.getList()[27], artistCollection.getList()[28]],
        1996, 58491304);
    groupCollection.addItem(group);
  }
  // Canciones dentro de la colección del sistema
  {
    // Calle 13: Entre los que quieran
    let song = new Song('system', 'Intro', groupCollection.getList()[0], 198,
        [musicGenreCollection.getList()[0], musicGenreCollection.getList()[1]],
        3371253);
    songCollection.addItem(song);
    song = new Song('system', 'Calma Pueblo', groupCollection.getList()[0], 249,
        [musicGenreCollection.getList()[2]], 13122729);
    songCollection.addItem(song);
    song = new Song('system', 'Baile de los pobres',
        groupCollection.getList()[0],
        207, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[3]], 43902205);
    songCollection.addItem(song);
    song = new Song('system', 'La vuelta al mundo',
        groupCollection.getList()[0],
        234, [musicGenreCollection.getList()[2]], 142270089);
    songCollection.addItem(song);
    song = new Song('system', 'La Bala', groupCollection.getList()[0], 267,
        [musicGenreCollection.getList()[2]], 26732946);
    songCollection.addItem(song);
    song = new Song('system', 'Vamo` a portarnos mal',
        groupCollection.getList()[0], 243, [musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[2]], 36276215);
    songCollection.addItem(song);
    song = new Song('system', 'Latinoamérica',
        groupCollection.getList()[0], 301,
        [musicGenreCollection.getList()[1], musicGenreCollection.getList()[2]],
        96555254);
    songCollection.addItem(song);
    song = new Song('system', 'Inter', groupCollection.getList()[0], 65,
        [musicGenreCollection.getList()[3]], 5072377);
    songCollection.addItem(song);
    song = new Song('system', 'Digo lo que pienso',
        groupCollection.getList()[0],
        297, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[2]], 13133387);
    songCollection.addItem(song);
    song = new Song('system', 'Muerte en Hawaii', groupCollection.getList()[0],
        189, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[2]], 209447924);
    songCollection.addItem(song);
    song = new Song('system', 'Todo se mueve', groupCollection.getList()[0],
        202, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1], musicGenreCollection.getList()[2]],
        7242362);
    songCollection.addItem(song);
    song = new Song('system', 'El hormiguero', groupCollection.getList()[0],
        305, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1]],
        7620000);
    songCollection.addItem(song);
    song = new Song('system', 'Prepárame la cena', groupCollection.getList()[0],
        319, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[2]], 9152801);
    songCollection.addItem(song);
    song = new Song('system', 'Outro', groupCollection.getList()[0],
        71, [musicGenreCollection.getList()[0]], 9152801);
    songCollection.addItem(song);

    // Residente: Residente
    song = new Song('system', 'Intro ADN/DNA', artistCollection.getList()[0],
        100, [musicGenreCollection.getList()[1]], 3288071);
    songCollection.addItem(song);
    song = new Song('system', 'Somos anormales', artistCollection.getList()[0],
        218, [musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[2]], 11818330);
    songCollection.addItem(song);
    song = new Song('system', 'Interludio entre monstañas siberianas',
        artistCollection.getList()[0],
        142, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1]], 2754703);
    songCollection.addItem(song);
    song = new Song('system', 'Una leyenda China',
        artistCollection.getList()[0],
        269, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1], musicGenreCollection.getList()[2]],
        5536860);
    songCollection.addItem(song);
    song = new Song('system', 'Interludio Haruna Fati',
        artistCollection.getList()[0], 40, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1]], 2527404);
    songCollection.addItem(song);
    song = new Song('system', 'Dagombas en Tamale',
        artistCollection.getList()[0], 235, [musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[2]], 8635211);
    songCollection.addItem(song);
    song = new Song('system', 'Desencuentro',
        artistCollection.getList()[0], 284, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[4]], 41214120);
    songCollection.addItem(song);
    song = new Song('system', 'Guerra',
        artistCollection.getList()[0], 334, [musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[2]], 17195603);
    songCollection.addItem(song);
    song = new Song('system', 'Apocalíptico',
        artistCollection.getList()[0], 372, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[4]], 10952807);
    songCollection.addItem(song);
    song = new Song('system', 'La Sombra',
        artistCollection.getList()[0], 244, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1]], 3911697);
    songCollection.addItem(song);
    song = new Song('system', 'Milo',
        artistCollection.getList()[0], 363, [musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[2]], 7524021);
    songCollection.addItem(song);
    song = new Song('system', 'El Futuro es Nuestro',
        artistCollection.getList()[0], 266, [musicGenreCollection.getList()[1]],
        5679567);
    songCollection.addItem(song);
    song = new Song('system', 'Hijos del Cañaveral',
        artistCollection.getList()[0], 322, [musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[1]], 10245373);
    songCollection.addItem(song);

    // Nirvana: Nevermind
    song = new Song('system', 'Smells like teen spirit',
        groupCollection.getList()[1], 301,
        [musicGenreCollection.getList()[5]], 1253428911);
    songCollection.addItem(song);
    song = new Song('system', 'In Bloom', groupCollection.getList()[1], 255,
        [musicGenreCollection.getList()[5]], 202563669);
    songCollection.addItem(song);
    song = new Song('system', 'Come as you are', groupCollection.getList()[1],
        218, [musicGenreCollection.getList()[5]], 759041416);
    songCollection.addItem(song);
    song = new Song('system', 'Breed', groupCollection.getList()[1],
        184, [musicGenreCollection.getList()[5]], 82096421);
    songCollection.addItem(song);
    song = new Song('system', 'Lithium', groupCollection.getList()[1],
        257, [musicGenreCollection.getList()[5]], 389709421);
    songCollection.addItem(song);
    song = new Song('system', 'Polly', groupCollection.getList()[1],
        173, [musicGenreCollection.getList()[5]], 87170744);
    songCollection.addItem(song);
    song = new Song('system', 'Territorial Pissing',
        groupCollection.getList()[1],
        142, [musicGenreCollection.getList()[5]], 58109145);
    songCollection.addItem(song);
    song = new Song('system', 'Drain you', groupCollection.getList()[1],
        223, [musicGenreCollection.getList()[5]], 96172882);
    songCollection.addItem(song);
    song = new Song('system', 'Lounge Act', groupCollection.getList()[1],
        156, [musicGenreCollection.getList()[5]], 59884274);
    songCollection.addItem(song);
    song = new Song('system', 'Stay Away', groupCollection.getList()[1],
        211, [musicGenreCollection.getList()[5]], 54864490);
    songCollection.addItem(song);
    song = new Song('system', 'On a plain', groupCollection.getList()[1],
        194, [musicGenreCollection.getList()[5]], 44364645);
    songCollection.addItem(song);
    song = new Song('system', 'Something in the way',
        groupCollection.getList()[1],
        232, [musicGenreCollection.getList()[5]], 165290191);
    songCollection.addItem(song);
    song = new Song('system', 'Endless, Nameless', groupCollection.getList()[1],
        403, [musicGenreCollection.getList()[5]], 22226560);
    songCollection.addItem(song);

    // Kurt Cobain: Montage of Heck
    song = new Song('system', 'The Yodel song', artistCollection.getList()[3],
        216, [musicGenreCollection.getList()[5]], 1287967);
    songCollection.addItem(song);
    song = new Song('system', 'Been a Song', artistCollection.getList()[3],
        80, [musicGenreCollection.getList()[5]], 2382880);
    songCollection.addItem(song);
    song = new Song('system', 'The happy guitar', artistCollection.getList()[3],
        132, [musicGenreCollection.getList()[5]], 1365348);
    songCollection.addItem(song);
    song = new Song('system', 'Clean up before she comes',
        artistCollection.getList()[3],
        154, [musicGenreCollection.getList()[5]], 734553);
    songCollection.addItem(song);
    song = new Song('system', 'Reverb Experiment',
        artistCollection.getList()[3],
        172, [musicGenreCollection.getList()[5]], 437788);
    songCollection.addItem(song);
    song = new Song('system', 'You cant`t change me',
        artistCollection.getList()[3],
        258, [musicGenreCollection.getList()[5]], 491869);
    songCollection.addItem(song);
    song = new Song('system', 'Scoff', artistCollection.getList()[3],
        37, [musicGenreCollection.getList()[5]], 354379);
    songCollection.addItem(song);
    song = new Song('system', 'Desire', artistCollection.getList()[3],
        147, [musicGenreCollection.getList()[5]], 571920);
    songCollection.addItem(song);
    song = new Song('system', 'And I love her', artistCollection.getList()[3],
        124, [musicGenreCollection.getList()[5]], 39997799);
    songCollection.addItem(song);
    song = new Song('system', 'Sappy', artistCollection.getList()[3],
        148, [musicGenreCollection.getList()[5]], 8380119);
    songCollection.addItem(song);
    song = new Song('system', 'Letter to Frances',
        artistCollection.getList()[3],
        124, [musicGenreCollection.getList()[5]], 1669078);
    songCollection.addItem(song);
    song = new Song('system', 'Frances farmer will have her revenge on Seatlle',
        artistCollection.getList()[3],
        263, [musicGenreCollection.getList()[5]], 901878);
    songCollection.addItem(song);
    song = new Song('system', 'She only lies', artistCollection.getList()[3],
        167, [musicGenreCollection.getList()[5]], 3833896);
    songCollection.addItem(song);

    // Imagine Dragons: Night Visions
    song = new Song('system', 'Radioactive', groupCollection.getList()[2],
        186, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[6]], 1317642296);
    songCollection.addItem(song);
    song = new Song('system', 'Tiptoe', groupCollection.getList()[2],
        194, [musicGenreCollection.getList()[6]], 120088828);
    songCollection.addItem(song);
    song = new Song('system', 'It`s time', groupCollection.getList()[2],
        240, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[6]], 519963927);
    songCollection.addItem(song);
    song = new Song('system', 'Demon', groupCollection.getList()[2],
        177, [musicGenreCollection.getList()[6],
          musicGenreCollection.getList()[7]], 1396795710);
    songCollection.addItem(song);
    song = new Song('system', 'On top of the World',
        groupCollection.getList()[2],
        192, [musicGenreCollection.getList()[4]], 633653476);
    songCollection.addItem(song);
    song = new Song('system', 'Amsterdan', groupCollection.getList()[2],
        241, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[6]], 97045455);
    songCollection.addItem(song);
    song = new Song('system', 'Hear me', groupCollection.getList()[2],
        235, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[6]], 51130564);
    songCollection.addItem(song);
    song = new Song('system', 'Every Night', groupCollection.getList()[2],
        217, [musicGenreCollection.getList()[6]], 51130564);
    songCollection.addItem(song);
    song = new Song('system', 'Bleeding out', groupCollection.getList()[2],
        223, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[7]], 199785974);
    songCollection.addItem(song);
    song = new Song('system', 'Underdog', groupCollection.getList()[2],
        209, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[6]], 44648530);
    songCollection.addItem(song);
    song = new Song('system', 'Nothing left to say',
        groupCollection.getList()[2],
        537, [musicGenreCollection.getList()[5]], 55087574);
    songCollection.addItem(song);
    song = new Song('system', 'Cha-Ching', groupCollection.getList()[2],
        249, [musicGenreCollection.getList()[6],
          musicGenreCollection.getList()[7]], 55828624);
    songCollection.addItem(song);
    song = new Song('system', 'Working Man', groupCollection.getList()[2],
        233, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[6]], 23048585);
    songCollection.addItem(song);
    song = new Song('system', 'Tokyo', groupCollection.getList()[2],
        233, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[7]], 12190729);
    songCollection.addItem(song);

    // Kiss: Love Gun
    song = new Song('system', 'I stole your love', groupCollection.getList()[3],
        180, [musicGenreCollection.getList()[8]], 5858530);
    songCollection.addItem(song);
    song = new Song('system', 'Christine sixteen', groupCollection.getList()[3],
        194, [musicGenreCollection.getList()[8]], 3759498);
    songCollection.addItem(song);
    song = new Song('system', 'Got love for sale', groupCollection.getList()[3],
        208, [musicGenreCollection.getList()[9]], 869311);
    songCollection.addItem(song);
    song = new Song('system', 'Shock Me', groupCollection.getList()[3],
        226, [musicGenreCollection.getList()[8]], 11150807);
    songCollection.addItem(song);
    song = new Song('system', 'Tomorrow and Tonight',
        groupCollection.getList()[3],
        218, [musicGenreCollection.getList()[8]], 1033253);
    songCollection.addItem(song);
    song = new Song('system', 'Love Gun', groupCollection.getList()[3],
        198, [musicGenreCollection.getList()[9]], 45801026);
    songCollection.addItem(song);
    song = new Song('system', 'Holligan', groupCollection.getList()[3],
        179, [musicGenreCollection.getList()[8]], 1054181);
    songCollection.addItem(song);
    song = new Song('system', 'Almost Human', groupCollection.getList()[3],
        167, [musicGenreCollection.getList()[9]], 1053783);
    songCollection.addItem(song);
    song = new Song('system', 'Plaster Caster', groupCollection.getList()[3],
        208, [musicGenreCollection.getList()[8]], 3029606);
    songCollection.addItem(song);
    song = new Song('system', 'Then she kissed me',
        groupCollection.getList()[3],
        182, [musicGenreCollection.getList()[9]], 1291050);
    songCollection.addItem(song);

    // Lady A: Ocean
    song = new Song('system', 'What if I never get over you',
        groupCollection.getList()[4], 206, [musicGenreCollection.getList()[11]],
        101678826);
    songCollection.addItem(song);
    song = new Song('system', 'Pictures', groupCollection.getList()[4],
        178, [musicGenreCollection.getList()[10]], 5727156);
    songCollection.addItem(song);
    song = new Song('system', 'Crazy Love', groupCollection.getList()[4],
        205, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[11]], 2615478);
    songCollection.addItem(song);
    song = new Song('system', 'You can do you', groupCollection.getList()[4],
        248, [musicGenreCollection.getList()[10]], 1151075);
    songCollection.addItem(song);
    song = new Song('system', 'What I`m leaving for',
        groupCollection.getList()[4],
        203, [musicGenreCollection.getList()[10]], 5044290);
    songCollection.addItem(song);
    song = new Song('system', 'Be patient with my love',
        groupCollection.getList()[4],
        306, [musicGenreCollection.getList()[11]], 3078149);
    songCollection.addItem(song);
    song = new Song('system', 'Alright', groupCollection.getList()[4],
        196, [musicGenreCollection.getList()[4]], 1354923);
    songCollection.addItem(song);
    song = new Song('system', 'Let it be love', groupCollection.getList()[4],
        218, [musicGenreCollection.getList()[10],
          musicGenreCollection.getList()[11]], 1970636);
    songCollection.addItem(song);
    song = new Song('system', 'On a night like this',
        groupCollection.getList()[4],
        203, [musicGenreCollection.getList()[4]], 1636559);
    songCollection.addItem(song);
    song = new Song('system', 'Boots',
        groupCollection.getList()[4],
        275, [musicGenreCollection.getList()[10],
          musicGenreCollection.getList()[11]], 3488799);
    songCollection.addItem(song);
    song = new Song('system', 'The thing that wreeks you',
        groupCollection.getList()[4],
        275, [musicGenreCollection.getList()[10]], 1467732);
    songCollection.addItem(song);
    song = new Song('system', 'Mansion',
        groupCollection.getList()[4],
        192, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[11]], 1200675);
    songCollection.addItem(song);
    song = new Song('system', 'Ocean',
        groupCollection.getList()[4],
        210, [musicGenreCollection.getList()[10]], 47686228);
    songCollection.addItem(song);

    // One Direction: Up all night
    song = new Song('system', 'What makes you beutiful',
        groupCollection.getList()[5],
        199, [musicGenreCollection.getList()[4]], 675098541);
    songCollection.addItem(song);
    song = new Song('system', 'Gotta be you', groupCollection.getList()[5],
        240, [musicGenreCollection.getList()[4]], 90723091);
    songCollection.addItem(song);
    song = new Song('system', 'One thing', groupCollection.getList()[5],
        197, [musicGenreCollection.getList()[4]], 230441115);
    songCollection.addItem(song);
    song = new Song('system', 'Mora than this', groupCollection.getList()[5],
        229, [musicGenreCollection.getList()[4]], 125239630);
    songCollection.addItem(song);
    song = new Song('system', 'Up all night', groupCollection.getList()[5],
        194, [musicGenreCollection.getList()[4]], 94225626);
    songCollection.addItem(song);
    song = new Song('system', 'I wish', groupCollection.getList()[5],
        216, [musicGenreCollection.getList()[4]], 68933970);
    songCollection.addItem(song);
    song = new Song('system', 'Tell me a lie', groupCollection.getList()[5],
        198, [musicGenreCollection.getList()[4]], 47851684);
    songCollection.addItem(song);
    song = new Song('system', 'Taken', groupCollection.getList()[5],
        237, [musicGenreCollection.getList()[4]], 67548244);
    songCollection.addItem(song);
    song = new Song('system', 'I want', groupCollection.getList()[5],
        173, [musicGenreCollection.getList()[4]], 59629020);
    songCollection.addItem(song);
    song = new Song('system', 'Everything about you',
        groupCollection.getList()[5],
        217, [musicGenreCollection.getList()[4]], 42726360);
    songCollection.addItem(song);
    song = new Song('system', 'Same Mistakes', groupCollection.getList()[5],
        218, [musicGenreCollection.getList()[4]], 52084588);
    songCollection.addItem(song);
    song = new Song('system', 'Save you tonight', groupCollection.getList()[5],
        205, [musicGenreCollection.getList()[4]], 39771367);
    songCollection.addItem(song);
    song = new Song('system', 'Stole my hearth', groupCollection.getList()[5],
        205, [musicGenreCollection.getList()[4]], 46179908);
    songCollection.addItem(song);
    song = new Song('system', 'Stand Up', groupCollection.getList()[5],
        175, [musicGenreCollection.getList()[4]], 48647134);
    songCollection.addItem(song);
    song = new Song('system', 'Moments', groupCollection.getList()[5],
        262, [musicGenreCollection.getList()[4]], 77491031);
    songCollection.addItem(song);
    song = new Song('system', 'Another World', groupCollection.getList()[5],
        203, [musicGenreCollection.getList()[4]], 24305196);
    songCollection.addItem(song);
    song = new Song('system', 'Na Na Na', groupCollection.getList()[5],
        185, [musicGenreCollection.getList()[4]], 41504717);
    songCollection.addItem(song);
    song = new Song('system', 'I should have kissed you',
        groupCollection.getList()[5],
        215, [musicGenreCollection.getList()[4]], 35900352);
    songCollection.addItem(song);

    // Harry Styles: Fine Line
    song = new Song('system', 'Golden', artistCollection.getList()[16],
        208, [musicGenreCollection.getList()[12]], 554551715);
    songCollection.addItem(song);
    song = new Song('system', 'Watermelon Sugar',
        artistCollection.getList()[16],
        174, [musicGenreCollection.getList()[4]], 1694942359);
    songCollection.addItem(song);
    song = new Song('system', 'Adore you', artistCollection.getList()[16],
        207, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[12]], 1073694332);
    songCollection.addItem(song);
    song = new Song('system', 'Lights Up', artistCollection.getList()[16],
        172, [musicGenreCollection.getList()[4]], 535870737);
    songCollection.addItem(song);
    song = new Song('system', 'Cherry', artistCollection.getList()[16],
        259, [musicGenreCollection.getList()[10]], 214415394);
    songCollection.addItem(song);
    song = new Song('system', 'Falling', artistCollection.getList()[16],
        240, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[10]], 712059101);
    songCollection.addItem(song);
    song = new Song('system', 'To be so lonely', artistCollection.getList()[16],
        192, [musicGenreCollection.getList()[12]], 164488544);
    songCollection.addItem(song);
    song = new Song('system', 'She', artistCollection.getList()[16],
        360, [musicGenreCollection.getList()[10],
          musicGenreCollection.getList()[12]], 213429664);
    songCollection.addItem(song);
    song = new Song('system', 'Sunflower', artistCollection.getList()[16],
        221, [musicGenreCollection.getList()[4]], 213429664);
    songCollection.addItem(song);
    song = new Song('system', 'Canyon Moon', artistCollection.getList()[16],
        189, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[12]], 126801063);
    songCollection.addItem(song);
    song = new Song('system', 'Treat People', artistCollection.getList()[16],
        197, [musicGenreCollection.getList()[4]], 116555816);
    songCollection.addItem(song);
    song = new Song('system', 'Fine Line', artistCollection.getList()[16],
        377, [musicGenreCollection.getList()[10]], 222423367);
    songCollection.addItem(song);

    // Liam Payne: Midnight Hour
    song = new Song('system', 'Midnight', artistCollection.getList()[17],
        257, [musicGenreCollection.getList()[13]], 574879);
    songCollection.addItem(song);
    song = new Song('system', 'Y wanna know', artistCollection.getList()[17],
        240, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[13]], 131300871);
    songCollection.addItem(song);
    song = new Song('system', 'Live Forever', artistCollection.getList()[17],
        174, [musicGenreCollection.getList()[4]], 48375820);
    songCollection.addItem(song);
    song = new Song('system', 'Let me go', artistCollection.getList()[17],
        174, [musicGenreCollection.getList()[13]], 912997592);
    songCollection.addItem(song);
    song = new Song('system', 'For You', artistCollection.getList()[17],
        244, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[13]], 378706274);
    songCollection.addItem(song);
    song = new Song('system', 'Midnight', artistCollection.getList()[17],
        190, [musicGenreCollection.getList()[13]], 293464395);
    songCollection.addItem(song);

    // Zayn Malik
    song = new Song('system', 'Calamity', artistCollection.getList()[18],
        187, [musicGenreCollection.getList()[2]], 12691860);
    songCollection.addItem(song);
    song = new Song('system', 'Better', artistCollection.getList()[18],
        174, [musicGenreCollection.getList()[4]], 124335939);
    songCollection.addItem(song);
    song = new Song('system', 'Outside', artistCollection.getList()[18],
        208, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[13]], 17855096);
    songCollection.addItem(song);
    song = new Song('system', 'Vibez', artistCollection.getList()[18],
        163, [musicGenreCollection.getList()[13]], 108741241);
    songCollection.addItem(song);
    song = new Song('system', 'When Love`s Around',
        artistCollection.getList()[18],
        191, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[13]], 13195161);
    songCollection.addItem(song);
    song = new Song('system', 'Conexion', artistCollection.getList()[18],
        196, [musicGenreCollection.getList()[4]], 15586075);
    songCollection.addItem(song);
    song = new Song('system', 'Sweat', artistCollection.getList()[18],
        232, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[13]], 31232124);
    songCollection.addItem(song);
    song = new Song('system', 'Unfuckwitable', artistCollection.getList()[18],
        164, [musicGenreCollection.getList()[4]], 11821436);
    songCollection.addItem(song);
    song = new Song('system', 'Windowsill', artistCollection.getList()[18],
        188, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[13]], 12016757);
    songCollection.addItem(song);
    song = new Song('system', 'Tightrope', artistCollection.getList()[18],
        204, [musicGenreCollection.getList()[4]], 27437561);
    songCollection.addItem(song);
    song = new Song('system', 'River Road', artistCollection.getList()[18],
        236, [musicGenreCollection.getList()[4]], 12459507);
    songCollection.addItem(song);

    // The Beatles: Abbey Road
    song = new Song('system', 'Came Together', groupCollection.getList()[6],
        259, [musicGenreCollection.getList()[5]], 500996275);
    songCollection.addItem(song);
    song = new Song('system', 'Something', groupCollection.getList()[6],
        182, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 197809861);
    songCollection.addItem(song);
    song = new Song('system', 'Maxwell`s silver hammer',
        groupCollection.getList()[6],
        207, [musicGenreCollection.getList()[5]], 38467987);
    songCollection.addItem(song);
    song = new Song('system', 'Oh! Darling', groupCollection.getList()[6],
        207, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 98672656);
    songCollection.addItem(song);
    song = new Song('system', 'Octopus`s garden', groupCollection.getList()[6],
        170, [musicGenreCollection.getList()[5]], 57630717);
    songCollection.addItem(song);
    song = new Song('system', 'I want you', groupCollection.getList()[6],
        467, [musicGenreCollection.getList()[9],
          musicGenreCollection.getList()[14]], 53182937);
    songCollection.addItem(song);
    song = new Song('system', 'Here cames the sun',
        groupCollection.getList()[6],
        185, [musicGenreCollection.getList()[5]], 798246500);
    songCollection.addItem(song);
    song = new Song('system', 'Because', groupCollection.getList()[6],
        165, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 40706466);
    songCollection.addItem(song);
    song = new Song('system', 'You never give me your money',
        groupCollection.getList()[6],
        242, [musicGenreCollection.getList()[5]], 36968096);
    songCollection.addItem(song);
    song = new Song('system', 'Sun King', groupCollection.getList()[6],
        146, [musicGenreCollection.getList()[5]], 28450293);
    songCollection.addItem(song);
    song = new Song('system', 'Mean Mr Mustard', groupCollection.getList()[6],
        66, [musicGenreCollection.getList()[5]], 24228069);
    songCollection.addItem(song);
    song = new Song('system', 'Plythene Pam', groupCollection.getList()[6],
        72, [musicGenreCollection.getList()[9],
          musicGenreCollection.getList()[11]], 197809861);
    songCollection.addItem(song);
    song = new Song('system', 'She came in throught the bathroom window',
        groupCollection.getList()[6],
        118, [musicGenreCollection.getList()[9],
          musicGenreCollection.getList()[14]], 31718242);
    songCollection.addItem(song);
    song = new Song('system', 'Golden Slumbers', groupCollection.getList()[6],
        118, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 68699065);
    songCollection.addItem(song);
    song = new Song('system', 'Carry the weight', groupCollection.getList()[6],
        96, [musicGenreCollection.getList()[9]], 46401855);
    songCollection.addItem(song);
    song = new Song('system', 'The End', groupCollection.getList()[6],
        141, [musicGenreCollection.getList()[9]], 30801570);
    songCollection.addItem(song);
    song = new Song('system', 'Her Majestry', groupCollection.getList()[6],
        25, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 210795);
    songCollection.addItem(song);
    // John Lennon: Imagine
    song = new Song('system', 'Imagine', artistCollection.getList()[21],
        187, [musicGenreCollection.getList()[5]], 438913507);
    songCollection.addItem(song);
    song = new Song('system', 'Crippled Inside', artistCollection.getList()[21],
        232, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[6]], 8086737);
    songCollection.addItem(song);
    song = new Song('system', 'Jealous Guy', artistCollection.getList()[21],
        257, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[6]], 91475924);
    songCollection.addItem(song);
    song = new Song('system', 'It`s so hard', artistCollection.getList()[21],
        149, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 4331360);
    songCollection.addItem(song);
    song = new Song('system', 'I don`t wanna be a soldier mama',
        artistCollection.getList()[21],
        368, [musicGenreCollection.getList()[5]], 4187994);
    songCollection.addItem(song);
    song = new Song('system', 'Gimme some truth',
        artistCollection.getList()[21],
        197, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[6]], 11105229);
    songCollection.addItem(song);
    song = new Song('system', 'Oh my love', artistCollection.getList()[21],
        168, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[6]], 14836288);
    songCollection.addItem(song);
    song = new Song('system', 'How do you sleep',
        artistCollection.getList()[21],
        339, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 8098121);
    songCollection.addItem(song);
    song = new Song('system', 'How?', artistCollection.getList()[21],
        226, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 5646833);
    songCollection.addItem(song);
    song = new Song('system', 'Oh Yoko!', artistCollection.getList()[21],
        140, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 17496624);
    songCollection.addItem(song);

    // Paul McCartney: Ram
    song = new Song('system', 'Too many people', artistCollection.getList()[22],
        250, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 6863960);
    songCollection.addItem(song);
    song = new Song('system', '3 legs', artistCollection.getList()[22],
        167, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 2714543);
    songCollection.addItem(song);
    song = new Song('system', 'Ram On', artistCollection.getList()[22],
        149, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[6]], 8637460);
    songCollection.addItem(song);
    song = new Song('system', 'Uncle Albert', artistCollection.getList()[22],
        295, [musicGenreCollection.getList()[4]], 22941555);
    songCollection.addItem(song);
    song = new Song('system', 'Smile Away', artistCollection.getList()[22],
        232, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[5]], 2736337);
    songCollection.addItem(song);
    song = new Song('system', 'Hearth of the country',
        artistCollection.getList()[22],
        143, [musicGenreCollection.getList()[11],
          musicGenreCollection.getList()[14]], 9635537);
    songCollection.addItem(song);
    song = new Song('system', 'Monkberry moon delight',
        artistCollection.getList()[22],
        324, [musicGenreCollection.getList()[5]], 7117266);
    songCollection.addItem(song);
    song = new Song('system', 'Eat at home', artistCollection.getList()[22],
        202, [musicGenreCollection.getList()[5]], 2376957);
    songCollection.addItem(song);
    song = new Song('system', 'Loney haired lady',
        artistCollection.getList()[22],
        365, [musicGenreCollection.getList()[6],
          musicGenreCollection.getList()[10]], 2676222);
    songCollection.addItem(song);
    song = new Song('system', 'The back seat of my car',
        artistCollection.getList()[22],
        270, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 3383090);
    songCollection.addItem(song);

    // Coldplay: Parachutes
    song = new Song('system', 'Don`t Panic', groupCollection.getList()[7],
        136, [], 112382468);
    songCollection.addItem(song);
    song = new Song('system', 'Shiver', groupCollection.getList()[7],
        304, [], 116223914);
    songCollection.addItem(song);
    song = new Song('system', 'Spies', groupCollection.getList()[7],
        318, [], 41078826);
    songCollection.addItem(song);
    song = new Song('system', 'Sparks', groupCollection.getList()[7],
        227, [], 254177620);
    songCollection.addItem(song);
    song = new Song('system', 'Yellow', groupCollection.getList()[7],
        266, [], 1128578545);
    songCollection.addItem(song);
    song = new Song('system', 'Trouble', groupCollection.getList()[7],
        273, [], 238281703);
    songCollection.addItem(song);
    song = new Song('system', 'Parachutes', groupCollection.getList()[7],
        46, [], 42228543);
    songCollection.addItem(song);
    song = new Song('system', 'High Speed', groupCollection.getList()[7],
        256, [], 62863840);
    songCollection.addItem(song);
    song = new Song('system', 'We never change', groupCollection.getList()[7],
        249, [], 52865794);
    songCollection.addItem(song);
    song = new Song('system', 'Everything`s not lost',
        groupCollection.getList()[7],
        436, [], 33973788);
    songCollection.addItem(song);

    // Avicii: True
    song = new Song('system', 'Wake me up', artistCollection.getList()[29],
        247, [], 1545638734);
    songCollection.addItem(song);
    song = new Song('system', 'You make me', artistCollection.getList()[29],
        233, [], 255997677);
    songCollection.addItem(song);
    song = new Song('system', 'Hey Brother', artistCollection.getList()[29],
        255, [], 739019409);
    songCollection.addItem(song);
    song = new Song('system', 'Addicted to you', artistCollection.getList()[29],
        148, [], 272688892);
    songCollection.addItem(song);
    song = new Song('system', 'Dear Boy', artistCollection.getList()[29],
        479, [], 64345803);
    songCollection.addItem(song);
    song = new Song('system', 'Liar Liar', artistCollection.getList()[29],
        238, [], 48008532);
    songCollection.addItem(song);
    song = new Song('system', 'Shame on me', artistCollection.getList()[29],
        253, [], 26075);
    songCollection.addItem(song);
    song = new Song('system', 'Lay me down', artistCollection.getList()[29],
        300, [], 43920245);
    songCollection.addItem(song);
    song = new Song('system', 'Hope there`s someone',
        artistCollection.getList()[29],
        381, [], 18315426);
    songCollection.addItem(song);
    song = new Song('system', 'Heart upon my sleeve',
        artistCollection.getList()[29],
        283, [], 24035616);
    songCollection.addItem(song);

    // Eminem: The marshall mathers LP2
    song = new Song('system', 'Bad Guy', artistCollection.getList()[30],
        434, [], 97923199);
    songCollection.addItem(song);
    song = new Song('system', 'Parking Lot', artistCollection.getList()[30],
        55, [], 25918050);
    songCollection.addItem(song);
    song = new Song('system', 'Rhyme of reason', artistCollection.getList()[30],
        301, [], 55467690);
    songCollection.addItem(song);
    song = new Song('system', 'So much better', artistCollection.getList()[30],
        261, [], 50784292);
    songCollection.addItem(song);
    song = new Song('system', 'Survival', artistCollection.getList()[30],
        272, [], 214651935);
    songCollection.addItem(song);
    song = new Song('system', 'Legacy', artistCollection.getList()[30],
        296, [], 126771801);
    songCollection.addItem(song);
    song = new Song('system', 'Asshole', artistCollection.getList()[30],
        288, [], 51790205);
    songCollection.addItem(song);
    song = new Song('system', 'Berzerk', artistCollection.getList()[30],
        238, [], 251906414);
    songCollection.addItem(song);
    song = new Song('system', 'Rap God', artistCollection.getList()[30],
        363, [], 822016140);
    songCollection.addItem(song);
    song = new Song('system', 'Brainless', artistCollection.getList()[30],
        286, [], 46613413);
    songCollection.addItem(song);
    song = new Song('system', 'Stronger than I was',
        artistCollection.getList()[30],
        336, [], 56536523);
    songCollection.addItem(song);
    song = new Song('system', 'The Monster', artistCollection.getList()[30],
        250, [], 720540047);
    songCollection.addItem(song);
    song = new Song('system', 'So Far...', artistCollection.getList()[30],
        317, [], 47300740);
    songCollection.addItem(song);
    song = new Song('system', 'Love Game', artistCollection.getList()[30],
        296, [], 60994346);
    songCollection.addItem(song);
    song = new Song('system', 'Headlights', artistCollection.getList()[30],
        343, [], 129092152);
    songCollection.addItem(song);
    song = new Song('system', 'Evil Twin', artistCollection.getList()[30],
        356, [], 26757945);
    songCollection.addItem(song);

    // Melendi: Un alumno más
    song = new Song('system', 'La promesa', artistCollection.getList()[31],
        233, [], 83676437);
    songCollection.addItem(song);
    song = new Song('system', 'Tocado y hundido',
        artistCollection.getList()[31],
        211, [], 59231642);
    songCollection.addItem(song);
    song = new Song('system', 'La religión de los iditas',
        artistCollection.getList()[31],
        208, [], 18765869);
    songCollection.addItem(song);
    song = new Song('system', 'Saraluna', artistCollection.getList()[31],
        432, [], 10880610);
    songCollection.addItem(song);
    song = new Song('system', 'Cenizas de la eternidad',
        artistCollection.getList()[31],
        296, [], 10734574);
    songCollection.addItem(song);
    song = new Song('system', 'El amor es un arte',
        artistCollection.getList()[31],
        265, [], 18460719);
    songCollection.addItem(song);
    song = new Song('system', 'Septiembre', artistCollection.getList()[31],
        246, [], 14582086);
    songCollection.addItem(song);
    song = new Song('system', 'Colgado de la vecina',
        artistCollection.getList()[31],
        218, [], 10410559);
    songCollection.addItem(song);
    song = new Song('system', 'Tú de Elvis y yo de Marilyn',
        artistCollection.getList()[31],
        224, [], 6293233);
    songCollection.addItem(song);
    song = new Song('system', 'Posdata', artistCollection.getList()[31],
        276, [], 19760635);
    songCollection.addItem(song);
    song = new Song('system', 'El gordo y el narco',
        artistCollection.getList()[31],
        205, [], 4930715);
    songCollection.addItem(song);

    // Michael Jackson: Thriller
    song = new Song('system', 'Wanna Be Startin` Somethin`',
        artistCollection.getList()[32],
        303, [], 125542268);
    songCollection.addItem(song);
    song = new Song('system', 'Baby be mine', artistCollection.getList()[32],
        260, [], 36552767);
    songCollection.addItem(song);
    song = new Song('system', 'The girl is mine',
        artistCollection.getList()[32],
        224, [], 77750323);
    songCollection.addItem(song);
    song = new Song('system', 'Thriller', artistCollection.getList()[32],
        297, [], 388589029);
    songCollection.addItem(song);
    song = new Song('system', 'Beat me', artistCollection.getList()[32],
        258, [], 679687887);
    songCollection.addItem(song);
    song = new Song('system', 'Billie Jean', artistCollection.getList()[32],
        294, [], 1091933963);
    songCollection.addItem(song);
    song = new Song('system', 'Human Nature', artistCollection.getList()[32],
        242, [], 122229562);
    songCollection.addItem(song);
    song = new Song('system', 'PYT', artistCollection.getList()[32],
        239, [], 274494258);
    songCollection.addItem(song);
    song = new Song('system', 'The lady of my life',
        artistCollection.getList()[32],
        300, [], 37852017);
    songCollection.addItem(song);

    // Skrillex: Recess
    song = new Song('system', 'All is far in love and brostep',
        artistCollection.getList()[33],
        249, [], 35186244);
    songCollection.addItem(song);
    song = new Song('system', 'Recess', artistCollection.getList()[33],
        237, [], 107700469);
    songCollection.addItem(song);
    song = new Song('system', 'Stranger', artistCollection.getList()[33],
        289, [], 25689827);
    songCollection.addItem(song);
    song = new Song('system', 'Try it out', artistCollection.getList()[33],
        229, [], 49789644);
    songCollection.addItem(song);
    song = new Song('system', 'Coast is clear', artistCollection.getList()[33],
        243, [], 16848931);
    songCollection.addItem(song);
    song = new Song('system', 'Dirty Vibe', artistCollection.getList()[33],
        206, [], 33312153);
    songCollection.addItem(song);
    song = new Song('system', 'Ragga Bomb', artistCollection.getList()[33],
        258, [], 44239405);
    songCollection.addItem(song);
    song = new Song('system', 'Doompy Poomp', artistCollection.getList()[33],
        205, [], 10617562);
    songCollection.addItem(song);
    song = new Song('system', 'Fuck That', artistCollection.getList()[33],
        232, [], 16058513);
    songCollection.addItem(song);
    song = new Song('system', 'Erase my mind', artistCollection.getList()[33],
        302, [], 36659823);
    songCollection.addItem(song);
    song = new Song('system', 'Fire Away', artistCollection.getList()[33],
        341, [], 13648545);
    songCollection.addItem(song);
  }
  let song = new Song('system', 'High Speed', artistCollection.getList()[30],
      256, [], 62863840);
  songCollection.addItem(song);

  //
  song = new Song('system', 'High Speed', artistCollection.getList()[30],
      256, [], 62863840);
  songCollection.addItem(song);

  // Álbumes dentro de la colección del sistema
  {
    // Calle 13
    let album = new Album('system', 'Entre los que quieran',
        groupCollection.getList()[0], 2010,
        [songCollection.getList()[0], songCollection.getList()[1],
          songCollection.getList()[2], songCollection.getList()[3],
          songCollection.getList()[4], songCollection.getList()[5],
          songCollection.getList()[6], songCollection.getList()[7],
          songCollection.getList()[8], songCollection.getList()[9],
          songCollection.getList()[10], songCollection.getList()[11],
          songCollection.getList()[12], songCollection.getList()[13]]);
    albumCollection.addItem(album);
    // René Pérez Joglar
    album = new Album('system', 'Residente',
        artistCollection.getList()[0], 2017,
        [songCollection.getList()[14], songCollection.getList()[15],
          songCollection.getList()[16], songCollection.getList()[17],
          songCollection.getList()[18], songCollection.getList()[19],
          songCollection.getList()[20], songCollection.getList()[21],
          songCollection.getList()[22], songCollection.getList()[23],
          songCollection.getList()[24], songCollection.getList()[25],
          songCollection.getList()[26]]);
    albumCollection.addItem(album);

    // Nirvana
    album = new Album('system', 'Nevermind',
        groupCollection.getList()[1], 1991,
        [songCollection.getList()[27], songCollection.getList()[28],
          songCollection.getList()[29], songCollection.getList()[30],
          songCollection.getList()[31], songCollection.getList()[32],
          songCollection.getList()[33], songCollection.getList()[34],
          songCollection.getList()[35], songCollection.getList()[36],
          songCollection.getList()[37], songCollection.getList()[38],
          songCollection.getList()[39]]);
    albumCollection.addItem(album);
    // Kurt Cobain
    album = new Album('system', 'Montage of Heck',
        artistCollection.getList()[3], 2015,
        [songCollection.getList()[40], songCollection.getList()[41],
          songCollection.getList()[42], songCollection.getList()[43],
          songCollection.getList()[44], songCollection.getList()[45],
          songCollection.getList()[46], songCollection.getList()[47],
          songCollection.getList()[48], songCollection.getList()[49],
          songCollection.getList()[50], songCollection.getList()[51],
          songCollection.getList()[52]]);
    albumCollection.addItem(album);

    // Imagine Dragons
    album = new Album('system', 'Night Visions',
        groupCollection.getList()[2], 2012,
        [songCollection.getList()[53], songCollection.getList()[54],
          songCollection.getList()[55], songCollection.getList()[56],
          songCollection.getList()[57], songCollection.getList()[58],
          songCollection.getList()[59], songCollection.getList()[60],
          songCollection.getList()[61], songCollection.getList()[62],
          songCollection.getList()[63], songCollection.getList()[64],
          songCollection.getList()[65], songCollection.getList()[66]]);
    albumCollection.addItem(album);

    // Kiss
    album = new Album('system', 'Love Gun',
        groupCollection.getList()[3], 1977,
        [songCollection.getList()[67], songCollection.getList()[68],
          songCollection.getList()[69], songCollection.getList()[70],
          songCollection.getList()[71], songCollection.getList()[72],
          songCollection.getList()[73], songCollection.getList()[74],
          songCollection.getList()[75], songCollection.getList()[76]]);
    albumCollection.addItem(album);

    // Lady A
    album = new Album('system', 'Ocean',
        groupCollection.getList()[4], 2019,
        [songCollection.getList()[77], songCollection.getList()[78],
          songCollection.getList()[79], songCollection.getList()[80],
          songCollection.getList()[81], songCollection.getList()[82],
          songCollection.getList()[83], songCollection.getList()[84],
          songCollection.getList()[85], songCollection.getList()[86],
          songCollection.getList()[87], songCollection.getList()[88],
          songCollection.getList()[89]]);
    albumCollection.addItem(album);

    // One Direction
    album = new Album('system', 'Up all night',
        groupCollection.getList()[5], 2011,
        [songCollection.getList()[90], songCollection.getList()[91],
          songCollection.getList()[92], songCollection.getList()[93],
          songCollection.getList()[94], songCollection.getList()[95],
          songCollection.getList()[96], songCollection.getList()[97],
          songCollection.getList()[98], songCollection.getList()[99],
          songCollection.getList()[100], songCollection.getList()[101],
          songCollection.getList()[102], songCollection.getList()[103],
          songCollection.getList()[104], songCollection.getList()[105],
          songCollection.getList()[106], songCollection.getList()[107]]);
    albumCollection.addItem(album);
    // Harry Styles
    album = new Album('system', 'Fine Line',
        artistCollection.getList()[16], 2019,
        [songCollection.getList()[108], songCollection.getList()[109],
          songCollection.getList()[110], songCollection.getList()[111],
          songCollection.getList()[112], songCollection.getList()[113],
          songCollection.getList()[114], songCollection.getList()[115],
          songCollection.getList()[116], songCollection.getList()[117],
          songCollection.getList()[118], songCollection.getList()[119]]);
    albumCollection.addItem(album);
    // Leam Payne
    album = new Album('system', 'Midnight Hour',
        artistCollection.getList()[17], 2020,
        [songCollection.getList()[120], songCollection.getList()[121],
          songCollection.getList()[122], songCollection.getList()[123],
          songCollection.getList()[124], songCollection.getList()[125]]);
    albumCollection.addItem(album);
    // Zayn Malik
    album = new Album('system', 'Nobody is listening',
        artistCollection.getList()[18], 2021,
        [songCollection.getList()[126], songCollection.getList()[127],
          songCollection.getList()[128], songCollection.getList()[129],
          songCollection.getList()[130], songCollection.getList()[131],
          songCollection.getList()[132], songCollection.getList()[133],
          songCollection.getList()[134], songCollection.getList()[135],
          songCollection.getList()[136]]);
    albumCollection.addItem(album);

    // The Beatles
    album = new Album('system', 'Abbey Road',
        groupCollection.getList()[6], 1969,
        [songCollection.getList()[137], songCollection.getList()[138],
          songCollection.getList()[139], songCollection.getList()[140],
          songCollection.getList()[141], songCollection.getList()[142],
          songCollection.getList()[143], songCollection.getList()[144],
          songCollection.getList()[145], songCollection.getList()[146],
          songCollection.getList()[147], songCollection.getList()[148],
          songCollection.getList()[149], songCollection.getList()[150],
          songCollection.getList()[151], songCollection.getList()[152],
          songCollection.getList()[153]]);
    albumCollection.addItem(album);
    // John Lennon
    album = new Album('system', 'Imagine',
        artistCollection.getList()[21], 1971,
        [songCollection.getList()[154], songCollection.getList()[155],
          songCollection.getList()[156], songCollection.getList()[157],
          songCollection.getList()[158], songCollection.getList()[159],
          songCollection.getList()[160], songCollection.getList()[161],
          songCollection.getList()[162], songCollection.getList()[163]]);
    albumCollection.addItem(album);
    // Paul McCartney
    album = new Album('system', 'Ram',
        artistCollection.getList()[21], 1971,
        [songCollection.getList()[164], songCollection.getList()[165],
          songCollection.getList()[166], songCollection.getList()[167],
          songCollection.getList()[168], songCollection.getList()[169],
          songCollection.getList()[170], songCollection.getList()[171],
          songCollection.getList()[172], songCollection.getList()[173]]);
    albumCollection.addItem(album);

    // Coldplay
    album = new Album('system', 'Parachutes',
        groupCollection.getList()[7], 2000,
        [songCollection.getList()[174], songCollection.getList()[175],
          songCollection.getList()[176], songCollection.getList()[177],
          songCollection.getList()[178], songCollection.getList()[179],
          songCollection.getList()[180], songCollection.getList()[181],
          songCollection.getList()[182], songCollection.getList()[183]]);
    albumCollection.addItem(album);

    // Avicci
    album = new Album('system', 'True',
        artistCollection.getList()[29], 2013,
        [songCollection.getList()[184], songCollection.getList()[185],
          songCollection.getList()[186], songCollection.getList()[187],
          songCollection.getList()[188], songCollection.getList()[189],
          songCollection.getList()[190], songCollection.getList()[191],
          songCollection.getList()[192], songCollection.getList()[193]]);
    albumCollection.addItem(album);

    // Eminem
    album = new Album('system', 'The marshall mathers LP2',
        artistCollection.getList()[30], 2000,
        [songCollection.getList()[194], songCollection.getList()[195],
          songCollection.getList()[196], songCollection.getList()[197],
          songCollection.getList()[198], songCollection.getList()[199],
          songCollection.getList()[200], songCollection.getList()[201],
          songCollection.getList()[202], songCollection.getList()[203],
          songCollection.getList()[204], songCollection.getList()[205],
          songCollection.getList()[206], songCollection.getList()[207],
          songCollection.getList()[208], songCollection.getList()[209]]);
    albumCollection.addItem(album);

    // Melendi
    album = new Album('system', 'Un alumno más',
        artistCollection.getList()[31], 2014,
        [songCollection.getList()[210], songCollection.getList()[211],
          songCollection.getList()[212], songCollection.getList()[213],
          songCollection.getList()[214], songCollection.getList()[215],
          songCollection.getList()[216], songCollection.getList()[217],
          songCollection.getList()[218], songCollection.getList()[219],
          songCollection.getList()[220]]);
    albumCollection.addItem(album);

    // Michael Jackson
    album = new Album('system', 'Thriller',
        artistCollection.getList()[32], 1982,
        [songCollection.getList()[221], songCollection.getList()[222],
          songCollection.getList()[223], songCollection.getList()[224],
          songCollection.getList()[225], songCollection.getList()[226],
          songCollection.getList()[227], songCollection.getList()[228],
          songCollection.getList()[229]]);
    albumCollection.addItem(album);

    // Skrillex
    album = new Album('system', 'Recess',
        artistCollection.getList()[33], 2014,
        [songCollection.getList()[230], songCollection.getList()[231],
          songCollection.getList()[232], songCollection.getList()[233],
          songCollection.getList()[234], songCollection.getList()[235],
          songCollection.getList()[235], songCollection.getList()[237],
          songCollection.getList()[238], songCollection.getList()[239],
          songCollection.getList()[240]]);
    albumCollection.addItem(album);
  }
  // Playlists dentro de la colección del sistema
  {
    let playlist = new Playlist('system', 'playlist1',
        [songCollection.getList()[0],
          songCollection.getList()[11], songCollection.getList()[23],
          songCollection.getList()[35], songCollection.getList()[47]]);
    playlistCollection.addItem(playlist);
    playlist = new Playlist('system', 'playlist2', [songCollection.getList()[1],
      songCollection.getList()[12], songCollection.getList()[24],
      songCollection.getList()[36], songCollection.getList()[48]]);
    playlistCollection.addItem(playlist);
    playlist = new Playlist('system', 'playlist3', [songCollection.getList()[2],
      songCollection.getList()[13], songCollection.getList()[25],
      songCollection.getList()[37], songCollection.getList()[49]]);
    playlistCollection.addItem(playlist);
  }
}
