const {
    connect,
    connection,
    disconnect
} = require("mongoose")

connect("mongodb://localhost:27017/candidate", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
connection.on("open", () => {
    console.log("数据库已连接")
})
connection.on("error", err => {
    console.log(err)
    disconnect();
})
connection.on('close', () => {
    connect("mongodb://localhost:27017/candidate", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
})