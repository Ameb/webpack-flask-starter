
# Flask + Webpack Starter

[![CircleCI](https://circleci.com/gh/Unbabel/frontend-starter/tree/master.svg?style=svg&circle-token=97edd512a945d1412a5a0ff0ba51de509bd837db)](https://circleci.com/gh/Unbabel/frontend-starter/tree/master)

This repo's goal is to get your project up and running faster. It uses Flask for the backend and Vue.js for the frontend, built with Webpack 4.


## Quick start
1. Create a __.env__ file with these variables
```
APP_ENV=localhost
SECRET_KEY=<SECRET_KEY>
MONGO_DB=your_db_nam
MONGO_DB_TEST=your_test_db_name
```
3. Make a virtual env using `mkvirtualenv my-cool-project`
4. Install the backend requirements using `pip install -r requirements.txt`
5. Run the server using `python manage.py runserver`

On another terminal window:
1. Install the frontend requirements using `npm install`
2. Build the static assets using `npm run build`
3. Or start the dev server using `npm run dev`


## Features
- Compiles Vue.js single file components
- Processes .scss files
- Is ready to test the frontend using Jest
- Has a dev mode that launches a server with livereload
- Has a production mode that compresses the files
- Lints the .vue and .js files
- Adds polyfills using Babel


## Commands
- `npm run install` to install the dependencies
- `npm run dev` to launch a dev server with livereload
- `npm run build` to compile the assets for production
- `npm run lint` to lint your files
- `npm run test` to run the tests


## Folder structure
We kept the folder structure as flexible as possible, with some quick find and replaces to fix the paths you should be able to move stuff around.
The `/project/static/` will be populated with a `dist` folder with the files ready to be served by Flask.


### Vue
The `/project/static/src/vue/` folder has 2 folders:
- `/apps/` — for _big-ish_ applications, that are used in one place
- `/components/` — for vue components that are used in multiple places, the LoadingSpinner is a good example, as it might be used in a UserSettings.vue app _and_ in a UserSignup.vue app

This separation might seem overkill, and it might be, depending on the size of your project, but you can always scale it down.

#### Importing stuff on your .vue components
This starter project already has the Unbabel UI Library in its dependencies, you can import it on your Vue component using:

```
import { Modal, Button } from '@unbabel/ui';
```
for javascript, or for the styles:
```
@import '~@unbabel/ui/src/colors';
```

### Sass
Inside the `/coolest_app/static/src/scss/` folder is a possible structure that scales nicely. Put the elements/components that you use frequently inside the `/components/`, add the base styles to the `/base/` folder and the page-specific styles to the `/views/`.
For very small projects you can just compile the `/coolest_app/static/src/scss/all.scss` file and use that on all pages, but as soon as you get some complexity (for example if you have a user facing views and admin views), you probably should separate that, or compile each view .scss file.

### Linking to the assets
You can use
```
<script type="text/javascript" src="{{ url_for('static', filename='dist/app.js') }}"></script>
```
to link to the dist files.


## Testing
We are using Jest for all tests, with the help of the @vue/test-utils library to test Vue.js components more easily. There is an example file on the `/project/static/tests/specs/` folder, that is ready to test Vuex store, if you have that in your apps.


## Linting
There is really no reason why you shouldn't lint your files: it prevents bugs, makes projects inside the same organization consistent and mantains the overall sanity of the other humans who look at your code.

We use a slightly modified version of [AirBnb's config](https://www.npmjs.com/package/eslint-config-airbnb-base), the biggest difference being the use of Tabs instead of Spaces.


## Extras
### Bootstrap
This project includes Bootstrap, which needs jQuery. To remove it:
- run `npm uninstall -D bootstrap popper.js jquery`
- remove the import on the `all.scss` file
- remove the jquery imports on the `home.js` file


### Bower
If you need Bower, add the `bower.json` file to the root of the project. The `.bowerrc` file sets the bower_components folder inside the `/static/` folder so it's easier to manage the automatic deploys