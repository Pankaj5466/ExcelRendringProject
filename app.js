'use strict'

const callTopic = {
    title: ".call",
    about: `>Recall: function scope do not have this.
    >in JS, this is the object calling the function
    > they inherit this of lexo order
    > If our function uses this, then we need to call via .call`,

    code: `const bookFlight = AirIndia.book; //book is a function that used this 
    bookFlight("Pankaj","Delhi","Jharkhand"); //this will not be attached to this function call
    bookFlight.call("Pankaj","Delhi","Jharkhand"); //call will attach this`,

    image: `https://allma.si/blog/wp-content/uploads/2020/11/bind-vs-call-vs-apply.png`,

    extra: 'Extra Link or Reference Here',

    subTopic: undefined //Not declaring will have same meaning
}

const applyTopic = {
    title: "..bind :: most preferred",
    about: `>Bind also allow the pass of this
    > BUT , it does not immediately call , instead it reutnr 
    new function`,

    code: `const bookFlight = book.bind(AirIndia.book);
    bookFlight(userData); //call to happen now
    same as AirInida.book(userData)`,

    image: `https://allma.si/blog/wp-content/uploads/2020/11/bind-vs-call-vs-apply.png`,

    extra: 'Extra Link or Reference Here',

}

const topicHead = {
    title: 'call,apply and bind',
    about: "",
    code: "",
    image: "",
    extra: "",
    subTopic: [callTopic, applyTopic]
}

const topics = [topicHead, topicHead];


const button = document.querySelector('.btn'); //Get the button displayed on HTML page with .btn id

button.addEventListener('click', () => {
    console.log("Button Clicked");

    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className; //Javascript varialbe naming convention is camelCase!
    console.log(className);
    if (className == "light-theme")
        button.textContent = 'Switch to Dark Theme'
    else
        button.textContent = 'Switch To Light Theme'
});

let fileName = "";
//Save File Path
document.getElementById('input').addEventListener('change', (e) => {
    fileName = e.target.files[0];
    console.log("File Selected is \n", fileName);
})
let data = [{
    "name": "jayanth",
    "data": "scd",
    "abc": "sdef"
}]

document.querySelector('.excelbutton').addEventListener('click', () => {
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(fileName);

    fileReader.onload = (event) => {
        let data = event.target.result;
        let workbook = XLSX.read(data, { type: 'binary' });

        let jsonData = "";
        let jsonDataObject = [];

        //workbook.SheetNames.forEach(sheet=>{
        for (let i = 0; i < workbook.SheetNames.length; i++) {
            const sheet = workbook.SheetNames[i];
            let rowObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
            //let rowObject = XLSX.utils.sheet_to_html(workbook.Sheets[sheet]);

            //rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
            //  rowObject = XLSX.utils.sheet_to_txt(workbook.Sheets[sheet]);

            console.log(rowObject);
            jsonDataObject = [...jsonDataObject, ...rowObject];
            jsonData += JSON.stringify(rowObject, undefined, 4);
            break; //TO-DO: for now just complete the first sheet
        }
        //   document.getElementById("json-data").innerHTML = jsonData;
        createTable(jsonDataObject);
    }
})

const KEYS = [
    "Topic",
    "Summary",
    "Implication",
    "Image",
    "Reference"
];

const getTableCell = (text, classList) => {
    const divElement = document.createElement('div');
    divElement.append(text===undefined?"":text); //OR //divElement.innerHTML = value;
    divElement.classList = classList;
    return divElement;
}
const getTableRow = (topic, tbl) => {
    const tr = tbl.insertRow();

    //CREATING HTML Element=> https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
    
    /* IMP: you can create any html element you want with JavaScript code. You can append it to the cell by using appendChild. Since div in my example is an object and a reference to a DOM node after it gets appended you can set event handlers to it etc. */

    const topicCell  = getTableCell(topic.Topic,'topicCellStyle');
    const summaryCell = getTableCell(topic.Summary, 'summaryCellStyle');
    const implicationCell = getTableCell(topic.Implication, 'implicationCellStyle');
    const imageCell = getTableCell(topic.Image, 'imageCellStyle');
    const referenceCell = getTableCell(topic.Reference, 'referenceCellStyle');

    tr.insertCell(0).appendChild(topicCell);
    tr.insertCell(1).appendChild(summaryCell);
    tr.insertCell(2).appendChild(implicationCell);
    tr.insertCell(3).appendChild(imageCell);
    tr.insertCell(4).appendChild(referenceCell);

    return tr;  
}

const createTable = (topicArray) => {

    const body = document.body;
    const tbl = document.createElement('table'); //tbl is table

    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';

    for (let i = 0; i < topicArray.length; i++) {
        const tr = getTableRow(topicArray[i], tbl);; //tr is table row

        //addRow('table-data')


    }
    body.appendChild(tbl);

}


