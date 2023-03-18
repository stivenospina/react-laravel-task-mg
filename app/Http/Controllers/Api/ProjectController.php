<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\repositories\ProjectRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    public $projectRepository;

    public function __construct(ProjectRepository $projectRepository)
    {
        $this->projectRepository = $projectRepository;
    }

    public function index()
    {
        $projects = $this->projectRepository->getAll();

        return response()->json([
                'success' => true,
                'message' => 'Project List',
                'data' => $projects,
        ]);
    }

    public function show($id)
    {
        $project = $this->projectRepository->findById($id);

        if (is_null($project)) {
            return response()->json([
                'success' => false,
                'message' => 'Project Details',
                'data' => null,
            ]);
        }

        return response()->json([
                'success' => true,
                'message' => 'Project Details',
                'data' => $project,
        ]);
    }

    public function store(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'user_id' => 'required',
        ],
        [
            'name.required' => 'Name field is required',
            'description.required' => 'Description field is required',
            'user_id.required' => 'User not found',
        ]);
        if ($validate->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validate->getMessageBag()->first()
            ]);
        }

        $project = $this->projectRepository->create($request);
        return response()->json([
            'success' => true,
            'message' => 'Project Stored',
            'data' => $project,
    ]);

    }
}
