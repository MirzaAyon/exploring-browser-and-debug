//39-5
// inspact - application - cookies - expand - shob info show hbe joto cookies ache
//ekta line thake name onno line e thake value

//inspact - console - document.cookie
//inspact e hozoborolo bhabe showing but application e shundor kore showing
//inspact e protek ta semicolon and space diye alada hoise check krbo
//inspact e dibo document.cookie.split('; ')
//tahole ekta array pabo
// erpr document.cookie.split('; ').map(c => console.log(c)) dibo
//tahole shob gula name value/key value akare pabo

//erpr document.cookie.split('; ').map(c => console.log(c.split('='))) dibo tokhn prottektar naam and value pabo

//ekta specific cookie ber korar jnno
// document.cookie.split('; ').find(c => c.includes('country'))
//country er place e ekta specific cookie er naam dibo

//document.cookie.split('; ').find(c => c.includes('c_user'))
//same as uporer ta


// document.cookie.split('; ').find(c => c.includes('c_user')).split('=')
//erpr eta dibo dile 2 part vaag hoye jabe


//1 no index ber korar jnno
// document.cookie.split('; ').find(c => c.includes('c_user')).split('=')[1]