<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Interest;


class InterestController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
         $interests = Interest::select('id','volunteer')->orderBy('id')->get();
         return response()->json($interests);
     }


     public function contacts($id){

        $interests = Interest::join('contacts', 'contacts.interests_id', '=', 'interests.id')->where('interests.id', '=', $id)->select('contacts.volunteer_type','contacts.id', 'contacts.name', 'contacts.email',  'contacts.message')->orderby('volunteer_type')->get();
        
        return response()->json($interests);

    }


     public function save(Request $request) {
        $this->validate($request, [
            
            'volunteer' => 'required|string'

        ]);
        $interests = Interest::create($request->all());
        return response()->json($interests, 201);
    }


    public function update(Request $request, $id) {
        $interests = Interest::findOrFail($id);
    
        $this->validate($request, [
            
            'volunteer' => 'required|string'

        ]);
        $interests->update($request->all());
        return response()->json($interests, 200);
    }
    
    
    public function delete($id) {
        $interests = Interest::findOrFail($id);
        $interests->delete();
        return response()->json(null, 204);
    }
    
}
