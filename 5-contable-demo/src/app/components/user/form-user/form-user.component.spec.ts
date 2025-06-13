import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormUserComponent } from "./form-user.component";

describe('FormUserComponent', () => {
    let component: FormUserComponent;
    let fixture: ComponentFixture<FormUserComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormUserComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(FormUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    xit('should create', () => {
        expect(component).toBeTruthy();
    });
});
