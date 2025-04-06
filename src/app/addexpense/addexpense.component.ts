// import { Component, Output, EventEmitter} from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, NgForm} from '@angular/forms';
// import { Expense } from '../Model/expense';
// import { ExpenseService } from '../Services/expense.service';
// @Component({
//   selector: 'app-addexpense',
//   imports: [CommonModule, FormsModule],
//   templateUrl: './addexpense.component.html',
//   styleUrl: './addexpense.component.css'
// })
// export class AddexpenseComponent{
//   expense = {
//     title: '',
//     amount: '',
//     category: '',
//     date: ''
//   };

//   constructor(private expenseService: ExpenseService) {}
//   @Output()
//   EmitExpenseData: EventEmitter<Expense>=new EventEmitter<Expense>();

//   onSubmit(form: NgForm) {
//     if(form.valid){
//       this.EmitExpenseData.emit(form.value);
//       console.log("form submitted"); 
//       form.reset();
//     }
//   }
 

//working one
  // import { Component } from '@angular/core';
  // import { CommonModule } from '@angular/common';
  // import { FormsModule, NgForm } from '@angular/forms';
  // import { Expense } from '../Model/expense';
  // import { ExpenseService } from '../Services/expense.service';
  
  // @Component({
  //   selector: 'app-addexpense',
  //   imports: [CommonModule, FormsModule],
  //   templateUrl: './addexpense.component.html',
  //   styleUrl: './addexpense.component.css'
  // })
  // export class AddexpenseComponent {
  //   expense: Expense = {
  //     title: '',
  //     amount: 0,
  //     category: '',
  //     date: ''
  //   };
  
  //   constructor(private expenseService: ExpenseService) {}
  
  //   onSubmit(form: NgForm) {
  //     if (form.valid) {
  //       this.expenseService.addExpense(form.value); // Send data to service
  //       console.log("Expense submitted:", form.value);
  //       form.reset();
  //     }
  //   }
  //   }
  
  


  // expense = {
  //   title: '',
  //   amount: null,
  //   category: '',
  //   date: ''
  // };

  // submitted = false; // Tracks whether the form is submitted

  // onSubmit(expenseForm: any) {
  //   this.submitted = true; // Mark form as submitted

  //   if (expenseForm.invalid) {
  //     return; // Stop if the form is invalid
  //   }

  //   console.log('Expense Added:', this.expense);

  //   // Reset form and submission state
  //   expenseForm.resetForm();
  //   this.submitted = false;
  // }

  // shouldShowError(field: any) {
  //   return (this.submitted && field?.invalid) || (field?.touched && field?.invalid);
  // }
//}


//for firebase

import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../Services/expense.service';
import { Expense } from '../Model/expense';

@Component({
  selector: 'app-addexpense',
  imports:[CommonModule, FormsModule],
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css'],
})
export class AddexpenseComponent {
  expense: Expense = {title:'', amount: 0, category: '', date: '' };

  constructor(private expenseService: ExpenseService) {}

  onSubmit(form:NgForm) {
    this.expenseService.addExpense(this.expense).subscribe({
      next: (response) => console.log('Expense added successfully', response),
      error: (error) => console.error('Error adding expense:', error),
    });
    form.reset();
  }
}
