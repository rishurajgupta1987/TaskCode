import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  //Arrange
  let component = LoginComponent;

  beforeEach(() => {
    this.component = new LoginComponent();
  })

  beforeAll(() => {
    console.log("Login Component Started");
  })

  afterAll(() => {
    console.log("Login Component Ended");
  })

  it('Application Name Should be Login Application', () => {
    expect(this.component.APPTITLE).toBe("Application Login");
  });

  it('Application Name Should be retrun true if user exist', () => {
    //Act
    let result: boolean = this.component.valiateUser("rishu.gupta");

    //Assert
    expect(result).toBeTruthy(true);
    expect(this.component.USERS).toContain('anish.gupta');
  });


});
