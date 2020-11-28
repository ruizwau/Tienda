<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

class controllermovimiento extends Controller
{
    public function movimiento(Request $request)
    {
       
        // $id=$request->input['ClientId'];
        // $df=$request->input['datefrom'];
        // $dt=$request->input['dateTo'];
        $id=$request->input('ClientId');
        $df=$request->input('datefrom');
        $dt=$request->input('dateTo');


        try{
            $response=Http::get("http://132.148.19.159:80/api/account/Get/$id?datefrom=$df&dateTo=$dt");
            if($response->successful()){
                return $response->json();
            }else{
                $response->throw();
            }   
        }catch(\Illuminate\Http\Client\RequestException $e){
            return $e->getMessage();
        }


        // $respuesta=Http::get("http://132.148.19.159:80/api/account/Get/$id?datefrom=$df&dateTo=$dt");
        // $data=$respuesta->json();
        // return $data;

    }
}
