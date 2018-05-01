/**
 * Created by EMMATHEM on 6/5/2017.
 */

//Preview Image after selected
$(document).ready(function () {
    $.uploadPreview({
        input_field: "#image-upload", // Default: .image-upload
        preview_box: "#image-preview", // Default: .image-preview
        label_field: "#image-label", // Default: .image-label
        label_default: "Choose File", // Default: Choose File
        label_selected: "Change File", // Default: Change File
        no_label: false // Default: false
    });
});

//form action based on selection
function showDiv(select) {
    document.getElementById('regional').style.display = "none";
    document.getElementById('national').style.display = "none";
    document.getElementById('curator').style.display = "none";
    document.getElementById('common').style.display = "none";
    if (select.value == '2') {
        document.getElementById('common').style.display = "block";
        document.getElementById('regional').style.display = "block";
    }
    if (select.value == '3') {
        document.getElementById('common').style.display = "block";
        document.getElementById('national').style.display = "block";
    }
    if (select.value == '4') {
        document.getElementById('curator').style.display = "block";
    }
}

function showLeader(select) {
    if (select.value == 'Yes') {
        document.getElementById('leader').style.display = "block";
    } else {
        document.getElementById('leader').style.display = "none";
    }
}

function showProgramming(select) {
    if (select.value == 'Yes') {
        document.getElementById('programming').style.display = "block";
    } else {
        document.getElementById('programming').style.display = "none";
    }
}

function showTeen(select) {
    if (select.value == 'Yes') {
        document.getElementById('work_teen').style.display = "block";
    } else {
        document.getElementById('work_teen').style.display = "none";
    }
}

function showEmploy(select) {
    if (select.value == 'Yes') {
        document.getElementById('employ').style.display = "block";
    } else {
        document.getElementById('employ').style.display = "none";
    }
}

function showVolunteer(select) {
    if (select.value == 'Yes') {
        document.getElementById('volunteer').style.display = "block";
    } else {
        document.getElementById('volunteer').style.display = "none";
    }
}
//disable disactivated on checkbox selected
function activateSubmit() {
    document.frm.sub.disabled = true;
    if (document.frm.check.checked == true) {
        document.frm.sub.disabled = false;
    }
    if (document.frm.check.checked == false) {
        document.frm.sub.enabled = false;
    }
}


//disable submmit button after click
function checkForm(form) {
    form.submit.disabled = true;
    form.submit.value = "Please wait..."
    return true;
}
//datepicker
    jQuery("#dofb").datepicker({
        dateFormat: 'dd-m-yy',
        changeYear: true,
        changeMonth: true,
        yearRange: '1960:2000'
    });

/* //count the text in the textarea
 jQuery('textarea').textCounter({
     containerClass: 'col-sm-6'
 });*/
