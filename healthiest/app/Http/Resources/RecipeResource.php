<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RecipeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"=> $this->id,
            "name"=> $this->name,
            "step_by_step"=> $this->step_by_step,
            "ingredients"=> $this->ingredients,
            "equips"=> $this->equips,
            "description"=> $this->description,
            "difficult"=> $this->difficult,
            "img"=> $this->img,
        ];
    }
}
