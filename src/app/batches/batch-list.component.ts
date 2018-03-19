import { Component, OnInit } from "@angular/core";
import { BatchService } from "./batch.service";
import { IBatch } from "./batch";

@Component({
    templateUrl: './batch-list.component.html',
    providers: [BatchService]
})
export class BatchListComponent implements OnInit{

    constructor(private _batchSvc: BatchService){}

    pageTitle: string = "Batches";

    filteredBatches: IBatch[];
    batches: IBatch[];
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredBatches = this.listFilter.length > 0 ? this.getFilteredList(this.listFilter): this.batches;
    }
    

    ngOnInit(): void{
        this._batchSvc.getBatches()
            .subscribe(
                batches => {
                    this.batches = batches;
                    this.filteredBatches = this.batches;
                },
                error => this.errorMessage = <any>error);
    }

    getFilteredList(filterBy: string):IBatch[]{
        filterBy = filterBy.toLocaleLowerCase();

        return this.batches.filter((batch: IBatch) => 
            batch.Title.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}