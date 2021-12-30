import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxIconModule, IgxSwitchModule, IgxChipsModule, IgxAvatarModule, IgxSliderModule, IgxButtonModule, IgxRippleModule, IgxRadioModule, IgxButtonGroupModule, IgxInputGroupModule, IgxCheckboxModule, IgxCalendarModule } from 'igniteui-angular';
import { MasterViewComponent } from './master-view.component';

describe('MasterViewComponent', () => {
  let component: MasterViewComponent;
  let fixture: ComponentFixture<MasterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterViewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxIconModule, IgxSwitchModule, IgxChipsModule, IgxAvatarModule, IgxSliderModule, IgxButtonModule, IgxRippleModule, IgxRadioModule, IgxButtonGroupModule, IgxInputGroupModule, IgxCheckboxModule, IgxCalendarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
