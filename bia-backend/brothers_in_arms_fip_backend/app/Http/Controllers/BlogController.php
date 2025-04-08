<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Blog;


class BlogController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
         $blogs = Blog::select('id','title','author','date','context_body','image','duration','category','description','quote')->orderBy('id')->get();
         return response()->json($blogs);
     }


     public function getOne($id) {
        $blogs = Blog::select('id','title','author','date','context_body','image','duration','category','description','quote')->where('blogs.id', '=', $id)->get();
         return response()->json($blogs);
     }


     public function save(Request $request) {
        $this->validate($request, [
            
            'title' => 'required|string',
            'author' => 'required|string',
            'date' => 'required|date',
            'context_body' => 'required|string',
            'image' => 'required|string',
            'duration' => 'required|integer',
            'category' => 'required|string',
            'description' => 'required|string',
            'quote' => 'required|string'

        ]);
        $blogs = Blog::create($request->all());
        return response()->json($blogs, 201);
    }
    

    public function update(Request $request, $id){

        $this->validate($request, [
            'title' => 'required|string',
            'author' => 'required|string',
            'date' => 'required|date',
            'context_body' => 'required|string',
            'image' => 'required|string',
            'duration' => 'required|integer',
            'category' => 'required|string',
            'description' => 'required|string',
            'quote' => 'required|string'
        ]);

    }
    
    
    public function delete($id) {
        $book = Blog::findOrFail($id);
        $book->delete();
        return response()->json(null, 204);
    }
    
}
