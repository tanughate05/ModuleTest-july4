 //student array
 const students = [
      { ID: 1, name: 'Alice', age: 21, grade: 'A', degree: 'Btech', email: 'alice@example.com' },
      { ID: 2, name: 'Bob', age: 22, grade: 'B', degree: 'MBA', email: 'bob@example.com' },
      { ID: 3, name: 'Charlie', age: 20, grade: 'C', degree:'Arts', email: 'charlie@example.com' }
    ];

    // Initialize student ID counter
let nextStudentId = students.length + 1;

function renderStudentTable() {
    const container = document.getElementById('table-box');
    container.innerHTML = '';

    if (students.length === 0) {
        container.innerHTML = 'No students found.';
        return;
    }
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email></th>
          <th>Age</th>
          <th>GPA</th>
          <th>Degree</th>
          <th></th>
          <th></th>
        </tr>
      `;
      
    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${student.ID}</td>
          <td>${student.Name}</td>
           <td>${student.Email}</td>
          <td>${student.Age}</td>
          <td>${student.GPA}</td>
          <td>${student.Degree}</td>
         
          <td class="edit-button"><i class="fad fa-edit"></i></td>
          <td class="delete-button">&#xf014</td>
        `;
           
        const editButton = row.querySelector('.edit-button');
        editButton.addEventListener('click', () => {
            fillFormForEdit(student);
        });

        const deleteButton = row.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            deleteStudent(student);
        });
        table.appendChild(row);
    });

    container.appendChild(table);
}
function fillFormForEdit(student) {
    const form = document.getElementById('student-form');
    const nameInput = document.getElementById('Student-Name');
    const emailInput = document.getElementById('Student-Email');
    const ageInput = document.getElementById('Student-Age');
    const gradeInput = document.getElementById('Student-GPA');
    const degreeInput = document.getElementById('Student-Degree');
    
    const submitButton = document.getElementById('submit-Button');
    nameInput.value = student.Name;
    emailInput.value = student.Email;
    ageInput.value = student.Age;
    gradeInput.value = student.GPA;
    degreeInput.value = student.Degree;

    submitButton.textContent = 'Edit Student';

    form.onsubmit = event => {
        event.preventDefault();
        updateStudent(student);
    };
}

// Function to add a new student
function addStudent(name, age, grade, degree, email) {
    const newStudent = {
        ID: nextStudentId++,
        Name: Name,
        Email: Email,
        Age: Age,
        GPA: GPA,
        Degree: Degree
        
    };

    students.push(newStudent);
    renderStudentTable();
    clearForm();
}
// Function to update a student
function updateStudent(student) {
    const nameInput = document.getElementById('Student-Name');
    const emailInput = document.getElementById('Student-Email');
    const ageInput = document.getElementById('Student-Age');
    const gradeInput = document.getElementById('Student-GPA');
    const degreeInput = document.getElementById('Student-Degree');
   

    student.Name = nameInput.value;
    student.Email = emailInput.value;

    student.Age = ageInput.value;
    student.GPA = gradeInput.value;
    student.Degree = degreeInput.value;
    
    renderStudentTable();
    clearForm();
}

// Function to delete a student
function deleteStudent(student) {
    const index = students.indexOf(student);
    if (index !== -1) {
        students.splice(index, 1);
        renderStudentTable();
    }
}

// Function to filter students based on search query
function filterStudents(query) {
    const filteredStudents = students.filter(student => {
        const name = student.Name.toLowerCase();
        const email = student.Email.toLowerCase();
        const degree = student.Degree.toLowerCase();
        const searchQuery = query.toLowerCase();
        return name.includes(searchQuery) || email.includes(searchQuery) || degree.includes(searchQuery);
    });

    renderStudentTable(filteredStudents);
}

// Function to clear the form
function clearForm() {
    const form = document.getElementById('student-form');
    form.reset();
    const submitButton = document.getElementById('submit-Button');
    submitButton.textContent = 'Add Student';
    form.onsubmit = event => {
        event.preventDefault();
        addStudent();
    };
}
const form = document.getElementById('student-form');
form.addEventListener('submit', event => {
    event.preventDefault();

    const nameInput = document.getElementById('Student-Name');
    const emailInput = document.getElementById('Student-Email');
    const ageInput = document.getElementById('Student-Age');
    const gradeInput = document.getElementById('Student-GPA');
    const degreeInput = document.getElementById('Student-Degree');
    

    const name = nameInput.value;
    const age = ageInput.value;
    const grade = gradeInput.value;
    const degree = degreeInput.value;
    const email = emailInput.value;

    if (name && email && age && grade && degree ) {
        const submitButton = document.getElementById('submit-button');
        if (submitButton.textContent === 'Add Student') {
            addStudent(name, age, grade, degree, email);
        } else if (submitButton.textContent === 'Edit Student') {
            updateStudent();
        }
    }
});
// Event listener for the search input
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', event => {
    const query = event.target.value;
    filterStudents(query);
});

// Initial rendering of the student table
renderStudentTable();