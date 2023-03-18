<?php

namespace App\repositories;

use App\Models\Project;
use Illuminate\Http\Request;
use App\interfaces\CrudInterface;
use Illuminate\Support\Facades\Auth;

class ProjectRepository implements CrudInterface
{
    public function getAll()
    {
        $projects = Project::all();
        return $projects;
    }

    public function findById($id)
    {
        $project = Project::find($id);
        return $project;
    }

    public function create(Request $request)
    {
        $project = Project::create([
            'name' => $request->name,
            'description' => $request->description,
            'status' => $request->status ?? 0,
            'user_id' => Auth::user()->id,
        ]);
        return $project;
    }

    public function edit(Request $request, $id)
    {
        return 0;
    }

    public function delete(Request $request, $id)
    {
        return 0;
    }
}