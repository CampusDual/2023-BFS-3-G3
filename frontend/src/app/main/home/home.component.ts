import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public admin :any
  public usuario : any
  public access : any
  public service : any
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private auth:AuthService,
    private ontimizeService: OntimizeService,
    
  ) {
  }

  getStars(rate: number): string {
    const roundedRate = Math.round(rate);
    return '★'.repeat(roundedRate) + '☆'.repeat(5 - roundedRate);
  }

  ngOnInit() {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('users'));
    this.ontimizeService.query({user_:this.auth.getSessionInfo().user}, ['id_rolename'], 'deletableUser').subscribe(
      res => {
        if(res.data && res.data.length > 0) {
          if(res.data[0].id_rolename === 1 ){
            //  this.usuario = document.querySelector('.usuario') ;
            //       this.usuario.style.display="none";
            this.access = document.getElementById("access");
            this.access.style.display="none";

          }
          if(res.data[0].id_rolename === 2 ){
            // this.admin = document.querySelector('.admin') ;
            // this.admin.style.display="none";  
            this.service = document.getElementById("service");
            this.service.style.display="none";  
          }

        }
    });
  }
}
