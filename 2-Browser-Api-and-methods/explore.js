const name = 15;
// document.getElementById('name');
//terminal e error dibe karon document ke chinena eta browser er sathe connected main js er modhe dom ke pabo na eta thake browser er modhe
//document namok object er modhe get element by id namer ekta method/func ke call korar shomoe 'name' pm take dichi
//document take bola hoe dom mane document object model
//dom er moto fetch keo run korte gele error khabo karon egula sudhu browser e chole ejonnno eder ke browser api bole

const student = {
    name: 'Jolil', friend: 'borsha', job: 'Business',
    makeMovie: function (name) {
        console.log(name);
    }
};
student.makeMovie('Din raat'); //student object er make movie func ke call korsi