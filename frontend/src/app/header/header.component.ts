import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    link1 = 'ABOUT' ;
    link2 = 'ACADEMICS';
    link3 = 'ADMISSION';
    link4 = 'CAMPUS LIFE';
    link5 = 'FACILITIES';
    link6 = 'PLACEMENTS';
    link7 = 'CONTACT US';
    activeLink = this.link1;
    background = '';
    selectedTab = 0;

    changeTab(tabIndex: number) {
      this.selectedTab = tabIndex;
    }

  constructor(private breakpointObserver: BreakpointObserver) {}

}

