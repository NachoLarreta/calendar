import {Pipe, PipeTransform, ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {TranslateService} from '../services/translate.service';

@Pipe({name: 'translate', pure: false})
export class TranslatePipe implements PipeTransform, OnDestroy {

  private ngUnsubscribe: Subject<any>;

  constructor(private translateService: TranslateService, private ref: ChangeDetectorRef) {
    this.ngUnsubscribe = new Subject();
    this.translateService.reloadTranslate.pipe(takeUntil(this.ngUnsubscribe)).subscribe(reload => this.reloadTransform());
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  transform(value: string, attrReplace?: any[]): string {
    return this.translateService.instant(value, attrReplace);
  }

  private reloadTransform(){
    this.ref.markForCheck();
  }

}
