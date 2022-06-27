import { Component, OnInit } from '@angular/core';
import { DeletemodalService } from 'src/app/services';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  constructor(private modalServ: DeletemodalService) { }

  ngOnInit(): void {
  }

  closeModal(status: number){
    this.modalServ.$modal.emit(status);
  }

}
