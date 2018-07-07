import {AppComponent} from './app.component';

//Test Suite
describe ('AppComponent',()=>{
  //hook
  beforeEach(()=>{
    this.app=new AppComponent();
  });

  //Test
  it('Should have a property name  set to Murthy ',()=>{
    expect(this.app.name).toBe('Murthy');
  });
})

