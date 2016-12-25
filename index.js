const express = require('express')
const LBCompiler = require('laravel-blade-compiler')

const APP = express()

APP.get('/', (request, resource) => {
    let output = LBCompiler({
        folder: './app/views/',
        path: './app/views/home.blade.php'
    })

    resource.send(output)
})

APP.listen(3000)