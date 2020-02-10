import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";

@Component({
  selector: "dk-toast",
  templateUrl: "./dk-toast.component.html",
  styles: [],
  providers:[MessageService]
})
export class DkToastComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}
  addSingle() {
    this.messageService.add({
      severity: "success",
      summary: "Service Message",
      detail: "Via MessageService"
    });
  }
}
