import { Injectable } from '@angular/core';

@Injectable()
export class EntriesService {

  entries: any = [];

  constructor() { }

  addEntry(entry) {
    this.entries.push(entry);
  }

  deleteEntry(index) {
    this.entries.splice(index, 1);
  }
}
