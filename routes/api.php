<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

// Маршруты для аутентификации
Route::prefix('auth')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
});

// Защищенные маршруты
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        // Получение информации о текущем пользователе
        return response()->json($request->user());
    });
});
