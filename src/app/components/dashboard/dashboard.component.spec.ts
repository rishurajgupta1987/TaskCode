import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component = new DashboardComponent();
  it('Application Name Should be Application Dashboard', () => {
    expect(component.APPTITLE).toBe("Application Dashboard");
  });

});
