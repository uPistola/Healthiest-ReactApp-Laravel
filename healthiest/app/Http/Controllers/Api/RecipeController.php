<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\RecipeResource;
use App\Models\Recipes;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    public function index()
    {
        return RecipeResource::collection(
            Recipes::query()->orderBy("id", "desc")->paginate(10)
        );
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'step_by_step' => 'required|array',
            'ingredients' => 'required|array',
            'equips' => 'required|array',
            'description' => 'required|string',
            'difficult' => 'required|string',
            'img' => 'required|string',
        ]);

        $recipe = Recipes::create([
            'name' => $validated['name'],
            'step_by_step' => json_encode($validated['step_by_step']),
            'ingredients' => json_encode($validated['ingredients']),
            'equips' => json_encode($validated['equips']),
            'description' => $validated['description'],
            'difficult' => $validated['difficult'],
            'img' => $validated['img'],
        ]);

        return response()->json(new RecipeResource($recipe), 201);
    }

    public function show(Recipes $recipes)
    {
        return new RecipeResource($recipes);
    }

    public function update(Request $request, Recipes $recipes)
    {
        $data = $request->validate([
            'name' => 'string|max:255',
            'step_by_step' => 'array',
            'ingredients' => 'array',
            'equips' => 'array',
            'description' => 'string',
            'difficult' => 'string',
            'img' => 'string',
        ]);
        
        $recipes->update($data);

        return new RecipeResource($recipes);
    }

    public function destroy(Recipes $recipes)
    {
        $recipes->delete();

        return response(null, 204);
    }
}

