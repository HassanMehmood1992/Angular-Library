import { NgModule } from "@angular/core";
import { DkToastComponent } from "./dk-toast.component";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [DkToastComponent],
  imports: [BrowserAnimationsModule, ToastModule],
  providers: [MessageService],
  exports: [DkToastComponent]
})
export class DkToastModule {}
