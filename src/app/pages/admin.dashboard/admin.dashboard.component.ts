import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import  {MatSidenavModule } from '@angular/material/sidenav';
import { CustomSidenavComponent } from "../../components/custom-sidenav/custom-sidenav.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-admin.dashboard',
  imports: [RouterOutlet, MatToolbarModule, MatIcon, MatSidenavModule, CustomSidenavComponent],
  templateUrl: './admin.dashboard.component.html',
  styleUrl: './admin.dashboard.component.scss'
})
export class AdminDashboardComponent {

}
