<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\RecipeResource;
use App\Models\Recipes;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRecipesRequest;
use App\Http\Requests\UpdateRecipesRequest;

class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return RecipeResource::collection(
            Recipes::query()->orderBy("id","desc")->paginate(10)
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRecipesRequest $request)
    {
        $data = $request->validated();

        $recipeList =  Recipes::create($data);
        return new RecipeResource($recipeList);
    }

    /**
     * Display the specified resource.
     */
    public function show(Recipes $recipes)
    {
        return new RecipeResource($recipes);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRecipesRequest $request, Recipes $recipes)
    {
        $data = $request -> validated();
        $recipes->update($data);

        return new RecipeResource($recipes);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Recipes $recipes)
    {
        $recipes->delete();

        return response("",204);
    }
}
