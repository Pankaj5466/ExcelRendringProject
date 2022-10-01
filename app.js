'use strict'

const button = document.querySelector('.btn'); //Get the button displayed on HTML page with .btn id

button.addEventListener('click',()=>{
    console.log("Button Clicked");

    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className; //Javascript varialbe naming convention is camelCase!
    console.log(className);
    if(className == "light-theme")
        button.textContent = 'Switch to Dark Theme'
    else
        button.textContent = 'Switch To Light Theme'
});

let fileName = "";
//Save File Path
document.getElementById('input').addEventListener('change',(e)=>{
    fileName = e.target.files[0];
    console.log("File Selected is \n",fileName);
})
let data=[{
    "name":"jayanth",
    "data":"scd",
    "abc":"sdef"
}]

document.querySelector('.excelbutton').addEventListener('click',()=>{
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(fileName);

    fileReader.onload = (event)=>{
        let data = event.target.result;
        let workbook  = XLSX.read(data,{type:'binary'});

        let jsonData="";

        workbook.SheetNames.forEach(sheet=>{
            let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);

            console.log(rowObject);
            jsonData +=JSON.stringify(rowObject,undefined,4);
           
        })
         document.getElementById("jsondata").innerHTML = jsonData;
    }
})