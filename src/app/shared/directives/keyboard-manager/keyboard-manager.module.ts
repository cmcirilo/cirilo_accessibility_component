import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KeyboardManagerItemDirective } from './keyboard-manager-item.directive';
import { KeyboardManagerDirective } from './keyboard-manager.directive';

@NgModule({
  declarations: [KeyboardManagerDirective, KeyboardManagerItemDirective],
  imports: [CommonModule],
  exports: [KeyboardManagerDirective, KeyboardManagerItemDirective],
})
export class KeyboardManagerModule {}
