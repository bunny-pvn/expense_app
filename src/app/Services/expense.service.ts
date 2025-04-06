
// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { Expense } from '../Model/expense';

// @Injectable({
//   providedIn: 'root'
// })
// export class ExpenseService {
//   private expenses: Expense[] = []; // Stores expenses
//   private expenseSubject = new BehaviorSubject<Expense[]>(this.expenses);

//   // Observable to be subscribed by components
//   expenses$ = this.expenseSubject.asObservable();

//   addExpense(expense: Expense) {
//     this.expenses.push(expense);
//     console.log("Updated Expense List:", this.expenses); // Debugging
//     this.expenseSubject.next(this.expenses);
//   }
// }


//for firebase


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, catchError, tap, map } from 'rxjs';
import { Expense } from '../Model/expense';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private firebaseUrl = 'https://expensetracking-ae1d6-default-rtdb.firebaseio.com/expenses.json';

  private expenses: Expense[] = []; // Local cache
  private expenseSubject = new BehaviorSubject<Expense[]>([]); // ✅ Starts with an empty array

  expenses$ = this.expenseSubject.asObservable(); // ✅ Expose observable for subscription

  constructor(private http: HttpClient, private authservice:AuthService) {}

  addExpense(expense: Expense): Observable<any> {

    console.log(this.authservice.getCurrentUser());
    const currentuser=this.authservice.getCurrentUser()?.username;
    if(!currentuser){
      console.log("User not logged in yet");
    }
    const userspecificurl=`https://expensetracking-ae1d6-default-rtdb.firebaseio.com/expensedata/${currentuser}.json`;

    return this.http.post<{ name: string }>(userspecificurl, expense).pipe(
      tap((response) => {
        console.log('Expense added:', response);
        const newExpense = { ...expense, id: response.name };
        this.expenses.push(newExpense);
        this.expenseSubject.next(this.expenses);
      }),
      catchError((error) => {
        console.error('Error adding expense:', error);
        throw error;
      })
    );
  }

  // ✅ Fetch all expenses from Firebase and update BehaviorSubject
  // fetchAllExpenses(): void {
  //   this.http.get<{ [key: string]: Expense }>(this.firebaseUrl).pipe(
  //     map((responseData) => {
  //       if (!responseData) return []; // ✅ Handle empty response
  //       return Object.keys(responseData).map((key) => ({
  //         ...responseData[key],
  //         id: key, // ✅ Assign Firebase ID
  //       }));
  //     }),
      
  //     catchError((error) => {
  //       console.error('Error fetching expenses:', error);
  //       return []; // ✅ Return an empty array in case of an error
  //     })
  //   ).subscribe((fetchedExpenses) => {
  //     this.expenses = fetchedExpenses; // ✅ Update local cache
  //     this.expenseSubject.next(this.expenses); // ✅ Notify all subscribers
  //   });
  // }

  fetchExpenses() {
    const currentuser=this.authservice.getCurrentUser()?.username;
    if(!currentuser){
      console.log("User not logged in yet");
    }
    const userspecificurl=`https://expensetracking-ae1d6-default-rtdb.firebaseio.com/expensedata/${currentuser}.json`;
    this.http.get<{ [key: string]: Expense }>(userspecificurl).pipe(
      map((responseData) => {
        let expensesArray: Expense[] = [];
        for (let key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            expensesArray.push({ ...responseData[key], id: key });
          }
        }
        return expensesArray;
      }),
      tap((expenses) => {
        this.expenses = expenses;
        console.log(this.expenses);
        this.expenseSubject.next(this.expenses);
       
      }),
      catchError((error) => {
        console.error('Error fetching expenses:', error);
        throw error;
      })
    ).subscribe();
  }

  deleteExpense(id:any){
    const currentuser=this.authservice.getCurrentUser()?.username;
    if(!currentuser){
      console.log("User not logged in yet");
    }
    const userspecificurl='https://expensetracking-ae1d6-default-rtdb.firebaseio.com/expensedata/'+currentuser+'/'+id+'.json';
    this.http.delete(userspecificurl)
    .pipe(
      tap(() => {
        console.log(`Expense of ${currentuser} with ID ${id} deleted`);
        this.expenses = this.expenses.filter(exp => exp.id !== id);
        this.expenseSubject.next(this.expenses);
      }),
      catchError((error) => {
        console.error('Error deleting expense:', error);
        throw error;
      })
    )
    .subscribe();
  }

}
