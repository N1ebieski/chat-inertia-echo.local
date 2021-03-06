import Echo from 'laravel-echo'
import Vue from 'vue'

window.io = require('socket.io-client')

// window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001'
})

Vue.prototype.$echo = window.Echo
