<?php

namespace App\repositories;

use App\Models\Task;
use App\interfaces\CrudInterface;
use Illuminate\Http\Request;

class TaskRepository implements CrudInterface
{
    public function getAll()
    {
        $tasks = Task::all();
        return $tasks;
    }

    public function findById($id)
    {
        $task = Task::with('project')->find($id);
        return $task;
    }

    public function create(Request $request)
    {
        $task = Task::create([
            'name' => $request->name,
            'description' => $request->description,
            'status' => $request->status ?? 0,
            'project_id' => $request->project_id,
        ]);
        return $task;
    }

    public function edit(Request $request, $id)
    {
        $task = $this->findById($id);
        $task->update([
            'name' => $request->name,
            'description' => $request->description,
            'project_id' => $request->project_id,
        ]);
        return $task;
    }

    public function delete($id)
    {
        $task = $this->findById($id);
        $task->delete();
        return $task;
    }
}