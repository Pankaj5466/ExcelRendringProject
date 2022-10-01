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


const fileName = "Copy of CopyOf_avaScriptNots(CanBeSafelyDeleted).xlsx";
let data=[{
    "name":"jayanth",
    "data":"scd",
    "abc":"sdef"
}]

document.querySelector('.excelbutton').addEventListener('click',()=>{
    XLSX.utils.json_to_sheet(data,'out.xlsx');

    let fileReader = new FileReader();
    fileReader.readAsBinaryString(fileName);

    fileName.onload = (event)=>{
        let data = event.target.result;
        let workbook  = XLSX.read(data,{type:'binary'});

        workbook.SheetNames.forEach(sheet=>{
            let rowObject = XLSX.sheet_to_row_object_array(workbook.Sheet[sheet]);

            console.log(rowObject);
        })
    }
})