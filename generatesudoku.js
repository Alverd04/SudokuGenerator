// Set main variables
var board = createBoard()

// Set values to the board cells

initBoard(board)


// Create a clean new board for the user

var user_board = createBoard()
createHTMLBoard()

console.log(board)


// Solve button
$(document).ready(function () {
    $('button').click(function(){ 
        solve(board)
    })
});





























// This function is going to create a 2D array in order to have a board to work with
function createBoard(){
    var board = new Array(9)
    for(i = 0; i < board.length; i++){
        board[i] = new Array(9)
    }

    // Now we set all values to none in order to change the default value
    for(i = 0; i < board.length; i++){
        for(j = 0; j < board.length; j++){
            board[i][j] = ' '
        }
    }
    return board
}

// This function is going to generate a solved board
function initBoard(board){

    // Number lists

    // Cells
    var first_cell = []
    var second_cell = []
    var third_cell = []
    var fourth_cell = []
    var fifth_cell = []
    var sixth_cell = []
    var seventh_cell = []
    var eigth_cell = []
    var nineth_cell = []

    // Rows
    var first_row = []
    var second_row = []
    var third_row = []
    var fourth_row = []
    var fifth_row = []
    var sixth_row = []
    var seventh_row = []
    var eigth_row = []
    var nineth_row = []

    // Cols
    var first_col = []
    var second_col = []
    var third_col = []
    var fourth_col = []
    var fifth_col = []
    var sixth_col = []
    var seventh_col = []
    var eigth_col = []
    var nineth_col = []



    for(i = 0; i < board.length; i++){
        for(j = 0; j < board.length; j++){
            
            // First cell
            if(i == 0 || i == 1 || i == 2 ){
                if(j == 0 || j == 1 ||j == 2){
                    var pass = false
                    while(pass == false){
                        num = Math.floor(Math.random()*9+1)
                        if(first_cell.includes(num) == true){
                            pass = false
                            num = Math.floor(Math.random()*9+1)
                        }
                        else{
                            first_cell.push(num)
                            pass = true
                        }
                        board[i][j] = num  
                    }   
                }
            }
            // Second cell
            if(i == 0 || i == 1 || i == 2 ){
                if(j == 3 || j == 4 ||j == 5){
                    var pass = false
                    while(pass == false){
                        num = Math.floor(Math.random()*9+1)
                        if(second_cell.includes(num) == true){
                            pass = false
                            num = Math.floor(Math.random()*9+1)
                        }
                        else{
                            second_cell.push(num)
                            pass = true
                        }
                        board[i][j] = num  
                    }   
                }
            }
            // Third cell
            if(i == 0 || i == 1 || i == 2 ){
                if(j == 6 || j == 7 ||j == 8){
                    var pass = false
                    while(pass == false){
                        num = Math.floor(Math.random()*9+1)
                        if(third_cell.includes(num) == true){
                            pass = false
                            num = Math.floor(Math.random()*9+1)
                        }
                        else{
                            third_cell.push(num)
                            pass = true
                        }
                        board[i][j] = num  
                    }   
                }
            }
            // Fourth cell
            if(i == 3 || i == 4 || i == 5 ){
                if(j == 0 || j == 1 ||j == 2){
                    var pass = false
                    while(pass == false){
                        num = Math.floor(Math.random()*9+1)
                        if(fourth_cell.includes(num) == true){
                            pass = false
                            num = Math.floor(Math.random()*9+1)
                        }
                        else{
                            fourth_cell.push(num)
                            pass = true
                        }
                        board[i][j] = num  
                    }   
                }
            }
            // Fifth cell
            if(i == 3 || i == 4 || i == 5 ){
                if(j == 3 || j == 4 ||j == 5){
                    var pass = false
                    while(pass == false){
                        num = Math.floor(Math.random()*9+1)
                        if(fifth_cell.includes(num) == true){
                            pass = false
                            num = Math.floor(Math.random()*9+1)
                        }
                        else{
                            fifth_cell.push(num)
                            pass = true
                        }
                        board[i][j] = num  
                    }   
                }
            }
            // Sixth cell
            if(i == 3 || i == 4 || i == 5 ){
                if(j == 6 || j == 7 ||j == 8){
                    var pass = false
                    while(pass == false){
                        num = Math.floor(Math.random()*9+1)
                        if(sixth_cell.includes(num) == true){
                            pass = false
                            num = Math.floor(Math.random()*9+1)
                        }
                        else{
                            sixth_cell.push(num)
                            pass = true
                        }
                        board[i][j] = num  
                    }   
                }
            }
            // Seventh cell
            if(i == 6 || i == 7 || i == 8 ){
                if(j == 0 || j == 1 ||j == 2){
                    var pass = false
                    while(pass == false){
                        num = Math.floor(Math.random()*9+1)
                        if(seventh_cell.includes(num) == true){
                            pass = false
                            num = Math.floor(Math.random()*9+1)
                        }
                        else{
                            seventh_cell.push(num)
                            pass = true
                        }
                        board[i][j] = num  
                    }   
                }
            }
            // Eigth cell
            if(i == 6 || i == 7 || i == 8 ){
                if(j == 3 || j == 4 ||j == 5){
                    var pass = false
                    while(pass == false){
                        num = Math.floor(Math.random()*9+1)
                        if(eigth_cell.includes(num) == true){
                            pass = false
                            num = Math.floor(Math.random()*9+1)
                        }
                        else{
                            eigth_cell.push(num)
                            pass = true
                        }
                        board[i][j] = num  
                    }   
                }
            }
            // Nineth cell
            if(i == 6 || i == 7 || i == 8 ){
                if(j == 6 || j == 7 ||j == 8){
                    var pass = false
                    while(pass == false){
                        num = Math.floor(Math.random()*9+1)
                        if(nineth_cell.includes(num) == true){
                            pass = false
                            num = Math.floor(Math.random()*9+1)
                        }
                        else{
                            nineth_cell.push(num)
                            pass = true
                        }
                        board[i][j] = num  
                    }   
                }
            }
        }
    }
    
}




