const TicketManager = require("./ticketManager.js")
const EmailService = require("./emailService.js");
const DatabaseService = require("./databaseService.js");
const { timeStamp } = require("console");

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

ticketManager.on("buy", (email, price, timeStamp) => {
    emailService.send(email),
    databaseService.save(email, price, timeStamp)
});

ticketManager.on("error", (error) => {
    console.error(`Gracefully handling our error: ${error}`);
});

const onBuy = (email) => {
    console.log("I will be removed soon: ", email)
}

ticketManager.buy("test@gmail.com", 20);
ticketManager.buy("test@gmail.com", 20);
ticketManager.removeAllListeners("buy", onBuy)
console.log(`We have: ${ticketManager.listenerCount("buy")} listener(s)`)
ticketManager.buy("test@gmail.com", 20);
ticketManager.buy("test@gmail.com", 20);
console.log(`We have ${ticketManager.listenerCount("buy")} listener(s)`)
console.log(`We have ${ticketManager.listenerCount("error")} listener(s)`)

console.log(`We added a new event listerner into our code,which brings our ticket listenre to: ${ticketManager.listenerCount("buy")} listener(s)`)