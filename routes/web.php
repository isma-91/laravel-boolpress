<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('guest.home');
// })->name('home');

Auth::routes();

// Route::get('/home', 'Admin\HomeController@index')->name('home');

Route::middleware('auth')
    ->namespace('Admin')
    ->name('admin.')
    ->prefix('admin')
    ->group(function () {
        Route::get('/dashboard', 'HomeController@index')->name('name');
        Route::resource('posts', 'PostController');
        Route::resource('categories', 'CategoryController');
        Route::resource('tags', 'TagController');
});

Route::get('{any?}', function () {
    return view('guest.home');
})->where("any", ".*")->name('guest.home');
// Serve per acchiappare qualsiasi indirizzo venga immesso, e viene rendirizzato alla homepage del sito, poi ci pensa il router di vue a reindirizzarti nella pagina giusta, se esistente. Perchè le pagine "composte" nel server non esistono, ma ti ci manda il router di vue quindi si deve passare dalla homepage, se si parte, ad esempio da "http://localhost:8000/about" non troverà la pagina perchè nelle rotte non esiste questa pagina, ma se si passa dalla home, ci penserà poi vue a mandare alla pagina giusta, perchè è il router di vue che ti manda a quella pagina e non il server.
// IMPORTANTISSIMO: METTERE QUESTO ALLA FINE DELLE ROTTE, IN ULTIMA POSIZIONE, ALTRIMENTI OVVIAMENTE ACCHIAPPA TUTTE LE ROTTE, QUINDI SE LO METTESSIMO IN PRIMA POSIZIONE PRENDEREBBE APPUNTO TUTTE LE ROTTE IMMESSE E QUINDI ANCHE QUELLE CORRETTE E ESISTENTI, DI CONSEGUENZA NON RIUSCIREMMO PIÙ A VEDERE QUELLE PAGINE. In questo caso l'ordine è fondamentale.
