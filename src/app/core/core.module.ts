import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AlbumService } from './album.service';
import { SearchService } from './search.service';
import { TimeFormatter } from './time-formatter.service';

@NgModule({
  imports: [
    HttpModule,
  ],

  providers: [
    SearchService,
    TimeFormatter,
    AlbumService,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('CoreModule should only be imported once');
    }
  }
}
