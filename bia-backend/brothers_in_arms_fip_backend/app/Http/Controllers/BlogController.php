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


    //  public function save(Request $request) {
    //     $this->validate($request, [
            
    //         'title' => 'required|string',
    //         'author' => 'required|string',
    //         'date' => 'required|date',
    //         'context_body' => 'required|string',
    //         'image' => 'required|string',
    //         'duration' => 'required|integer',
    //         'category' => 'required|string',
    //         'description' => 'required|string',
    //         'quote' => 'required|string'

    //     ]);
    //     $blogs = Blog::create($request->all());
    //     return response()->json($blogs, 201);
    // }

    public function save(Request $request) {
        $this->validate($request, [

           'title' => 'required|string',
            'author' => 'required|string',
            'date' => 'required|date',
            'context_body' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            'duration' => 'required|integer',
            'category' => 'required|string',
            'description' => 'required|string',
            'quote' => 'required|string'
            
        
           ]);

        if ($request->hasFile('image')) {
           $file = $request->file('image');
           $filename = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
           $destinationPath = base_path('images');
           $file->move('images', $filename, 'images');
           $imagePath = $filename;
        } else {
            return response()->json(['error' => 'Image upload failed'], 400);
        }

        $blogs = Blog::create([

            'title' => $request->title,
            'author' => $request->author,
            'date' => $request->date,
            'context_body' => $request->context_body,
            'image' => $imagePath,
            'duration' => $request->duration,
            'category' => $request->category,
            'description' => $request->description,
            'quote' => $request->quote

        ]);

        return response()->json($blogs, 201);
    } 



    
    

    public function update(Request $request, $id) {
        $blogs = Blog::findOrFail($id);
    
        
        $this->validate($request, [
            
            'title' => 'required|string',
            'author' => 'required|string',
            'date' => 'required|date',
            'context_body' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            'duration' => 'required|integer',
            'category' => 'required|string',
            'description' => 'required|string',
            'quote' => 'required|string'

        ]);
    
        // Check if a new image is uploaded
        if ($request->hasFile('image')) {
            // If there is a new image, first delete the old one (if it exists)
            $oldImage = $headlines->image;
            $oldImagePath = public_path('BrothersInArms-Level4-FIP\images' . $oldImage);
            
            // Delete the old image if it exists
            if (file_exists($oldImagePath)) {
                unlink($oldImagePath); // Deletes old image
            }
    
            // Process new upload image
            $file = $request->file('image');
            $filename = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
            $imagePath = 'BrothersInArms-Level4-FIP\images' . $filename; 
            $file->move(public_path('BrothersInArms-Level4-FIP\images'), $filename); 
        } else {
            return response()->json(['error' => 'Image upload failed'], 400);
        }
    
        // Update the headline with the new data
        $blogs->update([
           
            'title' => $request->title,
            'author' => $request->author,
            'date' => $request->date,
            'context_body' => $request->context_body,
            'image' => $imagePath,
            'duration' => $request->duration,
            'category' => $request->category,
            'description' => $request->description,
            'quote' => $request->quote


        ]);
    
        // Return the updated headline as a response
        return response()->json($blogs);
    }
    
    
    public function delete($id) {
        $book = Blog::findOrFail($id);
        $book->delete();
        return response()->json(null, 204);
    }
    
}
