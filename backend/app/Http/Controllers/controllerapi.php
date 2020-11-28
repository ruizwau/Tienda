<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

class controllerapi extends Controller
{
    public function clientes()
    {
        $respuesta=Http::get("http://132.148.19.159:80/api/client/Get?posnet=0");
        $clientes=$respuesta->json();
        return $clientes;

    }


    public function clientesuno()
    {
        $respuesta=Http::get("http://132.148.19.159:80/api/client/Get?posnet=1");
        $clientes_sinpostnet=$respuesta->json();
        return $clientes_sinpostnet;


    }


    public function clientesdos()
    {
        $respuesta=Http::get("http://132.148.19.159:80/api/client/Get?posnet=2");
        $clientes_conpostnet=$respuesta->json();
        return $clientes_conpostnet;

    }
}
