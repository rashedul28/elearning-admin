<?php

use App\Http\Controllers\AdminAPIController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/dashboard", [AdminAPIController::class, "dashboard"]);
Route::get("/home", [AdminAPIController::class, "home"]);
Route::get("/teacherAddRequest", [AdminAPIController::class, "teacherAddRequest"]);
Route::get("/teacherList", [AdminAPIController::class, "teacherList"]);
Route::get("/studentList", [AdminAPIController::class, "studentList"]);
Route::get("/courseList", [AdminAPIController::class, "courseList"]);
