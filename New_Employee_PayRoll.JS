let employeePayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
   
    employeePayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
  
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('employeePayrollData') ?
                        JSON.parse(localStorage.getItem('employeePayrollData')) : [];
};

const createInnerHtml = () => {
   
    alert("Hello");
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                            "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    if(employeePayrollList.length == 0) return;
    let innerHTML = `${headerHtml}`;
    for (const employeePayrollData of employeePayrollList) {
        innerHTML = `${innerHTML}
   <tr>
   <td><img class="profile" src="${employeePayrollData.profileImage}" alt=""></td>
   <td>${employeePayrollData.name}</td>
   <td>${employeePayrollData.gender}</td>
   <td>${getDeptHtml(employeePayrollData.department)}</td>
   <td>${employeePayrollData.salary}</td>
   <td>${employeePayrollData. startDate}</td>
   <td>
   <img name="${employeePayrollData.id}" onclick="remove(this)" 
          src="./delete-black-18dp.svg" alt="delete">
   <img name="${employeePayrollData.id}" onclick="update(this)" 
          src="./edit.svg" alt="edit">       
   </td>
</tr>
`;
    }
document.getElementById('table-display').innerHTML = innerHTML;}


const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}


 const remove = (row) => {
 if(confirm('Do you want to delete this record?')){
    const indexrow = row.parentElement.parentElement.indexrow;
    employeePayrollList.splice(indexrow,1);
 }
 //updates the local storage
 localStorage.setItem("employeePayrollData",JSON.stringify(employeePayrollList));

 //Update the employee count display
 document.querySelector(".emp-count").textContent = employeePayrollList.length;
 createInnerHtml();
 }  
