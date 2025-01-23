function TodoApp() {
    let inputbox = document.querySelector("#taskinput");
    let arr = JSON.parse(localStorage.getItem("task")) || [];
    arr.push(inputbox.value); // [{task:value,"data":datetime}]

    localStorage.setItem(`task`, JSON.stringify(arr));

    getAllData();

    inputbox.value = "";
  }
  let btn = document.querySelector(".addtask");
  btn.addEventListener("click", TodoApp);

  // function get all data
  function getAllData() {
    //  looping for data rendering
    let tasklist = document.querySelector(".tasklist");
    tasklist.innerHTML = "";

    let data = JSON.parse(localStorage.getItem("task"));

    for (let i = 0; i < data.length; i++) {
      let div = document.createElement("div");
      let ptag = document.createElement("p");
      let editbtn = document.createElement("button");
      let deletebtn = document.createElement("button");
      ptag.innerText = data[i];
      ptag.contentEditable = "false";
      editbtn.innerText = "edit";
      deletebtn.innerText = "Delete";
      div.append(ptag);
      div.append(editbtn);
      div.append(deletebtn);
      div.classList.add("task");
      tasklist.append(div);

      deletebtn.onclick = function () {
        //console.log(this)
        data.splice(i, 1);
        localStorage.setItem("task", JSON.stringify(data));
        getAllData();
      };

      editbtn.onclick = function () {
        let v = ptag.contentEditable;

        if (v == "true") {
          // false==true , true==true
          ptag.contentEditable = "false";
          ptag.style.border = "";
          console.log("inside if");
          let d = ptag.innerText;
          data.splice(i, 1, d);
          localStorage.setItem("task", JSON.stringify(data));
          getAllData();
        } else {
          ptag.style.border = "2px solid darkgrey";
          ptag.contentEditable = "true";
          console.log("inside else");
        }
      };
    }
  }
  getAllData();
