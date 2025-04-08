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


     public function save(Request $request) {
        $this->validate($request, [
            
            'title' => 'required|string',
            'author' => 'required|string',
            'date' => 'required|date',
            'description' => 'required|string',
            'image' => 'required|string'

        ]);
        $headlines = Headline::create($request->all());
        return response()->json($headlines, 201);
    }


    
    

    public function update(Request $request, $id){

        $this->validate($request, [
            'title' => 'required|string',
            'author' => 'required|string',
            'date' => 'required|date',
            'description' => 'required|string',
            'image' => 'required|string'
        ]);

       
        $headlines->update($request->all());
        return response()->json($headlines, 200);
    }
    
    
    
    
    public function delete($id) {
        $headlines = Headline::findOrFail($id);
        $headlines->delete();
        return response()->json(null, 204);
    }
    
}
