<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\repositories\TaskRepository;
use Illuminate\Support\Facades\Validator;

class TaskController extends Controller
{
    public $taskRepository;

    /**
     * Constructor for the controller
     */
    public function __construct(TaskRepository $taskRepository)
    {
        $this->taskRepository = $taskRepository;
    }

    public function index()
    {
        $tasks = $this->taskRepository->getAll();

        return response()->json([
                'success' => true,
                'message' => 'Task List',
                'data' => $tasks,
        ]);
    }

    public function show($id)
    {
        $task = $this->taskRepository->findById($id);

        if (is_null($task)) {
            return response()->json([
                'success' => false,
                'message' => 'Task not found',
                'data' => null,
            ]);
        }

        return response()->json([
                'success' => true,
                'message' => 'Task Details',
                'data' => $task,
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'description' => 'required',
            'project_id' => 'required',
        ],
        [
            'name.required' => 'Name field is required',
            'description.required' => 'Description field is required',
            'project_id.required' => 'Project not found',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()->first()
            ]);
        }

        $task = $this->taskRepository->create($request);
        return response()->json([
            'success' => true,
            'message' => 'Task Stored',
            'data' => $task,
        ]);

    }

    public function update(Request $request, $id)
    {
        $task = $this->taskRepository->findById($id);
        if(is_null($task)){
            return response()->json([
                'success' => false,
                'message' => 'Task Not Found',
                'data' => null,
            ]);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'description' => 'required',
            'project_id' => 'required',
        ],
        [
            'name.required' => 'Please give task name',
            'description.required' => 'Please give task description',
            'project_id.required' => 'Project not found',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()->first(),
                'errors' => $validator->getMessageBag(),
            ]);
        }

        $task = $this->taskRepository->edit($request, $id);
        return response()->json([
            'success' => true,
            'message' => 'Task Updated',
            'data' => $task,
        ]);
    }

    public function destroy($id)
    {
        $task = $this->taskRepository->findById($id);
        if(is_null($task)){
            return response()->json([
                'success' => false,
                'message' => 'Task Not Found',
                'data' => null,
            ]);
        }
        $task = $this->taskRepository->delete($id);
        return response()->json([
            'success' => true,
            'message' => 'Task Deleted',
            'data' => $task,
        ]);
        
    }
}
