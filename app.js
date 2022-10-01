'use strict'

const callTopic = {
    title:".call",
    about:`>Recall: function scope do not have this.
    >in JS, this is the object calling the function
    > they inherit this of lexo order
    > If our function uses this, then we need to call via .call`,

    code:`const bookFlight = AirIndia.book; //book is a function that used this 
    bookFlight("Pankaj","Delhi","Jharkhand"); //this will not be attached to this function call
    bookFlight.call("Pankaj","Delhi","Jharkhand"); //call will attach this`,

    image:`https://allma.si/blog/wp-content/uploads/2020/11/bind-vs-call-vs-apply.png`,

    extra:'Extra Link or Reference Here',

    subTopic:undefined //Not declaring will have same meaning
}

const applyTopic = {
    title:"..bind :: most preferred",
    about:`>Bind also allow the pass of this
    > BUT , it does not immediately call , instead it reutnr 
    new function`,

    code:`const bookFlight = book.bind(AirIndia.book);
    bookFlight(userData); //call to happen now
    same as AirInida.book(userData)`,
    
    image:`https://allma.si/blog/wp-content/uploads/2020/11/bind-vs-call-vs-apply.png`,

    extra:'Extra Link or Reference Here'  ,

}

const topicHead = {
    title:'call,apply and bind',
    about:"",
    code:"",
    image:"",
    extra:"",
    subTopic:[callTopic,applyTopic]
}

const  topics = [topicHead,topicHead];


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

        //workbook.SheetNames.forEach(sheet=>{
        for(let i=0;i<workbook.SheetNames.length;i++){
            const sheet = workbook.SheetNames[i];
            let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);

            console.log(rowObject);
            jsonData +=JSON.stringify(rowObject,undefined,4);
            break;
           
        }
         document.getElementById("json-data").innerHTML = jsonData;
    }
})



const createTable = (topicArray)=>{
    let x;
}

createTable(topics);
