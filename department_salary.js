// Task 1: Create a Department Structure
const company = {
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                { name: 'Alice', salary: 100000, subordinates: [{ name: 'Bob', salary: 80000, subordinates: [{ name: 'Charlie', salary: 60000, subordinates: [] }] }] },
                { name: 'David', salary: 90000, subordinates: [] }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                { name: 'Eve', salary: 85000, subordinates: [{ name: 'Frank', salary: 70000, subordinates: [] }] },
                { name: 'Grace', salary: 95000, subordinates: [] }
            ]
        }
    ]
};

// Showing in Console Log
console.log(company);

// Task 2: Create a Recursive Function to Calculate Total Salary for a Department

function calculateDepartmentSalary(department) {
    let totalSalary = 0; // Initialize total salary

    // Iterate over each employee in the department
    for (const employee of department.employees) {
        totalSalary += calculateEmployeeSalary(employee); // Add the employees salary

        // Add subordinates salary
        if (employee.subordinates && employee.subordinates.length > 0) {
            totalSalary += calculateDepartmentSalary({ employees: employee.subordinates });
        }
    }

    return totalSalary; // Return the total salary for the department
}

// function to calculate the salary for an employee and their subordinates
function calculateEmployeeSalary(employee) {
    return employee.salary; // Start with the employee's salary
}

// Showing in Console log
const engineeringDepartment = company.departments[0]; // Get the Engineering department
const totalEngineeringSalary = calculateDepartmentSalary(engineeringDepartment);
console.log(`Total Salary for Engineering Department: $${totalEngineeringSalary}`);

// Task 3: Create a Function to Calculate the Total Salary for All Departments

function calculateCompanySalary(company) {
    let totalCompanySalary = 0; // Initialize total salary for the company

    // Iterate over each department in the company
    for (const department of company.departments) {
        // Calculate the department salary
        const departmentSalary = calculateDepartmentSalary(department);
        
        
        totalCompanySalary = departmentSalary; // Adds department salary to total 
    }

    return totalCompanySalary; // Return the total salary for the company
}

// Showing in Console Log
const totalSalary = calculateCompanySalary(company);
console.log(`Total Salary for the Company: $${totalSalary}`); 
