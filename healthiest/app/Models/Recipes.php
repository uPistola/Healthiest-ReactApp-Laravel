<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipes extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
        'step_by_step',
        'ingredients',
        'equips',
        'description',
        'difficult',
        'img',
    ];
}
