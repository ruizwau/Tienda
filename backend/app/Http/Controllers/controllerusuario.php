<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

class controllerusuario extends Controller
{
    public function iniciosesion(Request $request)
    {

        
        $respuesta = Http::asForm()->post("http://132.148.19.159/OAuth/Token", [
            'username' => $request['username'],
            'password'=>$request['password'],
             'grant_type'=>'password'
        ]);

        $login=$respuesta->json();
        return $login;

    }
}
