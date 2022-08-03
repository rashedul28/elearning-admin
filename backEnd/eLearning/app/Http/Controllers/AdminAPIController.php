<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Http\Request;

class AdminAPIController extends Controller
{
    function dashboard()
    {
        return response()->json("dashboard");
    }
    function home()
    {
        return response()->json("home");
    }
    function teacherAddRequest()
    {
        return response()->json("teacherAddRequest");
    }
    function teacherList()
    {
        $teacherList = Teacher::all();
        return response()->json($teacherList);
    }
    function studentList()
    {
        $studentList = Student::all();
        return response()->json($studentList);
    }
    function courseList()
    {
        $courseList = Course::all();
        return response()->json($courseList);
    }
}
