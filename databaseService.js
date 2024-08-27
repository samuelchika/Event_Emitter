class DatabaseService {
    save(email, price, timestamp) {
        console.log(` Running query: INSERT INTO (emai, price, timestamp) VALUES (${email}, ${price}, ${timestamp})`);
    }
}

module.exports = DatabaseService