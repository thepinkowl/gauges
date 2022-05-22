// Source: https://stackoverflow.com/a/56996295
import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appHideHeader]'
})
export class HideHeaderDirective implements OnInit {

  search: any;
  used = false;

  constructor(
    private renderer: Renderer2,
    private domCtrl: DomController,
    public el: ElementRef
  ) { }

  ngOnInit(): void {
    this.search = document.getElementById('dashboard-search-bar');
    setTimeout(() => {
      if (!this.used) {
        this.scrollPage(1);
      }
    }, 700);
  }

  showSearchBar() {
    this.domCtrl.write(() => {
      this.renderer.setStyle(this.search, 'height', `60px`);
    });
  }
  hideSearchBar() {
    this.domCtrl.write(() => {
      this.renderer.setStyle(this.search, 'height', `0`);
    });
  }

  scrollPage(px: number) {
    const page = this.el.nativeElement;
    const scroller = [...page.shadowRoot.childNodes].find(n => n.className.includes('inner-scroll'));
    scroller.scrollTop = px;
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    this.used = true;

    if ($event.detail.deltaY < 0) {
      if ($event.detail.scrollTop === 0) {
        if ($event.detail.deltaY !== -1) {
          this.scrollPage(1);
        } else {
          this.showSearchBar();
        }
      }
    } else if ($event.detail.deltaY > 1) {
      this.hideSearchBar();
    } else {
      if ($event.detail.scrollTop === 0) {
        this.showSearchBar();
      } else {
        this.hideSearchBar();
      }
    }
  }
}
