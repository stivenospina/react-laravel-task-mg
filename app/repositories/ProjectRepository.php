<?php

namespace App\repositories;

use App\Models\Project;
use Illuminate\Http\Request;
use App\interfaces\CrudInterface;

class ProjectRepository implements CrudInterface
{
    public function getAll()
    {
        $projects = Project::withCount('tasks')->get();
        return $projects;
    }

    public function findById($id)
    {
        $project = Project::with('tasks')->find($id);
        return $project;
    }

    public function create(Request $request)
    {
        $project = Project::create([
            'name' => $request->name,
            'description' => $request->description,
            'status' => $request->status ?? 0,
            'user_id' => 1,
        ]);
        return $project;
    }

    public function edit(Request $request, $id)
    {
        $project = $this->findById($id);
        $project->update([
            'name' => $request->name,
            'description' => $request->description,
            'status' => $request->status ?? 0,
            'user_id' => 1,
        ]);
        return $project;
    }

    public function delete($id)
    {
        $project = $this->findById($id);
        $project->delete();
        return $project;
    }
}