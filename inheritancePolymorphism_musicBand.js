class MusicBand {
    createSong() {
        var totalSongs = Math.floor(Math.random() * 10);
        console.log("The Music Band has secured", totalSongs + " songs in the Top Charts.");
    }
}

class GuitarPlayer extends MusicBand {
    createSong() {
        var totalSongs = Math.floor(Math.random() * 10);
        console.log("The Guitarist has played in", totalSongs + " songs for the Music Band");
    }
    topSpot() {
        console.log("The Guitar Player has secured Top Guitarist spot for", Math.floor(Math.random() * 10), "Songs.");
    }
}

class PianoPlayer extends MusicBand {
    createSong() {
        var totalSongs = Math.floor(Math.random() * 10);
        console.log("The Pianist has played in", totalSongs + " songs for the Music Band");
    }
    topSpot() {
        console.log("The Piano Player has secured Top Pianist spot for", Math.floor(Math.random() * 10), "Songs.");
    }
}

class MusicBand2 {
    createSong() {
        var totalSongs = Math.floor(Math.random() * 10);
        console.log("The Music Band 2 has secured", totalSongs + " songs in the Top Charts.");
    }
}

class GuitarPlayer2 extends MusicBand2 {
    createSong() {
        var totalSongs = Math.floor(Math.random() * 10);
        console.log("The Guitarist 2 has played in", totalSongs + " songs for the Music Band 2");
    }
    topSpot() {
        console.log("The Guitar Player 2 has secured Top Guitarist spot for", Math.floor(Math.random() * 10), "Songs.");
    }
}

class PianoPlayer2 extends MusicBand2 {
    createSong() {
        var totalSongs = Math.floor(Math.random() * 10);
        console.log("The Pianist 2 has played in", totalSongs + " songs for the Music Band 2");
    }
    topSpot() {
        console.log("The Piano Player 2 has secured Top Pianist spot for", Math.floor(Math.random() * 10), "Songs.");
    }
}

var band1 = new MusicBand();
band1.createSong();

var guitarist1 = new GuitarPlayer();
guitarist1.createSong();
guitarist1.topSpot();

var pianist1 = new PianoPlayer();
pianist1.createSong();
pianist1.topSpot();

var band2 = new MusicBand2();
band2.createSong();

var guitarist2 = new GuitarPlayer2();
guitarist2.createSong();
guitarist2.topSpot();

var pianist2 = new PianoPlayer2();
pianist2.createSong();
pianist2.topSpot();
