![logo](https://raw.githubusercontent.com/manifestinteractive/company_logo/master/rectangle/color_flat/exports/rectangle_color_flat.png)

Angular Mobile Template for iOS &amp; Android

Install:
---

To install `angular-mobile-template` locally for development:

```bash
cd /path/to/angular-mobile-template
npm install
```

If prompted during the install to select library versions, make sure to choose `Angular 1.3.8` and `jQuery v1.10 or v1.11`

To view `angular-mobile-template` in the browser:

```bash
cd /path/to/angular-mobile-template
npm start
```

The `angular-mobile-template` app will open in your default browser at [http://127.0.0.1:8080](http://127.0.0.1:8080)

Grunt Terminal Commands:
---

You can use the following build commands via terminal:

#### Build for Development:

```bash
grunt build:dev
```

#### Build for Distribution:

The following command will copy all files to a www folder so the app can be used by PhoneGap.

```bash
grunt build:dist
```

#### Create a Release:

```bash
grunt release
```

#### Create a Major Release:

The following will:

1. Increase the build's major number ( e.g. v __0__.5.1 => v __1__.0.0 )
1. Copy & Package Distribution Files from `src` to `www`
3. Perform a git commit

```bash
grunt release-major
```

#### Create a Minor Release:

The following will:

1. Increase the build's minor number ( e.g. v 0.__5__.1 => v 0.__6__.0 )
1. Copy & Package Distribution Files from `src` to `www`
3. Perform a git commit

```bash
grunt release-minor
```

#### Create a Release Patch:

The following will:

1. Increase the build's patch number ( e.g. v 0.5.__1__ => v 0.5.__2__ )
1. Copy & Package Distribution Files from `src` to `www`
3. Perform a git commit

```bash
grunt release-patch
```

#### Create a Pre-Release:

The following will:

1. Copy & Package Distribution Files from `src` to `www`
2. Perform a git commit

```bash
grunt prerelease
```