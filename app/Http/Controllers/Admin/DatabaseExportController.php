<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class DatabaseExportController extends Controller
{
    /**
     * Generate and download the full MySQL SQL dump.
     */
    public function downloadFullSql(Request $request): BinaryFileResponse
    {
        $dbName = $request->query('database', 'coachtim_lara427');
        Artisan::call('db:export-mysql', ['--database' => $dbName]);

        $filePath = database_path("{$dbName}_dump.sql");
        if (!file_exists($filePath)) {
            $filePath = database_path("coachtim_lara427_dump.sql");
        }

        return response()->download($filePath, "{$dbName}_dump.sql", [
            'Content-Type' => 'application/sql',
        ]);
    }

    /**
     * Generate and download the data-only MySQL SQL dump.
     */
    public function downloadDataOnlySql(Request $request): BinaryFileResponse
    {
        $dbName = $request->query('database', 'coachtim_lara427');
        Artisan::call('db:export-mysql', ['--database' => $dbName, '--data-only' => true]);

        $filePath = database_path("{$dbName}_data_only.sql");
        if (!file_exists($filePath)) {
            $filePath = database_path("coachtim_lara427_data_only.sql");
        }

        return response()->download($filePath, "{$dbName}_data_only.sql", [
            'Content-Type' => 'application/sql',
        ]);
    }
}
