// import { Component } from '@angular/core';
// import { AddexpenseComponent } from '../addexpense/addexpense.component';
// @Component({
//   selector: 'app-viewexpense',
//   imports: [AddexpenseComponent],
//   templateUrl: './viewexpense.component.html',
//   styleUrl: './viewexpense.component.css'
// })
// export class ViewexpenseComponent {

// }


// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ExpenseService } from '../Services/expense.service';
// import { Expense } from '../Model/expense';

// @Component({
//   selector: 'app-viewexpense',
//   imports: [CommonModule],
//   templateUrl: './viewexpense.component.html',
//   styleUrl: './viewexpense.component.css'
// })
// export class ViewexpenseComponent {
//   expenses: Expense[] = [];

//   constructor(private expenseService: ExpenseService) {}

//   // ngOnInit() {
//   //   this.expenseService.expenses$.subscribe(expenses => {
//   //     this.expenses = expenses;
//   //   });
//   // }
// }


//working with firebase

import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../Services/expense.service';
import { Expense } from '../Model/expense';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewexpense',
  imports:[CommonModule],
  templateUrl: './viewexpense.component.html',
  styleUrls: ['./viewexpense.component.css'],
})
export class ViewexpenseComponent implements OnInit {
  expenses: Expense[] = [];
  isLoading: boolean = true;

  constructor(private expenseService: ExpenseService) {}

  // ngOnInit() {
  //   this.isLoading = true; // ✅ Ensure loading state is true initially
  
  //   this.expenseService.fetchAllExpenses(); 
  
  //   this.expenseService.expenses$.subscribe((expenses) => {
  //     console.log("Expenses Updated: ", expenses); // ✅ Debugging
  //     this.expenses = expenses;
  //     this.isLoading = false; // ✅ Stop loading when data arrives
  //   });
  // }

  ngOnInit() {
    // this.expenseService.fetchExpenses();
    // .subscribe((expensedata)=>{
    //   this.expenses=expensedata;
    //}); 
    this.expenseService.fetchExpenses();
    this.expenseService.expenses$.subscribe(expenses => {
      this.expenses = expenses;
    });
  }
  
  deleteExp(id:any){
    this.expenseService.deleteExpense(id);
  }
}

