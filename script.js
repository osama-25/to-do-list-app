function DeleteTask()
{
    var spanelm = event.target;
    spanelm.parentElement.remove();
}

var flag = true;
function TaskFinished()
{
    var checkbox = event.target;
    var text = checkbox.parentElement.childNodes[0];
    if(flag == true)
    {
        text.style.textDecoration = "line-through";
    }
    else
    {
        text.style.textDecoration = "none";
    }
    flag = !flag;
}

function AddTask()
{
    var text = document.getElementById("text");

    if(text.value != "")
    {
        var newtask = document.createElement("span");
        var checkmark = document.createElement("button");
        checkmark.innerHTML = "\u2713"
        checkmark.className = "checkbox";
        checkmark.addEventListener("click", TaskFinished);
        var tasktext = document.createElement("p");
        tasktext.innerHTML = text.value;
        var deletebutton = document.createElement("button");
        deletebutton.innerHTML = "\u00d7";
        deletebutton.addEventListener("click", DeleteTask);
        deletebutton.className = "deletebutton";

        newtask.append(tasktext);
        newtask.append(checkmark);
        newtask.append(deletebutton);

        var div = document.getElementById("taskdiv");
        div.append(newtask);
    }
    text.value = "";
}