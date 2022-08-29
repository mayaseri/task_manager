///<reference path="jquery.js"/>


class ToDoItem{
    constructor(title, description, date){
        this.title = title;
        this.description = description;
        this.date = date;
    }

}

function createTask(){
;    let task = 
    `<div class="taskItem">
        <div style="display: flex; justify-content: space-between;">
            <div style="display: flex; justify-content: space-between; gap: 10px; justify-items: start;">
                <ion-icon name="checkbox-outline"></ion-icon>
                <div>${$("#taskTitleInput").val()}</div>
            </div>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
        <div>
    </div>`
    $("#taskItem").live('click', function(e){
        console.log("jhbjej")
    })
    $(".task").append(task);
    $('#addTaskPopup').modal('hide');
    console.log($("#taskTitleInput").val());
}

function addTask(TaskCategoryId){

    $(TaskCategoryId).append()
}