import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BodegaComponent } from "./bodega.component";

describe('BodegaComponent', () => {
    let component: BodegaComponent
    let fixture: ComponentFixture<BodegaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BodegaComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(BodegaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    xit('should create', () => {
        expect(component).toBeTruthy();
    });

});
