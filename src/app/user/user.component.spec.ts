import { UserService } from './user.service';
import { async, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';


describe('UserComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
      
    })
    .compileComponents();
  }));

  it("should create UserComponent : ", ()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })

  it("User property should get populate", ()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let us = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(app.user.name).toEqual("Foo");
  });

  it("Username should be on template", ()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let compiled = fixture.debugElement.nativeElement;
    app.isLoggedIn = true;
    fixture.detectChanges();
    expect(compiled.querySelector("p").textContent).toContain("Foo");
  });

  it("Should Not get the data", ()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let us = fixture.debugElement.injector.get(UserService);
    let spy = spyOn(us, "getDetails")
      .and.returnValue(Promise.resolve("Data"))
      fixture.detectChanges();
    expect(app.data).toEqual(undefined);
  });

  it("Should get the data", ()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let us = fixture.debugElement.injector.get(UserService);
    let spy = spyOn(us, "getDetails")
      .and.returnValue(Promise.resolve("Data"))
      fixture.detectChanges();
    fixture.whenStable().then(()=>{
      expect(app.data).toEqual("Data");
    })
  });

  // it("Username should be on template", ()=>{
  //   let fixture = TestBed.createComponent(UserComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   let compiled = fixture.debugElement.nativeElement;
  //   fixture.detectChanges();
  //   expect(compiled.querySelector("p").textContent).not.toContain("Bar");
  // })
});
