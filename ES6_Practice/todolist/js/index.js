

class toDoList {
    id ='';
    content = '';
    isCompleted = ''
}

let saveLocalStorage = (ob, key) => {
    var str = JSON.stringify(ob);
    localStorage.setItem(key, str);
}
  
let getLocalStorage = (key) => {
        //Lấy dữ liệu từ localstorage ra (dữ liệu lấy là string)
    if (localStorage.getItem(key)) {
        var str = localStorage.getItem(key);
        //Parse dữ liệu về lại object
        var ob = JSON.parse(str);
        return ob;
    }
    return undefined;
}
window.onload = () => {
      //Lấy dữ liệu từ localstorage ra (dữ liệu lấy là string)
    if (localStorage.getItem('myTodoList')) {
        var str = localStorage.getItem('myTodoList');
        //Parse dữ liệu về lại object
        var ob = JSON.parse(str);
        console.log(ob)
        ob.reverse();
        let renderList = ''
        let renderhtml = ''
        for(let item of ob) {
            if(item.isCompleted === true) {
                renderhtml += `<li id="${item.id}" value="${item.content}" data-isCompleted="true">${item.content}<div class="buttons">
                <button class="remove" onclick="removeTodoList(${item.id})"><i class="fa fa-trash-alt"></i></button>
                <button class="complete"><i class="fas fa-check-circle"></i></button>
                </div> 
                </li>`
                
            }
            else {
                renderList += `<li class="list_todo" id="${item.id}" value="${item.content}" data-isCompleted="false">${item.content}<div class="buttons">
                <button class="remove" onclick="removeTodoList(${item.id})"><i class="fa fa-trash-alt"></i></button>
                <button class="complete" onclick="completeTodoList(${item.id})"><i class="fa fa-check-circle"></i></button>
                </div> 
            </li>`
               
            }
        }
        
        document.querySelector('#todo').insertAdjacentHTML('afterBegin',renderList)
        document.querySelector('#completed').insertAdjacentHTML('afterBegin',renderhtml)
    }
}
document.querySelector('#addItem').onclick = () => {
   
    let randomId = Math.floor(Math.pow(10, 4-1) + Math.random() * (Math.pow(10, 4) - Math.pow(10, 4-1) - 1));
    let content = document.querySelector('#newTask').value
    let renderList = `<li class="list_todo" id="${randomId}" value="${content}" data-isCompleted="false">${content} <div class="buttons">
        <button class="remove" onclick="removeTodoList(${randomId})"><i class="fa fa-trash-alt"></i></button>
        <button class="complete" onclick="completeTodoList(${randomId})"><i class="fa fa-check-circle"></i></button>
        </div> 
    </li>`
    document.querySelector('#todo').insertAdjacentHTML('afterBegin',renderList)
    let newList = new toDoList();
    newList.id = randomId;
    newList.content = content
    newList.isCompleted = false
    let lstTodo = getLocalStorage('myTodoList')
    if(lstTodo) {
        lstTodo.push(newList)
        saveLocalStorage(lstTodo, 'myTodoList')
    }
    else {
        let newArr = [];
        newArr.push(newList)
        saveLocalStorage(newArr, 'myTodoList')
    }
   
}

let removeTodoList = (todoId) => {
    const testid = document.getElementById(todoId)
    if(testid) {
        testid.remove();
        let lstTodo = getLocalStorage('myTodoList')
        let tmp = lstTodo.findIndex(x => x.id === todoId)
       
        lstTodo.splice(tmp, 1)
        saveLocalStorage(lstTodo, 'myTodoList')
    }
}

let completeTodoList = (todoId) => {
    let testid = document.getElementById(todoId)
    if(testid) {
        // console.log(testid.outerHTML)
        let lstTodo = getLocalStorage('myTodoList')
        lstTodo.find(x => {
            if(x.id === todoId)
                x.isCompleted = true
        })
        let renderhtml = `<li id="${todoId}" value="${testid.getAttribute("value")}" data-isCompleted="true">${testid.getAttribute("value")}<div class="buttons">
            <button class="remove" onclick="removeTodoList(${todoId})"><i class="fa fa-trash-alt"></i></button>
            <button class="complete"><i class="fas fa-check-circle"></i></button>
            </div> 
        </li>`
        document.querySelector('#completed').insertAdjacentHTML('afterBegin',renderhtml)
        testid.remove();
        saveLocalStorage(lstTodo, 'myTodoList')
    }
}


document.getElementById('two').onclick = () => {
    let lstTodo = getLocalStorage('myTodoList')
    let listtoDo = []
    lstTodo.filter(x => 
        { 
            if(x.isCompleted === false) {
                listtoDo.push(x)
            }   
        }
    ) 

    var tmplist = _.orderBy(listtoDo, ['content'], ['desc'])
    let renderList = ''

    for(let item of tmplist) {
        renderList += `<li class="list_todo" id="${item.id}" value="${item.content}" data-isCompleted="false">${item.content}<div class="buttons">
        <button class="remove" onclick="removeTodoList(${item.id})"><i class="fa fa-trash-alt"></i></button>
        <button class="complete" onclick="completeTodoList(${item.id})"><i class="fa fa-check-circle"></i></button>
        </div> 
    </li>`
    }
    document.querySelector('#todo').innerHTML = ''
    document.querySelector('#todo').insertAdjacentHTML('afterBegin',renderList)
}

document.getElementById('three').onclick = () => {
    
    let lstTodo = getLocalStorage('myTodoList')
    let listtoDo = []
    lstTodo.filter(x => 
        { 
            if(x.isCompleted === false) {
                listtoDo.push(x)
            }   
        }
    ) 

    var tmplist = _.orderBy(listtoDo, ['content'], ['asc'])
    let renderList = ''

    for(let item of tmplist) {
        renderList += `<li class="list_todo" id="${item.id}" value="${item.content}" data-isCompleted="false">${item.content}<div class="buttons">
        <button class="remove" onclick="removeTodoList(${item.id})"><i class="fa fa-trash-alt"></i></button>
        <button class="complete" onclick="completeTodoList(${item.id})"><i class="fa fa-check-circle"></i></button>
        </div> 
    </li>`
    }
    document.querySelector('#todo').innerHTML = ''
    document.querySelector('#todo').insertAdjacentHTML('afterBegin',renderList)
}