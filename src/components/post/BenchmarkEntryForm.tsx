import React, { useState, useEffect } from "react";
import { Exercise, BenchmarkEntry } from "./BenchmarkWidget"; // Reuse types from BenchmarkWidget

interface BenchmarkEntryFormProps {
  editingEntry: BenchmarkEntry | null;
  predefinedExercises: Exercise[];
  onSave: (entry: BenchmarkEntry) => void;
  onCancel: () => void;
}

const BenchmarkEntryForm: React.FC<BenchmarkEntryFormProps> = ({
  editingEntry,
  predefinedExercises,
  onSave,
  onCancel,
}) => {
  const defaultExerciseId = predefinedExercises[0]?.id || "";
  const [selectedExerciseId, setSelectedExerciseId] = useState<string>(defaultExerciseId);
  const [date, setDate] = useState<string>("");
  const [performance, setPerformance] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    if (editingEntry) {
      setSelectedExerciseId(editingEntry.exerciseId);
      setDate(editingEntry.date);
      setPerformance(editingEntry.performance || "");
      setResult(editingEntry.result);
      setDescription(editingEntry.description || "");
    } else {
      // Reset the form
      setSelectedExerciseId(defaultExerciseId);
      setDate("");
      setPerformance("");
      setResult("");
      setDescription("");
    }
  }, [editingEntry, defaultExerciseId]);

  const currentExercise = predefinedExercises.find(ex => ex.id === selectedExerciseId);

  const handleSubmit = () => {
    if (!date || !result) return;
    const newEntry: BenchmarkEntry = {
      id: editingEntry ? editingEntry.id : Date.now().toString(),
      exerciseId: selectedExerciseId,
      date,
      performance: performance || undefined,
      result,
      description: description || undefined,
    };
    onSave(newEntry);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white rounded-lg p-8 w-11/12 max-w-4xl space-y-6">
        <h3 className="text-3xl font-bold">
          {editingEntry ? "Modify Entry" : "Add Entry"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Exercise Selection, Details, and Image Placeholders */}
          <div className="space-y-4">
            <label className="block text-lg font-medium text-gray-700">
              Select Exercise
            </label>
            <select
              className="mt-1 block w-full border border-gray-300 rounded-md p-3"
              value={selectedExerciseId}
              onChange={(e) => setSelectedExerciseId(e.target.value)}
            >
              {predefinedExercises.map((exercise) => (
                <option key={exercise.id} value={exercise.id}>
                  {exercise.exercise} - {exercise.theme}
                </option>
              ))}
            </select>
            {currentExercise && (
              <div className="p-4 border rounded-md bg-gray-50">
                <p className="text-base text-gray-800">
                  <span className="font-semibold">Instruction:</span>{" "}
                  {currentExercise.instruction}
                </p>
                <p className="text-base text-gray-800 mt-1">
                  <span className="font-semibold">Measure:</span>{" "}
                  {currentExercise.measure}
                </p>
                {currentExercise.performanceLevels && (
                  <p className="text-base text-gray-800 mt-1">
                    <span className="font-semibold">Performance Levels:</span>{" "}
                    {currentExercise.performanceLevels.join(", ")}
                  </p>
                )}
              </div>
            )}
            {/* Placeholders for 2 images illustrating the exercise */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4">
              <div className="w-full sm:w-1/2 h-32 bg-gray-200 flex items-center justify-center text-gray-500 rounded mb-4 sm:mb-0">
                Image Placeholder 1
              </div>
              <div className="w-full sm:w-1/2 h-32 bg-gray-200 flex items-center justify-center text-gray-500 rounded">
                Image Placeholder 2
              </div>
            </div>
          </div>
          {/* Right Column: Entry Inputs */}
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                className="mt-1 block w-full border border-gray-300 rounded-md p-3"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Performance Level
              </label>
              {currentExercise?.performanceLevels ? (
                <select
                  className="mt-1 block w-full border border-gray-300 rounded-md p-3"
                  value={performance}
                  onChange={(e) => setPerformance(e.target.value)}
                >
                  <option value="">Select Performance Level</option>
                  {currentExercise.performanceLevels.map((level: string) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-3"
                  placeholder="Enter performance level"
                  value={performance}
                  onChange={(e) => setPerformance(e.target.value)}
                />
              )}
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Result ({currentExercise?.measure})
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-3"
                placeholder={`Enter result in ${currentExercise?.measure}`}
                value={result}
                onChange={(e) => setResult(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Description
              </label>
              <textarea
                className="mt-1 block w-full border border-gray-300 rounded-md p-3"
                placeholder="Additional details about the entry"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-6">
          <button
            onClick={onCancel}
            className="bg-gray-300 text-black py-3 px-8 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-700 text-white py-3 px-8 rounded-md hover:bg-blue-800"
          >
            {editingEntry ? "Save Changes" : "Add Entry"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BenchmarkEntryForm;