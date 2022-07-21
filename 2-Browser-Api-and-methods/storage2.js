//ekhn local er key value er value gulake access korar jnno, key take copy

1. window.localStorage.getItem('yt-remote-device-id')
//ekta json data dibe
2.const nextIdJSON = window.localStorage.getItem('yt-remote-device-id')
3.nextIdJSON
4.const nextId = JSON.parse(nextIdJSON)
5.nextId
//ekhn ekta obj dibe
6.nextId.expiration
7.nextId.creation
//ebar number dibe 
//ei full process ta inspact e krbo

8.nextId.user = 'phero'
9.nextId
10.nextId.assign = 'web site'
11.nextId
12.const nextIdStringfied = JSON.stringify(nextId)
13.nextIdStringfied
//tahole ekhn json ta show hbe 













//local storage and session storage e kono object set korte hole JSON.stringify() korte hbe 