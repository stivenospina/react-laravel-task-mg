<?php

namespace App\Http\Controllers\Api;

use App\Models\Project;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\repositories\ProjectRepository;
use Illuminate\Support\Facades\Validator;

class ProjectController extends Controller
{
    public $projectRepository;

    /**
     * 
     */
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
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'description' => 'required',
        ],
        [
            'name.required' => 'Name field is required',
            'description.required' => 'Description field is required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()->first()
            ]);
        }

        $project = $this->projectRepository->create($request);
        return response()->json([
            'success' => true,
            'message' => 'Project Stored',
            'data' => $project,
        ]);

    }

    public function update(Request $request, $id)
    {
        $project = $this->projectRepository->findById($id);
        if(is_null($project)){
            return response()->json([
                'success' => false,
                'message' => 'Project Not Found',
                'data' => null,
            ]);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'description' => 'required',
        ],
        [
            'name.required' => 'Name field is required',
            'description.required' => 'Description field is required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()->first(),
                'errors' => $validator->getMessageBag()
            ]);
        }

        $project = $this->projectRepository->edit($request, $id);
        return response()->json([
            'success' => true,
            'message' => 'Project Updated',
            'data' => $project,
        ]);
    }

    public function destroy($id)
    {
        $project = $this->projectRepository->findById($id);
        if(is_null($project)){
            return response()->json([
                'success' => false,
                'message' => 'Project Not Found',
                'data' => null,
            ]);
        }
        $project = $this->projectRepository->delete($id);
        return response()->json([
            'success' => true,
            'message' => 'Project Deleted',
            'data' => $project,
        ]);
        
    }
}
