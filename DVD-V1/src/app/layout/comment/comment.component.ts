import { Component, OnInit, ViewChild } from '@angular/core';
import { CommentDto } from 'src/app/ecommerce/models/commentDto';
import { CommentService } from 'src/app/ecommerce/services/comment.service';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { UserService } from 'src/app/ecommerce/services/user.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ReplayCommentComponent } from '../replay-comment/replay-comment.component';
import { ReplayCommentService } from 'src/app/ecommerce/services/replay-comment.service';



@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentDto: CommentDto;
  submitted = false;
  form: any = {};
  comments: Observable<CommentDto[]>;
  replayComments: Observable<ReplayCommentComponent[]>;
  commentId: number;

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
  numberOfLikes : number = 0;

  @ViewChild('replayComment')
  replayComment: ReplayCommentComponent;

  constructor(private commentService: CommentService,  private token: TokenStorageService,
    private userService: UserService, private router: Router, private datePipe: DatePipe,
    private replayCommentService: ReplayCommentService) { }

  ngOnInit() {
   // this.replayData();;
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
   this.comments = this.commentService.getCommentList();
   console.log(this.comments);
  }

  onSubmit() {
    this.commentDto = new CommentDto(
      this.form.id,
      this.form.title,
      this.form.message,
      this.name,
      this.dateStr,
    );
    this.commentService.createComment(this.commentDto).subscribe(
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
  showReplayForm(){
    this.showReplay = !this.showReplay;
  }
  commentById(id: number){
    this.commentService.getCommentById(id)
    .subscribe(data => {
        id = data.id;
        console.log(id);
    });
    this.showReplay = !this.showReplay;
 }
  showUndoBtn(index){
    this.showBtn=index;
  }
  replayData(){
   // this.replayComments = this.replayCommentService.getReplayCommentByCommentId(1);
    this.commentService.getCommentById(this.commentId)
    .subscribe(data => {
    //  this.commentId = data.id;
      
        console.log(this.commentId);
    });
   
  }
  
  likeButtonClick() {
    this.numberOfLikes++;
  }

  dislikeButtonClick() {
    this.numberOfLikes--;
  }
}
