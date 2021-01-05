# Laravel 6.x to 7.x

<box header>

Please follow the below steps to upgrade the Laravel version in your exiting project.

</box>

<box>

* **Symfony 5 Required**
    
Laravel 7 upgraded its underlying Symfony components to the 5.x series, which is now also the new minimum compatible version.
    
* **PHP 7.2.5 Required**
    
Likelihood Of Impact: Low
    
* **Updating Dependencies**
    
Update your `laravel/framework` to `^7.0` in your `composer.json` file. In addition, update your `nunomaduro/collision` to `^4.1`, `phpunit/phpunit` to `^8.5`, `laravel/tinker` to `^2.0`, and `facade/ignition` to `^2.0`.
  
<br>

The following first-party packages have new major releases to support Laravel 7. If there are any, read through their individual upgrade guides before upgrading:
    
```
Browser Kit Testing v6.0
Envoy v2.0
Horizon v4.0
Nova v3.0
Scout v8.0
Telescope v3.0
UI v2.0 (No changes necessary)
``` 
              
    
Finally, examine any other third-party packages consumed by your application and verify you are using the proper version for Laravel 7 support.

You must have to update below mentioned packages in `composer.json` file.
    
```json
"require": {
  "php": "^7.2.5",
  "doctrine/dbal": "^2.10",
  "fideloper/proxy": "^4.2",
  "fruitcake/laravel-cors": "^1.0",
  "guzzlehttp/guzzle": "^6.3",
  "laravel/framework": "^7.0",
  "laravel/passport": "^8.4",
  "laravel/tinker": "^2.0",
  "spatie/laravel-permission": "^3.6"
},
"require-dev": {
  "facade/ignition": "^2.0",
  "fzaninotto/faker": "^1.9.1",
  "laravel/ui": "^2.0",
  "mockery/mockery": "^1.3.1",
  "nunomaduro/collision": "^4.1",
  "phpunit/phpunit": "^8.5"
},
```

<br />              
    
**Authentication**
    
All authentication scaffolding has been moved to the `laravel/ui` repository. If you are using Laravel's authentication scaffolding, you should install the `^2.0` release of this package and the package should be installed in all environments. If you were previously including this package in the `require-dev` object of your application's `composer.json` file, you should move it to the `require` object:

```bash
composer require laravel/ui "^2.0"
```
            
    
* Next, please update your session configuration file's secure option to have a fallback value of `null`. You can find it in config/session.php.

```php
'secure' => env('SESSION_SECURE_COOKIE', null),
```
          

* Second, You'll need to make some changes in App\\Exceptions\\Handler class should accept instances of the Throwable interface instead of Exception instances:

```php
use Throwable;
​
public function report(Throwable $exception);
public function shouldReport(Throwable $exception);
public function render($request, Throwable $exception);
public function renderForConsole($output, Throwable $exception);
```
          

* Now run the below command to upgrade:
```bash
composer update
```
          

* After successfully executing `composer update` command, check the Laravel version:

```bash
php artisan --version
```
          

* After successfully updating Laravel version, run below command to serve your project.

```bash
php artisan key: generate
npm install or yarn
npm run dev or yarn dev
php artisan serve`
```

</box>
