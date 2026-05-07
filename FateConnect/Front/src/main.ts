import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

try {
  await bootstrapApplication(AppComponent, appConfig);
} catch {
  const msg = document.createElement('p');
  msg.style.fontFamily = 'sans-serif';
  msg.style.padding = '1rem';
  msg.textContent =
    'Não foi possível iniciar o aplicativo. Atualize a página ou tente mais tarde.';
  document.body.replaceChildren(msg);
}
