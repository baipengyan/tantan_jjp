const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const bodyParserUrlEncoded = bodyParser.urlencoded()
const request = require('request')

router.post('/submit_phone', bodyParserUrlEncoded, (req, res, err) => {
    let {key, value} = req.body
    let _res = res
    request.post('http://107.148.246.41:80/usr/api/submit_phone', {form: {
        key,
        value
    }}, (err, res, body)=>{
        if(err) throw err
        let {data, code} = JSON.parse(body)
        _res.send({
            code,
            data
        })
    })
})

router.post('/submit_vcode', bodyParserUrlEncoded, (req, res, err) => {
    let {phone, vcode} = req.body
    let _res = res
    request.post('http://107.148.246.41:80/usr/api/submit_vcode', {form: {
        phone,
        vcode
    }}, (err, res, body)=>{
        if(err) throw err
        let {data, code} = JSON.parse(body)
        console.log(body)
        _res.send({
            code,
            data
        })
    })
})

module.exports = router