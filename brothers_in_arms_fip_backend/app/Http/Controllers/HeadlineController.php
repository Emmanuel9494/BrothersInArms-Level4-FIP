<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Headline;


class HeadlineController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
         $headlines = Headline::select('id','title','author','date','description','image')->orderBy('id')->get();
         return response()->json($headlines);
     }


     public function getOne($id) {
        $headlines = Headline::select('title','author','date','description','image')->where('blogs.id', '=', $id)->get();
         return response()->json($headlines);
     }


    //  public function save(Request $request) {
    //     $this->validate($request, [
            
    //         'title' => 'required|string',
    //         'author' => 'required|string',
    //         'date' => 'required|date',
    //         'description' => 'required|string',
    //         'image' => 'required|string'

    //     ]);
    //     $headlines = Headline::create($request->all());
    //     return response()->json($headlines, 201);
    // }



    public function save(Request $request) {
        $this->validate($request, [
            'title' => 'required|string',
            'author' => 'required|string',
            'date' => 'required|date',
            'description' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048'
        ]);
    
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
            
            // Define the full path where the image will be stored
            $destinationPath = base_path('images');
    
            // Move the file to the custom storage folder
            $file->move('images', $filename, 'images');
    
            // Store the path in the database (relative path)
            $imagePath = $filename;
        } else {
            return response()->json(['error' => 'Image upload failed'], 400);
        }
    
        $headlines = Headline::create([
            'title' => $request->title,
            'author' => $request->author,
            'date' => $request->date,
            'description' => $request->description,
            'image' => $imagePath
        ]);
    
        return response()->json($headlines, 201);
    }
    
    

     public function update(Request $request, $id) {
        $headlines = Headline::findOrFail($id);
    
        
        $this->validate($request, [
            'title' => 'required|string',
            'author' => 'required|string',
            'date' => 'required|date',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048'
        ]);
    
        // Check if a new image is uploaded
        if ($request->hasFile('image')) {
            // If there is a new image, first delete the old one (if it exists)
            $oldImage = $headlines->image;
            $oldImagePath = public_path('BrothersInArms-Level4-FIP\images' . $oldImage);
            
            // Delete the old image if it exists
            if (file_exists($oldImagePath)) {
                unlink($oldImagePath); // Delete old image from the frontend images folder
            }
    
            // Process new upload image
            $file = $request->file('image');
            $filename = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
            $imagePath = 'BrothersInArms-Level4-FIP\images' . $filename;
            $file->move(public_path('BrothersInArms-Level4-FIP\images'), $filename); // Move the new file to the correct folder
            } else {
                return response()->json(['error' => 'Image upload failed'], 400);
            }
    
        // Update the headline with the new data
        $headlines->update([
            'title' => $request->title,
            'author' => $request->author,
            'date' => $request->date,
            'image' => $imagePath
        ]);
    
        // Return the updated headline as a response
        return response()->json($headlines);
    }
    
    
    
    
    public function delete($id) {
        $headlines = Headline::findOrFail($id);
        $headlines->delete();
        return response()->json(null, 204);
    }
    
}
