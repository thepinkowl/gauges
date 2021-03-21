// Source: https://stackoverflow.com/a/56996295
import { Directive, HostListener, OnInit, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appHideHeader]'
})
export class HideHeaderDirective implements OnInit {

  search: any;

  private lastY = 0;

  constructor(
    private renderer: Renderer2,
    private domCtrl: DomController
  ) { }

  ngOnInit(): void {
    this.search = document.getElementById("dashboard-search-bar")    
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    if ($event.detail.scrollTop > this.lastY) {
      this.domCtrl.write(() => {
        this.renderer.setStyle(this.search, 'height', `0`);
      });
    } else {
      this.domCtrl.write(() => {
        this.renderer.setStyle(this.search, 'height', `60px`);
      });
    }

    this.lastY = $event.detail.scrollTop;
  }
}
