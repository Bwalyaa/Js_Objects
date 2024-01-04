const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

// function buildTable(el){
//     let table = document.getElementById("table-container")

//     for (let i = 0; i < el.length; i++){
//         let row = `<tr>
//         <td>${el[i].name}</td>
//         <td>${el[i].country}</td>
//         <td>${el[i].period_active}</td>
//         <td>${el[i].genre}</td>
//         </tr>
//         `
//         table.innerHTML += row
//     }

// }



function buildTable(el) {
    let table = document.getElementById("table-container");

    table.innerHTML = `
        <table border="1">
            <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Period Active</th>
                <th>Genre</th>
            </tr>
        </table>
    `;

    
    for (let i = 0; i < el.length; i++) {
        let row = `
            <tr>
                <td>${el[i].name}</td>
                <td>${el[i].country}</td>
                <td>${getPeriodActive(el[i].period_active)}</td>
                <td>${el[i].genre}</td>
            </tr>
        `;
        table.querySelector('table').innerHTML += row;
    }
}

function getPeriodActive(period) {
    if (period.end === "present") {
        return `${period.start} - Present`;
    } else if (period.extra) {
        return `${period.start} - ${period.end}, ${period.extra}`;
    } else {
        return `${period.start} - ${period.end}`;
    }
}

buildTable(singers)