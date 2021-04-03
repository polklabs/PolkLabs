# PolkLabs

## How to add a Project

1. Add initial info to _projectList.json_ with a unique __PROJECT_ID__
2. Create separate json file in `/src/assets/json/projects`, with the filename matching the __PROJECT_ID__ in _projectList.json_
3. Add any necessary content to `/src/assets/content/projects/PROJECT_ID/`, such as _header.png_

### Optional Prerendering Steps
#### The previous steps will work on their own but will not show up in google searches

4. Run `python routesGen.py` to generate _routesFile.txt_, needed for prerendering
5. Edit `/src/apps/prerendered/prerender-project.ts`, add import for json, add __PROJECT_ID__ to switch case

### Finally
6. Remove `/dist/` folder
7. Run `npm run prerender`, output will be in `/dist/PolkLabs/browser`

To add a blog post, perform the above steps replacing _project(s)_ with _blog(s)_

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
