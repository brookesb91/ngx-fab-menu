import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
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
  // Backdrop main color
  @Input()
  @HostBinding('style.--fab-menu-background')
  backgroundColor: string;

  // FAB text color
  @Input()
  @HostBinding('style.--fab-menu-color')
  color: string;

  // FAB right-side inset
  @Input()
  @HostBinding('style.--fab-menu-inset-right')
  insetRight: string;

  // FAB bottom-side inset
  @Input()
  @HostBinding('style.--fab-menu-inset-bottom')
  insetBottom: string;

  // FAB Backdrop size
  @Input()
  @HostBinding('style.--fab-menu-backdrop-size')
  backdropSize: string;

  @Input()
  @HostBinding('style.--fab-menu-backdrop-radius')
  backdropRadius: string;

  @Input()
  @HostBinding('style.--fab-menu-backdrop-opacity')
  backdropOpacity: string;

  @Input()
  @HostBinding('style.--fab-menu-trigger-size')
  triggerSize: string;

  @Input()
  @HostBinding('style.--fab-menu-trigger-box-shadow')
  triggerBoxShadow: string;

  @Input()
  @HostBinding('style.--fab-menu-item-height')
  menuItemHeight: string;

  private _isOpen = false;
  @HostBinding('class.open')
  get isOpen() {
    return this._isOpen;
  }
  @Input()
  set open(value: boolean) {
    this._isOpen = value;
  }

  constructor(private cdr: ChangeDetectorRef) {}

  @HostListener('click', [])
  clicked() {
    this._isOpen = !this._isOpen;
    this.cdr.markForCheck();
  }
}
