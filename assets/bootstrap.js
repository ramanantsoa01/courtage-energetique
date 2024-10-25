// import { startStimulusApp } from '@symfony/stimulus-bundle';

// const app = startStimulusApp();
// // register any custom, 3rd party controllers here
// // app.register('some_controller_name', SomeImportedController);

// assets/bootstrap.js

import { Application } from 'stimulus';
import { registerControllersFrom } from '@symfony/stimulus-bridge';

// Crée l'application Stimulus
const application = Application.start();

// Enregistre les contrôleurs Stimulus
registerControllersFrom(require.context('./controllers', true, /\.js$/), application);
