import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/entities/Category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category: Category = new Category();
  submitted = false;

  constructor(private categoryService: CategoryService, private router: Router,) { }

  ngOnInit() {
  }
  newMovie(): void{
    this.submitted = false;
    this.category = new Category;
   }
   save(){
     this.categoryService.createCategory(this.category)
           .subscribe(data => console.log(data), error => console.log(error));
           this.category = new Category;
           console.log(this.category);
   }
   onSubmit(){
     this.submitted = true;
     this.save();
   }
   homePage(){
     this.router.navigate(['/']);
   }

}
