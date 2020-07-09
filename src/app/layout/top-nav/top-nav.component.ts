import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-top-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(public navigationService: NavigationService) {}

  ngOnInit() {}

  toggleSideNav() {
      this.navigationService.toggleSideNav();
  }

}
