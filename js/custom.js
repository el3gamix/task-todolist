var items = [
    {
        itemName: "visit my sister",
        itemDetails: "she ask me to visit her",
        itemDate: "8/8/2022",
        itemRate: "4"
    },
    {
        itemName: "play football",
        itemDetails: "play football with friends",
        itemDate: "9/8/2022",
        itemRate: "2"
    },
    {
        itemName: "learn css",
        itemDetails: "learn css from udimy course",
        itemDate: "10/8/2022",
        itemRate: "3"
    },
];

function startList()
{
    items.forEach(function (element, index)
    {
        var oneRow = document.querySelector(".listHeader");
        var newRow = oneRow.cloneNode(true);
        newRow.querySelector(".itemName").innerText = element.itemName;
        newRow.querySelector(".itemDetails").innerText = element.itemDetails;
        newRow.querySelector(".itemDate").innerText = element.itemDate;

        newRow.querySelector(".itemRate").innerText = "";
        var oneStar = document.querySelector("#starRate").cloneNode(true);
        for (var i = 0; i < parseInt(element.itemRate); i++)
        {
            newRow.querySelector(".itemRate").innerHTML += oneStar.innerHTML;
        }

        newRow.querySelector(".operations").innerHTML = "";
        newRow.querySelector(".operations").innerHTML = "<i onclick='deleteItem(this);' class='fa-solid fa-trash-can'></i> &nbsp; <i onclick='editItem(this);' class='fa-solid fa-pen-to-square'></i>";

        newRow.querySelector(".change-list").innerHTML = "";
        newRow.querySelector(".change-list").innerHTML = "&nbsp; <i onclick='upListHeader(this);' class='fa-solid fa-angles-up'></i> &nbsp; <i onclick='downListHeader(this);' class='fa-solid fa-angles-down'></i>";

        document.querySelector(".itemsList").appendChild(newRow);

    });
};

/* ******************** delete operation *************************************** */
var deletedRow;

function deleteItem(deleteIcon)
{
    document.querySelector("#lightScreen").style.display = "block";
    document.querySelector("#deleteDialoug").style.display = "block";

    var deleteItemName = deleteIcon.parentNode.parentNode.querySelector(".itemName").innerText;
    document.querySelector("#deleteItemName").innerHTML = deleteItemName;

    deletedRow = deleteIcon.parentNode.parentNode;
}
function noDelete()
{
    document.querySelector("#lightScreen").style.display = "none";
    document.querySelector("#deleteDialoug").style.display = "none";
}
function yesDelete()
{
    deletedRow.remove();
    noDelete();
}

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
function createItem()
{
    document.querySelector("#lightScreen").style.display = "block";
    document.querySelector("#createDialoug").style.display = "block";
}
function cancelNew()
{
    document.querySelector("#lightScreen").style.display = "none";
    document.querySelector("#createDialoug").style.display = "none";
}
function saveNew()
{
    var itemName = document.querySelector("#itemName").value;
    var itemDetails = document.querySelector("#itemDetails").value;
    var itemDate = document.querySelector("#itemDate").value;
    var itemRate = document.querySelector("input[name='itemRate']:checked").value;

    var oneRow = document.querySelector(".listHeader");
    var newRow = oneRow.cloneNode(true);
    newRow.querySelector(".itemName").innerText = itemName;
    newRow.querySelector(".itemDetails").innerText = itemDetails;
    newRow.querySelector(".itemDate").innerText = itemDate;

    newRow.querySelector(".itemRate").innerText = "";
    var oneStar = document.querySelector("#starRate").cloneNode(true);
    for (var i = 0; i < parseInt(itemRate); i++)
    {
        newRow.querySelector(".itemRate").innerHTML += oneStar.innerHTML;
    }

    newRow.querySelector(".operations").innerHTML = "";
    newRow.querySelector(".operations").innerHTML = "<i onclick='deleteItem(this);' class='fa-solid fa-trash-can'></i> &nbsp; <i onclick='editItem(this);' class='fa-solid fa-pen-to-square delete'></i>";

    newRow.querySelector(".change-list").innerHTML = "";
    newRow.querySelector(".change-list").innerHTML = 
        "&nbsp; <i onclick='upListHeader(this);' <i class='fa-solid fa-angles-up'></i> &nbsp; <i onclick='downListHeader(this);' class='fa-solid fa-angles-down'></i>";

    document.querySelector(".itemsList").appendChild(newRow);

    cancelNew();
}

// Edit Item
var editedRow;
function updateItem()
{
    editedRow.querySelector(".itemName").innerText = document.querySelector("#itemName").value;
    editedRow.querySelector(".itemDetails").innerText = document.querySelector("#itemDetails").value;
    editedRow.querySelector(".itemDate").innerText = document.querySelector("#itemDate").value;

    editedRow.querySelector(".itemRate").innerText = "";
    var oneStar = document.querySelector("#starRate").cloneNode(true);
    for (var i = 0; i < parseInt(document.querySelector("input[name='itemRate']:checked").value); i++)
    {
        editedRow.querySelector(".itemRate").innerHTML += oneStar.innerHTML;
    }

    closeEditDialoug();
}

function editItem(editIcon)
{
    document.querySelector("#editLightScreen").style.display = "block";
    document.querySelector("#editDialoug").style.display = "block";

    editedRow = editIcon.parentNode.parentNode;
    document.querySelector("#itemName").value = editedRow.querySelector(".itemName").innerText;
    document.querySelector("#itemDetails").value = editedRow.querySelector(".itemDetails").innerText;
    document.querySelector("#itemDate").value = editedRow.querySelector(".itemDate").innerText;

    var itemRate = editedRow.querySelector(".itemRate").innerText;
    document.querySelector("input[name='itemRate'][value='" + itemRate + "']").checked = true;

}
// closeEditDialoug
function closeEditDialoug()
{
    document.querySelector("#editLightScreen").style.display = "none";
    document.querySelector("#editDialoug").style.display = "none";
}
// function for up row in list to be above the previous row without go for the top of the list
function upListHeader(upIcon)
{
    var upRow = upIcon.parentNode.parentNode;
    var previousRow = upRow.previousElementSibling;
    if (previousRow != null)
    {
        upRow.parentNode.insertBefore(upRow, previousRow);
    }
}

// function for down row in list to be below the next row
function downListHeader(downIcon)
{
    var downRow = downIcon.parentNode.parentNode;
    var nextRow = downRow.nextElementSibling;
    if (nextRow != null)
    {
        downRow.parentNode.insertBefore(nextRow, downRow);
    }
}
