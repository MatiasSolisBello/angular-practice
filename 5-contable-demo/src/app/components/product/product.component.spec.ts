import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProductComponent } from "./product.component";
import { HttpClientModule } from "@angular/common/http";

describe('ProductComponent', () => {
    let component: ProductComponent
    let fixture: ComponentFixture<ProductComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProductComponent, HttpClientModule]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ProductComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
