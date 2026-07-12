import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './root/app.config';
import { Root } from './root/root';

bootstrapApplication(Root, appConfig)
  .catch((err) => console.error(err));
