function AddClass(element, classname) {
    let containtsHide = false;
    let classes = element.getAttribute("class").split(' ');
    classes.forEach((val) => {
        if(val == classname) {
            containtsHide = true;
        }
    });

    if(!containtsHide) {
        element.setAttribute("class", classes + " " + classname);
    }
}

function RemoveClass(element, classname) {
    let newClasses = "";
    element.getAttribute("class").split(' ').forEach((val) => {
        if(val != classname) {
            newClasses += val;
        }
    });
    element.setAttribute("class", newClasses);
}