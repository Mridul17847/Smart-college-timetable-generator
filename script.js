const slotMap = {

  "A11":"mon1",
  "B11":"mon2",
  "C11":"mon3",
  "A21":"mon4",
  "A14":"mon5",
  "B21":"mon6",
  "C21":"mon7",

  "D11":"tue1",
  "E11":"tue2",
  "F11":"tue3",
  "D21":"tue4",
  "E14":"tue5",
  "E21":"tue6",
  "F21":"tue7",

  "A12":"wed1",
  "B12":"wed2",
  "C12":"wed3",
  "A22":"wed4",
  "B14":"wed5",
  "B22":"wed6",
  "A24":"wed7",

  "D12":"thu1",
  "E12":"thu2",
  "F12":"thu3",
  "D22":"thu4",
  "F14":"thu5",
  "E22":"thu6",
  "F22":"thu7",

  "A13":"fri1",
  "B13":"fri2",
  "C13":"fri3",
  "A23":"fri4",
  "C14":"fri5",
  "B23":"fri6",
  "B24":"fri7"

};

function addSubject(){

  let subject =
      document.getElementById("subject")
      .value
      .trim();

  let faculty =
      document.getElementById("faculty")
      .value
      .trim();

  let slots =
      document.getElementById("slot")
      .value
      .trim();

  if(subject === "" || faculty === "" || slots === ""){

    alert("Please fill all fields");

    return;
  }

  let slotArray = slots.split("+");

  for(let slot of slotArray){

    slot = slot.trim();

    let cellId = slotMap[slot];

    if(!cellId){

      alert(slot + " slot not found");

      return;
    }

    let cell = document.getElementById(cellId);

    if(cell.innerHTML !== ""){

      alert(slot + " already has a subject");

      return;
    }

  }

  slotArray.forEach(slot => {

    slot = slot.trim();

    let cellId = slotMap[slot];

    let cell = document.getElementById(cellId);

    cell.innerHTML = `

      ${slot}
      <br><br>

      ${subject}
      <br>

      ${faculty}

    `;

  });

  document.getElementById("subject").value = "";

  document.getElementById("faculty").value = "";

  document.getElementById("slot").value = "";

}
function clearBySubject(){

  let subjectName =
      document.getElementById("clearSubjectName")
      .value
      .trim()
      .toLowerCase();

  if(subjectName === ""){

    alert("Enter subject name");

    return;
  }

  Object.values(slotMap).forEach(cellId => {

    let cell = document.getElementById(cellId);

    if(
      cell.innerHTML.toLowerCase()
      .includes(subjectName)
    ){

      cell.innerHTML = "";
    }

  });

  document.getElementById("clearSubjectName").value = "";

}