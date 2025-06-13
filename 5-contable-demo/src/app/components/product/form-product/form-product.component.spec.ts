import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormProductComponent } from "./form-product.component";

describe('FormProductComponent', () => {
    let component: FormProductComponent;
    let fixture: ComponentFixture<FormProductComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormProductComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(FormProductComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    xit('should create', () => {
        expect(component).toBeTruthy();
    });
});
