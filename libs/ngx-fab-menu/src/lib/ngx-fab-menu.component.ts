import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'ngx-fab-menu',
  templateUrl: './ngx-fab-menu.component.html',
  styleUrls: ['./ngx-fab-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class NgxFabMenuComponent {
  @Input()
  set backgroundColor(value: string) {
    this.setProperty('--fab-menu-background', value);
    this.setProperty('--fab-menu-background-opacity-1', `${value}66`);
    this.setProperty('--fab-menu-background-opacity-2', `${value}33`);
  }

  @Input()
  set color(value: string) {
    this.setProperty('--fab-menu-color', value);
  }

  @Input()
  set backdropSize(value: string) {
    this.setProperty('--fab-menu-backdrop-size', value);
  }

  @Input()
  set backdropRadius(value: string) {
    this.setProperty('--fab-menu-backdrop-radius', value);
  }

  @Input()
  set backdropOpacity(value: string) {
    this.setProperty('--fab-menu-backdrop-opacity', value);
  }

  @Input()
  set triggerSize(value: string) {
    this.setProperty('--fab-menu-trigger-size', value);
  }

  @Input()
  set triggerBoxShadow(value: string) {
    this.setProperty('--fab-menu-trigger-box-shadow', value);
  }

  @Input()
  set menuItemHeight(value: string) {
    this.setProperty('--fab-menu-item-height', value);
  }

  private _isOpen = false;
  @HostBinding('class.open')
  get isOpen() {
    return this._isOpen;
  }
  @Input()
  set open(value: boolean) {
    this._isOpen = value;
  }

  constructor(private cdr: ChangeDetectorRef, private el: ElementRef) {}

  @HostListener('click', [])
  clicked() {
    this._isOpen = !this._isOpen;
    this.cdr.markForCheck();
  }

  private setProperty(name: string, value: string) {
    this.el.nativeElement.style.setProperty(name, value);
  }
}
