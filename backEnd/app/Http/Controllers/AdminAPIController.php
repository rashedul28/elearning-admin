<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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
    // ---------------------------------Teacher---------------
    function showAllTeacher()
    {
        $teacherList = Teacher::all();
        return response()->json($teacherList);
    }

    public function deleteTeacher($id)
    {
        $teacherFind = Teacher::find($id);
        if($teacherFind)
        {
            $teacherFind->delete();
            return response()->json([
                "status" => 200,
                "message" => "Teacher deleted successfully",
            ]);
        }
        else
        {
            return response()->json([
                "status" => 404,
                "message" => "Teacher ID not found",
            ]);
        }
    }
    // -------------------------------------student-----------------
    function showAllStudent()
    {
        $studentList = Student::all();
        return response()->json($studentList);
    }

    public function deleteStudent($id)
    {
        $studentFind = Student::find($id);
        if($studentFind)
        {
            $studentFind->delete();
            return response()->json([
                "status" => 200,
                "message" => "Student deleted successfully",
            ]);
        }
        else
        {
            return response()->json([
                "status" => 404,
                "message" => "Student ID not found",
            ]);
        }
    }

    // ----------------------------------Course----------------------
    function showAllCourse()
    {
        $courseList = Course::all();
        return response()->json($courseList);
    }
    function addCourse(Request $reacive)
    {
        $valid = Validator::make($reacive->all(),
            [
                "courseName" => "required ",
                "coursePrice" => "required | regex:/^[0-9]+$/i",
                "courseType" => "required ",
                "studentCapacity" => "required ",
                "courseDuration" => "required ",
                // "courseBanner" => "required|image|mimes:jpeg,png,jpg,gif,svg",
            ],
        );

        if($valid->fails()){
            return response()->json([
                "status" => 422,
                "message" => "Validation not match",
            ]);
        }

        // $name =  $reacive->file('course_pro_pic')->getClientOriginalName();
        // $ext = $reacive->file('course_pro_pic')->getClientOriginalExtension();
        // $path = "profile_images/courses/";
        // $file_name  = time() . "_$name";
        // $reacive->file('course_pro_pic')->storeAs('public/' . $path, $file_name);

        $crs = new course();

        $crs->course_name = $reacive->courseName;
        $crs->price = $reacive->coursePrice;
        $crs->catagory = $reacive->courseType;
        $crs->student_count = $reacive->studentCapacity;
        $crs->duration = $reacive->courseDuration;

        // $crs->profile_image = 'storage/' . $path . $file_name;
        $crs->profile_image = '';

        $crs->save();

        return response()->json([
            "status" => 200,
            "message" => "Course added successfully",
            "data" => $crs,
            
        ]);
    }

    public function deleteCourse($id)
    {
        $courseFind = Course::find($id);
        if($courseFind)
        {
            $courseFind->delete();
            return response()->json([
                "status" => 200,
                "message" => "Course deleted successfully",
            ]);
        }
        else
        {
            return response()->json([
                "status" => 404,
                "message" => "Course ID not found",
            ]);
        }
    }

    public function findCourse($id)
    {
        $courseFind = Course::find($id);

        if($courseFind)
        {
            return response()->json([
                "status" => 200,
                "course" => $courseFind
            ]);
        }
        else
        {
            return response()->json([
                "status" => 404,
                "message" => "No Course Id Found"
            ]);
        }
    }

    public function updateCourse(Request  $reacive, $id)
    {
        
            $crs = Course::find($id);

            if($crs)
            {
                $valid = Validator::make($reacive->course,
                    [
                        "course_name" => "required",
                        "price" => "required",
                        "catagory" => "required",
                        "student_count" => "required",
                        "duration" => "required",
                        // "courseBanner" => "required|image|mimes:jpeg,png,jpg,gif,svg",
                    ],
                );

                if($valid->fails()){
                    return response()->json([
                        "status" => 422,
                        "message" => "Validaton not match",
                        $valid->errors(),
                    ]);
                }
                // $crs = new course();

                $crs->course_name = $reacive->course["course_name"];
                $crs->price = $reacive->course["price"];
                $crs->catagory = $reacive->course["catagory"];
                $crs->student_count = $reacive->course["student_count"];
                $crs->duration = $reacive->course["duration"];

                // $crs->profile_image = 'storage/' . $path . $file_name;
                $crs->profile_image = '';

                $crs->save();

                return response()->json([
                    "status" => 200,
                    "message" => "Course update successfully",
                    "data" => $crs,
                    
                ]);
            }
            else
            {
                return response()->json([
                    "status" => 404,
                    "message" => "No Course Id Found"
                ]);
            }
        

        // $name =  $reacive->file('course_pro_pic')->getClientOriginalName();
        // $ext = $reacive->file('course_pro_pic')->getClientOriginalExtension();
        // $path = "profile_images/courses/";
        // $file_name  = time() . "_$name";
        // $reacive->file('course_pro_pic')->storeAs('public/' . $path, $file_name);

        
    }


}
