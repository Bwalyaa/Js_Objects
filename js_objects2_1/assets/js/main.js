let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];


// let allNames = edelMetallPreise.forEach((el) => {
//     allNames
// });

let allNames = [];
edelMetallPreise.forEach((el)=>{
    allNames.push(el.name)
})
console.log(allNames);

let allPrices = [];
edelMetallPreise.map((el)=>{
    allPrices.push(el.preiseGramEuro)
})
console.log(allPrices);

let allChanges = [];
edelMetallPreise.forEach((el)=>{
    allChanges.push(el.veraenderung)
})
console.log(allChanges);


let expensivePrices = edelMetallPreise.filter((el)=> el.preiseGramEuro > 50);

console.log(expensivePrices);

const table = document.createElement("table")

const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
const headers = ["Name", "Preis pro Gramm (Euro)", "Veränderung"];
headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);


const tbody = document.createElement("tbody");
edelMetallPreise.forEach((metal) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const priceCell = document.createElement("td");
    const changeCell = document.createElement("td");

    nameCell.textContent = metal.name;
    priceCell.textContent = metal.preiseGramEuro.toFixed(2); // auf zwei Dezimalstellen begrenzen
    changeCell.textContent = metal.veraenderung;

    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(changeCell);

    tbody.appendChild(row);
});

table.appendChild(tbody);

document.body.appendChild(table);

