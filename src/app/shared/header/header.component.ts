import { Component, Input, HostListener } from "@angular/core";
import { I18nService } from '@app/core/services/i18n.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.view.html',
  styleUrls: ['./header.style.scss']
})

export class HeaderComponent
{
  public isActive: boolean;
  public isSolid: boolean;

  @Input() header;
  @Input() browser;
  @Input() app;

  @HostListener('window:scroll') onScroll()
  {
    this.handleScroll();
  }

  constructor(private i18nService: I18nService)
  {
    this.isActive = false;
    this.isSolid = false;
  }

  public toggleNavigation(): void
  {
    if (this.isActive)
    {
      this.isActive = false;
      document.body.style.overflow = 'auto';
    }
    else
    {
      this.isActive = true;
      document.body.style.overflow = 'hidden';
    }
  }

  public handleScroll(): void
  {
    this.isSolid = (document.scrollingElement.scrollTop !== 0);
  }

  public headerState(): string
  {
    if (this.isActive)
    {
      return ('header_active');
    }
    else if (this.isSolid)
    {
      return ('header_solid');
    }
    else
    {
      return ('');
    }
  }

  public scrollTo(position: number): void
  {
    // TODO
  }

  public i18n(obj: any, key: string): any
  {
    return this.i18nService.i18n(obj, key, this.browser.lang);
  }
}
