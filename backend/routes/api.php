<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\controllerapi;
use App\Http\Controllers\controllerusuario;
use App\Http\Controllers\controllermovimiento;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::get('/clientes', [controllerapi::class, 'clientes']);
Route::get('/clientesuno', [controllerapi::class, 'clientesuno']);
Route::get('/clientesdos', [controllerapi::class, 'clientesdos']);
Route::post('/movimiento', [controllermovimiento::class, 'movimiento']);
Route::post('/usuariolog', [controllerusuario::class, 'iniciosesion']);
              

  


    // Route::group(['middleware' => ['cors']], function () {
    //     Route::post('usuariolog', [controllerusuario::class, 'iniciosesion']);
    // });