import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SidenavComponent } from './core/components/sidenav/sidenav.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { MaterialModule } from './shared/modules/material.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SidenavComponent,
        ToolbarComponent
      ],
      imports: [
        MaterialModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      providers: [ HttpClientModule ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'final-project-gg'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('final-project-gg');
  }); 
/* 
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('final-project-gg app is running!');
  });*/
});
