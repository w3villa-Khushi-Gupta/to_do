function updation(c){
    let up_win=document.getElementById("update_win");
    up_win.style.display="block"

    let table=document.getElementById("display_table");
    let row_index= c.parentNode.parentNode.rowIndex;
    console.log(row_index);
    
    var btn=document.getElementById("update_button");
    btn.onclick=function(){
        console.log("update_button clicked", row_index);
        up_win.style.display="none"
        // let cells = row_index.getElementByTagName("td")
        let table = document.getElementById('display_table'); 
        let row = table.getElementsByTagName('tr')[row_index];
        let cells = row.getElementsByTagName('td');
        console.log(document.getElementById("up_task").value);
        for (let i = 0; i< cells.length-1; i++) {
            if(i == 0){
                cells[i].innerHTML = document.getElementById("up_task").value || cells[i].innerHTML;
            }
            else if (i == 1){
                cells[i].innerHTML = document.getElementById("up_date").value || cells[i].innerHTML;
            }
            else if (i == 2){
                cells[i].innerHTML = document.getElementById("up_des").value || cells[i].innerHTML;
            }    
           
        }    
       
    }

    // let btnC = document.getElementById("close");
    // btnC.onclick= function(){
    //     up_win.style.display="none"
    // }
}

function deletion(r){
    alert("Are you sure you want to delete?")
    
    var ind=r.parentNode.parentNode.rowIndex;
    document.getElementById("display_table").deleteRow(ind);
   

}

function createTable(x,y,z){
    
      const tab_body = document.querySelector("#t_body");
      const details = document.createElement("tr");
      details.innerHTML = `
                 <td  id="1">${x}</td>
                 <td  id="2">${z}</td>
                 <td  id="3">${y}</td>
                 <td><button class="btn btn-warning edit" onclick="updation(this)">Update</button>
                 <button class="btn btn-secondary delete" onclick="deletion(this)">Delete</button></td>`                 
    tab_body.appendChild(details);

    
}

function add_task(){
    let t_name_m=document.getElementById("main_task").value;
    let t_des_m=document.getElementById("main_task_des").value;
    let t_date_m=document.getElementById("main_date").value;

    let table=document.getElementById("table_win");
    table.style.display="block";
    console.log(t_name_m,t_des_m,t_date_m);
    createTable(t_name_m,t_des_m,t_date_m);

         if(t_name_m.trim()===""||t_des_m.trim()===""||t_date_m.trim()===""){
         alert("Check if any field is empty")
         table.style.display="none";

     }
    
    t_name_m="";
    t_date_m="";
    t_des_m="";
}
