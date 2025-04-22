import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Expense } from '../../Model/expense';
import { FormsModule, NgForm } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-updateform',
  imports: [CommonModule, FormsModule],
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateExpenseComponent implements OnInit {
  today: string = '';

  @Input() expense: Expense | null = null;
  @Output() update = new EventEmitter<Expense>();
  @Output() close = new EventEmitter<void>(); 

  ngOnInit(): void {
    // Initialize today to the current date in YYYY-MM-DD format
    const currentDate = new Date();
    this.today = currentDate.toISOString().split('T')[0];
  }

  closeModal() {
    this.close.emit();  // Emit close event to close the modal
  }

  onupdateSubmit(updateForm: NgForm) {
    console.log(this.expense.id);
    if (updateForm.valid && this.expense) {
      this.update.emit(updateForm.value);
    }
  }

  isDateInvalid(): boolean {
    if (this.expense && this.expense.date) {
      const selectedDate = new Date(this.expense.date);
      const currentDate = new Date(this.today);
      return selectedDate > currentDate;
    }
    return false;
  }
}
