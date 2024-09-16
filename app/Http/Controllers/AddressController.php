<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    public function index(Request $request)
    {
        return Address::where('user_id', $request->user()->id)->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'address' => 'required|string|max:255',
        ]);

        $address = Address::create([
            'user_id' => $request->user()->id,
            'address' => $request->address,
        ]);

        return response()->json($address, 201);
    }
}