// This method is going to generate the html code
function createHTMLBoard(){
    var table = document.createElement('table')
    table.id = 'user_board'
    document.body.append(table)
    for(i = 0; i < board.length; i++){
        var tr = document.createElement('tr')
        tr.id = 'row'+i
        table.append(tr)
        for(j = 0; j<  board.length; j++){
            var td = document.createElement('input')
            if(i == 0 || i == 1 || i ==2){
                if(j == 0 || j == 1 || j == 2){
                    td.className = 'cell1'
                }
                if(j == 3 || j == 4 || j == 5){
                    td.className = 'cell2'
                }
                if(j == 6 || j == 7 || j == 8){
                    td.className = 'cell3'
                }
            }
            if(i == 3 || i == 4 || i ==5){
                if(j == 0 || j == 1 || j == 2){
                    td.className = 'cell4'
                }
                if(j == 3 || j == 4 || j == 5){
                    td.className = 'cell5'
                }
                if(j == 6 || j == 7 || j == 8){
                    td.className = 'cell6'
                }
            }
            if(i == 6 || i == 7 || i ==8){
                if(j == 0 || j == 1 || j == 2){
                    td.className = 'cell7'
                }
                if(j == 3 || j == 4 || j == 5){
                    td.className = 'cell8'
                }
                if(j == 6 || j == 7 || j == 8){
                    td.className = 'cell9'
                }
            }
            tr.appendChild(td)
        }
    }
}


function solve(board){
    var user_board_array = []
    $('#user_board tr').each(function(){
        $(this).find('input').each(function(){
            user_board_array.push($(this).val())
        })
    })

    for(i = 0; i < board.length; i++){
        for(j = 0; j < board.length; j++){
            
        }
    }
}