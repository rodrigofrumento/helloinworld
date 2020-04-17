let request = require('request')
const http = require('http')

let url = `http://ip-api.com/json/`
let data = ''

request(url, function (err, response, body){
    if(err){
        console.log(err)
    }else{
        let ipInfo = JSON.parse(body)
        data = `---Location---
                IP: ${ipInfo.query}
                Country: ${ipInfo.country}
                `
    console.log(data)
}})

var server = http.createServer(function(req, res){
    res.writeHead(200)
    res.write(data)
    res.end()
})
server.listen(3000, () => { console.log('Server running...')})
