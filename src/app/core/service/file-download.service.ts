import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FileDownloadService {

    public downloadFile(data: any, type: string) {
        const blob = new Blob([data], { type: type.toString() });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
    }

}
