<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Donor;


class DonorController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
         $donors = Donor::select('id','donor_name','campaign','amount')->orderBy('id')->get();
         return response()->json($donors);
     }


     public function getOne($id) {
        // I am ignoring this fuction for now
        $donors = Donor::select('id','donor_name','campaign','amount')->where('donors.id', '=', $id)->get();
         return response()->json($donors);
        
     }


     public function save(Request $request) {
        $this->validate($request, [
            
            'donor_name' => 'required|string',
            'campaign' => 'required|string',
            'amount' => 'required|integer'
        ]);
        $donors = Donor::create($request->all());
        return response()->json($donors, 201);
        
    }


    public function update(Request $request, $id) {
        $this->validate($request, [
            'donor_name' => 'required|string',
            'campaign' => 'required|string',
            'amount' => 'required|integer'
        ]);

        $donors = Donor::findOrFail($id);
        $donors->update($request->all());
        return response()->json($donors, 200);
        
    }
    
    
    public function delete($id) {
        $donors = Donor::findOrFail($id);
        $donors->delete();
        return response()->json(null, 204);
    }
    
}
