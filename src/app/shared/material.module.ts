import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule,
  MatListModule,
  MatGridListModule, 
  MatDividerModule, 
  MatCheckboxModule, 
  MatInputModule,
  MatProgressSpinnerModule, 
  MatCardModule,
  MatFormFieldModule, 
  MatIconModule } from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatButtonModule,
    MatCheckboxModule, 
    MatInputModule, 
    MatProgressSpinnerModule, 
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
