import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/models/product.model';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {

  content : string;
  @Input() title : string;
  @Input() productId : number;
  constructor(
    private dialogRef : NbDialogRef<NewCommentComponent>,
    private _commentService : CommentService,
    private _userService : AuthService
  ) { }

  ngOnInit(): void {
  }

  submit(){
    let comment = new Comment()
    comment.content = this.content
    comment.productID = this.productId
    comment.postDate = new Date()
    comment.userID = this._userService.connectedUser.id
    console.log(comment)
    this._commentService.addComment(comment)

    this.dialogRef.close()
  }

}
