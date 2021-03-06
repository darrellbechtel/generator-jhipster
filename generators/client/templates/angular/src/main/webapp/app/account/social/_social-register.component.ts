import { Component, OnInit, Input, Inject } from '@angular/core';

@Component({
    selector: '<%=jhiPrefix%>-register',
    templateUrl: './social-register.component.html'
})
export class SocialRegisterComponent implements OnInit  {
    success: boolean;
    error: boolean;
    @Input() provider: string;
    providerLabel: string;

    constructor (
        private jhiLanguageService: JhiLanguageService
    ) {
        this.languageService.setLocations(['social']);
    }

    ngOnInit() {
        // TODO migrate this
        // this.success = this.$stateParams.success;
        this.error = !this.success;
        // this.provider = this.$stateParams.provider;
        this.providerLabel = this.provider.charAt(0).toUpperCase() + this.provider.slice(1);
    }
}
