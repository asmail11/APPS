import { Component, OnInit } from '@angular/core';
import { ReplayCommentDto } from 'src/app/ecommerce/models/replayCommentDto';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { UserService } from 'src/app/ecommerce/services/user.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ReplayCommentService } from 'src/app/ecommerce/services/replay-comment.service';

@Component({
  selector: 'app-replay-comment',
  templateUrl: './replay-comment.component.html',
  styleUrls: ['./replay-comment.component.css']
})
export class ReplayCommentComponent implements OnInit {

  replaycommentDto: ReplayCommentDto;
  submitted = false;
  form: any = {};

  info: any;
  id: number;
  name: string
  username: string;
  email: string;
  password: string;
  nameOnCard: string;
  cardNumber: string;
  expMonth: string;
  cvv: number;
  expYear: string;
  address: string;
  city: string;
  zip: number;
  state: string;
  errorMessage: string;

  newDate: Date;
  dateStr: string;

  showReplay = false;
  showBtn=-1;

  constructor(private commentService: ReplayCommentService,  private token: TokenStorageService,
    private userService: UserService, private router: Router, private datePipe: DatePipe,) { }

  ngOnInit() {
    this.reloadData();
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities
    };
    this.userService.getUSerByUsername(this.token.getUsername()).subscribe(
      data => {
        this.id = data.id;
        this.name = data.name;
        this.username = data.username;
        this.email = data.email;
        this.nameOnCard = data.nameOnCard;
        this.cardNumber = data.cardNumber;
        this.expMonth = data.expMonth;
        this.cvv = data.cvv;
        this.expYear = data.expYear;
        this.address = data.address;
        this.city = data.city;
        this.zip = data.zip;
        this.state = data.state;

      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
    this.newDate = new Date();
    this.dateStr = this.datePipe.transform(this.newDate,"yyyy-MM-dd hh:mm");
    console.log(this.dateStr);
  }

  reloadData() {

  }

  onSubmit() {
    this.replaycommentDto = new ReplayCommentDto(
      this.form.id,
      this.form.message,
      this.name,
      this.dateStr,
    );
    this.commentService.createReplayComment(this.replaycommentDto).subscribe(
      data => {
        console.log(data);
        this.submitted = true;
        this.reloadData();
        this.form.title = '';
        this.form.message = '';
      }, error => console.log(error));
  }
  logout(){
    this.token.signOut();
    window.location.reload();
  }
  loginPage() {
    this.router.navigate(['auth/login']);
  }

  commentById(id: number){
    this.commentService.getReplayCommentById(id)
    .subscribe(data => {
        id = data.id;
        console.log(id);
    });
    this.showReplay = !this.showReplay;
 }
  
  showUndoBtn(index){
    this.showBtn=index;
  }

}
