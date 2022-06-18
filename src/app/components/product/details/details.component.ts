import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, Comment } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { CommentService } from 'src/app/services/comment.service';
import { NbDialogService } from '@nebular/theme';
import { NewCommentComponent } from '../../new-comment/new-comment.component';
import { AuthService } from 'src/app/services/auth.service';
import { ConnectedUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  userRole : string = sessionStorage.getItem("role")
  currentProd : Product
  commentList : Comment[] = []
  castToggled : boolean;
  commentToggled : boolean;
  connectedtUser : ConnectedUser;
  isAdmin : boolean;

  constructor(
    private _prodService : ProductService,
    private _commentService : CommentService,
    private _route : ActivatedRoute,
    private _dialog : NbDialogService,    
      ) { }

  ngOnInit(): void {
    let Id = this._route.snapshot.params['id']
    this.currentProd = this._route.snapshot.data['product']
    this._commentService.getByProduct(Id).subscribe((datac : Comment[]) => this.commentList = datac)
    this.isAdmin = localStorage.getItem('role') == 'Admin' ? true : false
  }

  castToggle() {
    this.castToggled = !this.castToggled
  }

  coToggle(){
    this.commentToggled = !this.commentToggled
  }

  addComment(){
    let ref = this._dialog.open(NewCommentComponent, {
      context :  {
        title : this.currentProd.title,
        productId : this.currentProd.id
      },
      closeOnBackdropClick : true
    })

    ref.onClose.subscribe(() => {
      this._commentService.getByProduct(this.currentProd.id).subscribe((datac : Comment[]) => this.commentList = datac)
    })
    
  }

  deleteComment(id : number){
    this._commentService.delete(id).subscribe({ next : () => 
      this._commentService.getByProduct(this.currentProd.id).subscribe((datac : Comment[]) => this.commentList = datac)})
  }

}
