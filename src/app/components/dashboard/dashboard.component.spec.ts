import { DashboardComponent } from './dashboard.component';

//to run only one describe
fdescribe('DashboardComponent', () => {
  let component = new DashboardComponent();
  it('Application Name Should be Application Dashboard', () => {
    expect(component.appTitle).toBe("Application Dashboard");
  });

});
