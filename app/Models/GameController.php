<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class GameController extends Model
{
    public function __invoke(Request $request)
    {
        return Inertia::render('Game/Game');
    }
}