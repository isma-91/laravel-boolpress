<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function index()
    {
        $posts = Post::all();

        return response()->json([
            'succes' => true,
            'results'=> $posts
        ]);
    }

    public function show(Post $post)
    {
        $post = Post::where('id', $post->id)->with(['category', 'tags'])->first();
        //Grazie alla relazione tra tabelle che abbiamo stabilito possiamo (come abbiamo fatto per il backoffice con blade/php) anche qui nel controller "di vue", dell'API, accedere alle category e ai tags associati al post. In questo caso dobbiamo ridichiarare prwaticamente il $post che ci viene passato copme argomento nello show, però funziona. Ci vengono passati tutti i dati di category e di tags. Tutto il resto verrà fatto nella pagina vue->
        return response()->json([
            'succes' => true,
            'results'=> $post
        ]);
    }

    public function homegrid(){
        $posts = Post::inRandomOrder()->limit(9)->get();

        return response()->json([
            'succes' => true,
            'results'=> $posts
        ]);
    }
}
