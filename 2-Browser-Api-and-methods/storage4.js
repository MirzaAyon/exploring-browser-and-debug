95The resource < URL > was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally.
window.localStorage.getItem('def')
null
window.localStorage.getItem('def', 888)
null
window.localStorage.setItem('def', 888)
undefined
window.localStorage.setItem('def')
VM809: 1 Uncaught TypeError: Failed to execute 'setItem' on 'Storage': 2 arguments required, but only 1 present.
    at < anonymous >: 1: 21
        (anonymous) @VM809: 1
window.localStorage.getItemItem('def')
VM831: 1 Uncaught TypeError: window.localStorage.getItemItem is not a function
    at<anonymous>: 1: 21
        (anonymous) @VM831: 1
window.localStorage.getItem('def')
'888'
window.localStorage.getItem('yt-remote-device-id')
'{"data":"86168747-4844-44dd-a433-af1133c225f2","expiration":1687938969011,"creation":1656402969011}'
const nextIdJSON = window.localStorage.getItem('yt-remote-device-id')
undefined
nextIdJSON
'{"data":"86168747-4844-44dd-a433-af1133c225f2","expiration":1687938969011,"creation":1656402969011}'
const nextId = JSON.parse(nextIdJSON)
undefined
nextId
{ data: '86168747-4844-44dd-a433-af1133c225f2', expiration: 1687938969011, creation: 1656402969011 }
nextId.expiration
1687938969011
nextId.user = 'phero'
'phero'
nextId
{ data: '86168747-4844-44dd-a433-af1133c225f2', expiration: 1687938969011, creation: 1656402969011, user: 'phero' }
nextId.assign = 'web site'
'web site'
nextId
{ data: '86168747-4844-44dd-a433-af1133c225f2', expiration: 1687938969011, creation: 1656402969011, user: 'phero', assign: 'web site' }
const nextIdStringfied = JSON.stringify(nextId)
undefined
nextIdStringfied
'{"data":"86168747-4844-44dd-a433-af1133c225f2","expiration":1687938969011,"creation":1656402969011,"user":"phero","assign":"web site"}'

localStorage.setItem('yt-remote-device-id', nextIdStringfied)
undefined
//ekhn application- localstorage - new key value show hbe 


//local stroage je store hoye thake tar proman holo youtube e ekta video te giye mute kore dilam erpr local sto te dekhlam volume er muted true kora
//pore abr new kore youtube  e dhukle dekha jabe muted still ture dewa and video still muted thakbe 