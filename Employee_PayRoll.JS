class EmployeePayrollData{
    //getter and setter method
    get id(){
        return this.id;
    }
    set id(id){
        this.id = id;
    }
    

    get name(){return this._name;}
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
        this._name = name;
        else throw 'Name is Incorrect';
    }
     
    get profileImage(){
        return this.profileImage;
    }
    set profileImage(profileImage){
        this.profileImage = profileImage;
    }

    get gender(){
        return this.gender;
    }
    set gender(gender){
        this.gender = gender;
    }

    get department(){
        return this.department;
    }
    set department(department){
        this.department = department;
    }

    get salary(){
        return this.salary;
    }
    set salary(salary){
        this.salary = salary;
    }

    get note(){
        return this.note;
    }
    set note(note){
        this.note = note;
    }

    get startDate(){
        return this.startDate; 
    }

    set startDate(startDate){
        this.startDate = startDate;
    }
}
    let newEmployee = new EmployeePayrollData();

const salary = document.querySelector('.salary-output');
const salRange = document.querySelector('#salary');
const username = document.querySelector('#name');
const nameError = document.querySelector('#errormsg');
const notes = document.querySelector('#notes');
let departmentValues = [];
let employeePayrollList = [];

username.addEventListener('input', () => {
  let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
  if (nameRegex.test(username.value)) {
    username.style.border = '2px solid green';
    nameError.style.visibility = 'hidden';
  } else {
    nameError.style.visibility = 'visible';
    username.style.border = 'none';
  }
});
salRange.addEventListener('input', () => {
  salary.innerHTML = salRange.value;
});
function reset() {
  let str = 40000;
  document.querySelector('salary-output').innerHTML = str;
}
// onform submit function save
function save() {
  const profileImage = document.querySelector('input[name="profile"]:checked');
  const gender = document.querySelector('input[name="gender"]:checked');
  const checkbox = document.querySelectorAll('input[class="checkbox"]:checked');
  const day = document.querySelector('#day');
  const month = document.querySelector('#month');
  const year = document.querySelector('#year');
  let startDate = day.value + '-' + month.value + '-' + year.value;
  checkbox.forEach((dept) => {
    departmentValues.push(dept.value);
  });

  // //Adding data from localstorage to array
  if (window.localStorage.key(0) !== null) {
    employeePayrollList = JSON.parse(
      window.localStorage.getItem('employeePayrollData')
    );
  }
  newEmployee.name = username.value;
  newEmployee.profileImg = profileImage.value;
  newEmployee.gender = gender.value;
  newEmployee.department = departmentValues;
  newEmployee.salary = salRange.value;
  newEmployee.startDate = startDate;
  newEmployee.notes = notes.value;

  employeePayrollList.push(newEmployee);

  window.alert(employeePayrollList);

  window.localStorage.setItem(
    'employeePayrollData',
    JSON.stringify(employeePayrollList)
  );
  }
  const resetForm = () => {
    setValue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year','2020');
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}

const setSelectedIndex = (id, index) => {
  const element = document.querySelector(id);
  element.selectedIndex = index;
}