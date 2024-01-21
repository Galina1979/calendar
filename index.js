
function getDay(date) {
    let day = date.getDay();
    if (day == 0) {
        day = 7;
    }
    return day - 1;
}
function createCalendar(elem, year, month) {
    elem = document.querySelector(elem);
    elem.classList.add("elem");
  for (let currentMonth = 1; currentMonth <= 12; currentMonth++) {
        let d = new Date(year, currentMonth - 1); 
        let div = `<div>${currentMonth}.${year}</div>`;
        let table = `<table>
        <tr>
            <th>Пн</th>
            <th>Вт</th>
            <th>Ср</th>
            <th>Чт</th>
            <th>Пт</th>
            <th>Сб</th>
            <th>Вс</th>
        </tr>
        <tr>`;
        for (let i = 0; i < getDay(d); i++) {
            table += '<td></td>';
        }
        while (d.getMonth() == currentMonth - 1) {
            table += `<td>${d.getDate()}</td>`;
            if (getDay(d) % 7 == 6) {
                table += '</tr><tr>';
            }
            d.setDate(d.getDate() + 1);
        }
        if (getDay(d) !== 0) {
            for (let i = getDay(d); i < 7; i++) {
                table += '<td></td>';
            }
        }
        table += '</tr></table>';
        elem.innerHTML += div + '<br>' + table;
    }
}
createCalendar('body', +prompt('Enter year'), 1); 