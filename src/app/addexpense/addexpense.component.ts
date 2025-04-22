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

import { Component, OnInit } from '@angular/core';
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
export class AddexpenseComponent implements OnInit {
  
  expense: Expense = {title:'', amount: null, category: '', date: '' };
  today:string;
  constructor(private expenseService: ExpenseService) {
    
  }

  ngOnInit(): void{
    this.today=new Date().toISOString().split('T')[0];
  }

  onSubmit(form:NgForm) {
    this.expenseService.addExpense(this.expense).subscribe({
      next: (response) => console.log('Expense added successfully', response),
      error: (error) => console.error('Error adding expense:', error),
    });
    form.reset();
  }

  isDateInvalid(): boolean{
    const selectedDate = new Date(this.expense.date);
    const currentDate = new Date(this.today);
    return selectedDate > currentDate;
  }
}
