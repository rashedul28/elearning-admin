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
Route::get("/showAllTeacher", [AdminAPIController::class, "showAllTeacher"]);
Route::delete("/deleteTeacher/{id}", [AdminAPIController::class, "deleteTeacher"]);

Route::get("/showAllStudent", [AdminAPIController::class, "showAllStudent"]);
Route::delete("/deleteStudent/{id}", [AdminAPIController::class, "deleteStudent"]);

Route::get("/showAllCourse", [AdminAPIController::class, "showAllCourse"]);
Route::post("/addCourse", [AdminAPIController::class, "addCourse"]);
Route::delete("/deleteCourse/{id}", [AdminAPIController::class, "deleteCourse"]);
Route::get("/updateCourse/{id}", [AdminAPIController::class, "findCourse"]);
Route::put("/updateCourse/{id}", [AdminAPIController::class, "updateCourse"]);

