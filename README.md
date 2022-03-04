# PolkLabs

## How to add a Project

1. Add initial info to _projectList.json_ with a unique __PROJECT_ID__
2. Create separate json file in `/src/assets/json/projects`, with the filename matching the __PROJECT_ID__ in _projectList.json_
3. Add any necessary content to `/src/assets/content/projects/PROJECT_ID/`, such as _header.png_

### Optional Prerendering Steps
#### The previous steps will work on their own but will not show up in google searches

4. Run `python routesGen.py` to generate _routesFile.txt_, needed for prerendering
5. Edit `/src/apps/prerendered/prerender-project.ts`, add import for json, add __PROJECT_ID__ to switch case

### Publishing

Run `npm run ghpages`

## For prerendering, no longer used
6. Remove `/dist/` folder
7. Run `npm run build`, output will be in `/dist/PolkLabs/browser`
8. cd into output folder `/dist/PolkLabs/browser`
9. `git init`
10. `git add .`
11. `git commit -m "Initial commit"`
12. `git remote add origin git@github.com:polklabs/PolkLabs.git`
13. `git push --force origin master:gh-pages`

To add a blog post, perform the above steps replacing _project(s)_ with _blog(s)_

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
