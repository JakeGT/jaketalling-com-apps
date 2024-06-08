function create_board(player_color) {
    // player_color: white = 0, black = 1
    let board = document.getElementById("board")
    let table = board.appendChild(document.createElement("table"))
    table.classList.add("chess-board")
    let row
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H"]

    row = table.appendChild(document.createElement("tr"))
    row.appendChild(document.createElement("th")) // top left corner square
    let th
    for (let i = 0; i < 8; i++) {
        th = document.createElement("th")
        if (player_color === 0) {
            th.appendChild(document.createTextNode(letters[i]))
        } else {
            th.appendChild(document.createTextNode(letters[7-i]))
        }
        row.appendChild(th)
    }

    let td
    for (let y = 0; y < 8; y++) {
        row = table.appendChild(document.createElement("tr"))
        th = document.createElement("th")
        if (player_color === 0) {
            th.appendChild(document.createTextNode(String(8-(y))))
        } else {
            th.appendChild(document.createTextNode(String(y+1)))
        }
        row.appendChild(th)
        for (let x = 0; x < 8; x++) {
            td = document.createElement("td")

            if ((x+y+player_color) % 2 === 0) {
                td.classList.add("white-square")
            } else {
                td.classList.add("black-square")
            }

            if (player_color === 0) {
                td.id = letters[x] + String(8-y)
            } else {
                td.id = letters[7-x] + String(y+1)
            }

            row.appendChild(td)
        }
    }
}