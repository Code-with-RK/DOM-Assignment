function addStudent() {
    var studentname = document.sample.studentname.value;
    var studentroll = document.sample.studentroll.value;
    var std = document.sample.std.value;
    var email = document.sample.email.value;
    var mobile = document.sample.mobile.value;

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));

    td1.innerHTML = '<input type="hidden" name="studentname[]" value=" '+studentname+'">'+studentname;
    td2.innerHTML = '<input type="hidden" name="studentroll[]" value=" '+studentroll+'">'+studentroll;
    td3.innerHTML = '<input type="hidden" name="std[]" value=" '+std+'">'+std;
    td4.innerHTML = '<input type="hidden" name="email[]" value=" '+email+'">'+email;
    td5.innerHTML = '<input type="hidden" name="mobile[]" value=" '+mobile+'">'+mobile;
    td6.innerHTML = '<input type="button" name="up" value="Update" onclick="UpStud(this);" class="btn btn-primary">';
    td7.innerHTML = '<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn btn-danger">';

    if (studentname == '') return;
    if (studentroll == '') return;

    document.getElementById("tbl").appendChild(tr);

    localStorage.setItem('Student Name', studentname);
    localStorage.setItem('Student Roll', studentroll);
    localStorage.setItem('Class', std);
    localStorage.setItem('Email', email);
    localStorage.setItem('Mobile', mobile);
}

function UpStud(stud) {
    var studentname = document.sample.studentname.value;
    var studentroll = document.sample.studentroll.value;
    var std = document.sample.std.value;
    var email = document.sample.email.value;
    var mobile = document.sample.mobile.value;
    var s = stud.parentNode.parentNode;

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));

    td1.innerHTML = '<input type="text" id="studentname" value size="20" maxlength="245" name="studentname1">';
    td2.innerHTML = '<input type="number" id="studentroll" value size="10" name="studentroll1">';
    td3.innerHTML = '<input type="number" id="std" value size="10" name="std1">';
    td4.innerHTML = '<input type="email" id="email" value size="20" maxlength="245" name="email1">';
    td5.innerHTML = '<input type="number" id="mobile" value size="10" name="mobile1">';
    td6.innerHTML = '<input type="button" name="up" value="Update" onclick="addUpStud(this);" class="btn btn-primary">';
    td7.innerHTML = '<input type="button" name="add" value="Delete" onclick="delStudent(this);" class="btn btn-danger">';

    document.getElementById("tbl").replaceChild(tr, s);
}

function addUpStud(stud) {
    var studentname = document.sample.studentname1.value;
    var studentroll = document.sample.studentroll1.value;
    var std = document.sample.std1.value;
    var email = document.sample.email1.value;
    var mobile = document.sample.mobile1.value;
    var s = stud.parentNode.parentNode;

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));

    td1.innerHTML = '<input type="hidden" name="studentname[]" value=" '+studentname+'">'+studentname;
    td2.innerHTML = '<input type="hidden" name="studentroll[]" value=" '+studentroll+'">'+studentroll;
    td3.innerHTML = '<input type="hidden" name="std[]" value=" '+std+'">'+std;
    td4.innerHTML = '<input type="hidden" name="email[]" value=" '+email+'">'+email;
    td5.innerHTML = '<input type="hidden" name="mobile[]" value=" '+mobile+'">'+mobile;
    td6.innerHTML = '<input type="button" name="up" value="Update" onclick="UpStud(this);" class="btn btn-primary">';
    td7.innerHTML = '<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn btn-danger">';
    document.getElementById("tbl").replaceChild(tr, s);

}

function delStudent(Stud) {
    var s = Stud.parentNode.parentNode;
    s.parentNode.removeChild(s);
}
