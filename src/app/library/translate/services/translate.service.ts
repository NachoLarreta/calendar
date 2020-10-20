import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as lodash from 'lodash';

@Injectable()
export class TranslateService{

    private _reloadTranslate: BehaviorSubject<any>;
    private _locale: string;
    private dictionary;

    constructor(private http: HttpClient) {
        this.dictionary = {};
        this.reloadTranslate = new BehaviorSubject<any>(null);
        this.locale = 'en';
        this.getDictionary();
    }

    public get locale() {
        return this._locale;
    }

    public set locale(locale: string) {
        if (locale && locale.trim().length > 0 && locale !== this.locale) {
            this._locale = lodash.clone(locale);
            document.body.lang = this._locale;
            this.getDictionary();
        }
    }

    public get reloadTranslate(): BehaviorSubject<any> {
        return this._reloadTranslate;
    }

    public set reloadTranslate(value: BehaviorSubject<any>) {
        this._reloadTranslate = value;
    }

    public updateReloadTranslate(value: any){
        this.reloadTranslate.next(value);
    }

    private async getDictionary() {
        try {
            this.dictionary = await this.http.get(`assets/locale/messages.${this.locale}.json`).toPromise();
            this.reloadTranslate.next(true);
            return Promise.resolve();
        } catch (error) {
            console.error('An error has ocurred loading the dictionary with the locale: ' + this.locale);
            return Promise.reject();
        }
    }

    instant(value: string, variables: string[] = null): string {
        let message: string = this.dictionary[value];
        if (variables !== null && message) {
            variables = [].concat(variables);
            // tslint:disable-next-line:forin
            for (const i in variables) {
                message = message.replace(new RegExp('%' + i, 'g'), variables[i]);
            }
        }
        return message || value;
    }

    translateArray(arrayDeStrings: Array<string>) {
      let message = '';
      if (!arrayDeStrings) {
        return message;
      }
      for (let index = 0; index < arrayDeStrings.length; index++) {
        const traduccion = this.instant(arrayDeStrings[index]);
        if (index !== arrayDeStrings.length - 1) {
          message += traduccion + ', ';
        } else {
          message += traduccion + '.';
        }
      }
      return message;
    }

}
