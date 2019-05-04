import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class PageService {
  public loading$: EventEmitter<boolean>;
  private _loading: boolean;

  constructor() {
    this.loading$ = new EventEmitter<boolean>();
    this._loading = true;
  }

  /**
   * Set the loading status for pages
   * @param loading
   */
  public loading(loading: boolean): void {
    this._loading = loading;
    this.loading$.emit(this._loading);
  }
}
