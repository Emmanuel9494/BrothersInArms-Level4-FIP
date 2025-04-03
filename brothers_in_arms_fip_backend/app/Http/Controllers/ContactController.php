<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Contact;



class ContactController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function getAll(){
        // Select * FROM authors
        $contacts = Contact::all();
        return response()->json($contacts);

    }

    public function interests($id){

        $contacts = Contact::join('interests', 'contacts.interests_id', '=', 'interests.id')->where('interests.id', '=', $id)->select('contacts.id', 'contacts.name','contacts.email', 'contacts.volunteer_type', 'contacts.message')->get();
        
        return response()->json($contacts);

    }

    // public function save(Request $request) {
    //     $this->validate($request, [
            
    //         'name' => 'required|string',
    //         'email' => 'required|string',
    //         'volunteer_type' => 'required|string',
    //         'message' => 'required|string',

    //     ]);

    //     $contacts = Contact::create($request->all());
    //     return response()->json($contacts, 201);
    // }

    public function save(Request $request) {
        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|string',
            'volunteer_type' => 'required|string',
            'message' => 'required|string'
        ]);
    
        // Fetch the corresponding interest_id based on volunteer_type
        $interest = Interest::where('volunteer', $request->volunteer_type)->first();
    
        if (!$interest) {
            return response()->json(['error' => 'Invalid volunteer type.'], 400);
        }
    
        // Add the interests_id dynamically
        $contacts = Contact::create([
            'name' => $request->name,
            'email' => $request->email,
            'volunteer_type' => $request->volunteer_type,
            'message' => $request->message,
            'interests_id' => $interest->id, // foreign key 
        ]);
    
        return response()->json($contacts, 201);
    }

    public function update(Request $request, $id){

        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|string',
            'volunteer_type' => 'required|string',
            'message' => 'required|string'
        ]);

    }

    public function delete($id){

        $contacts = Contact::findOrFail($id);
        $contacts->delete();
        return response()->json(null, 204);

    }


     

    
}
