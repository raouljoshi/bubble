import React, { useState, useEffect } from 'react';
import WidgetCard from './WidgetCard';

// Define the shape of an exercise and benchmark entry
interface Exercise {
  id: string;
  theme: string;
  exercise: string;
  instruction: string;
  measure: string;
  performanceLevels?: string[];
}

interface BenchmarkEntry {
  id: string;
  exerciseId: string;
  date: string;
  performance?: string;
  result: string;
  description?: string;
  imageUrl?: string;
  additionalLink?: string;
}

// Predefined exercises per user's specification
const predefinedExercises: Exercise[] = [
  {
    id: 'ex1',
    theme: 'Conditioning',
    exercise: 'SkiErg or Row',
    instruction: 'Ski or row for 1 km.',
    measure: 's'
  },
  {
    id: 'ex2',
    theme: 'Upper body push',
    exercise: 'Push ups',
    instruction: '2 minutes, on feet, chest to yoga block',
    measure: 'reps',
    performanceLevels: ['No box', '57 cm box', '76 cm box']
  },
  {
    id: 'ex3',
    theme: 'Upper body pull',
    exercise: 'Ring rows',
    instruction: '2 minutes, hand to chest',
    measure: 'reps',
    performanceLevels: ['90 degree ropes', '45 degree ropes', '60 degree ropes']
  },
  {
    id: 'ex4',
    theme: 'Legs',
    exercise: 'Squats',
    instruction: '2 minutes, hip below parallel',
    measure: 'reps',
    performanceLevels: ['24 kg', '16 kg', '12 kg']
  },
  {
    id: 'ex5',
    theme: 'Core',
    exercise: 'Plank',
    instruction: 'Hollow shape',
    measure: 's'
  }
];

const LOCAL_STORAGE_KEY = 'benchmarkEntries';

const BenchmarkWidget: React.FC = () => {
  const [selectedExerciseId, setSelectedExerciseId] = useState(predefinedExercises[0].id);
  const [date, setDate] = useState('');
  const [performance, setPerformance] = useState('');
  const [result, setResult] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [additionalLink, setAdditionalLink] = useState('');
  const [entries, setEntries] = useState<BenchmarkEntry[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingEntry, setEditingEntry] = useState<BenchmarkEntry | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Load entries from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      setEntries(JSON.parse(stored));
    }
  }, []);

  // Update localStorage whenever entries change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const computeLastUpdated = () => {
    if (entries.length === 0) return 'N/A';
    const sorted = [...entries].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return sorted[0].date;
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(entry => entry.id !== id));
  };

  const openModalForNewEntry = () => {
    setEditingEntry(null);
    setSelectedExerciseId(predefinedExercises[0].id);
    setDate('');
    setPerformance('');
    setResult('');
    setDescription('');
    setImageUrl('');
    setAdditionalLink('');
    setShowModal(true);
  };

  const handleSave = () => {
    if (!date || !result) return;
    if (editingEntry) {
      setEntries(prev =>
        prev.map(ent =>
          ent.id === editingEntry.id
            ? { ...ent, exerciseId: selectedExerciseId, date, performance, result, description, imageUrl, additionalLink }
            : ent
        )
      );
    } else {
      const newEntry: BenchmarkEntry = {
        id: Date.now().toString(),
        exerciseId: selectedExerciseId,
        date,
        performance,
        result,
        description,
        imageUrl,
        additionalLink
      };
      setEntries(prev => [...prev, newEntry]);
    }
    setShowModal(false);
    setEditingEntry(null);
    setDate('');
    setPerformance('');
    setResult('');
    setDescription('');
    setImageUrl('');
    setAdditionalLink('');
  };

  const openModalForModify = (entry: BenchmarkEntry) => {
    setEditingEntry(entry);
    setSelectedExerciseId(entry.exerciseId);
    setDate(entry.date);
    setPerformance(entry.performance || '');
    setResult(entry.result);
    setDescription(entry.description || '');
    setImageUrl(entry.imageUrl || '');
    setAdditionalLink(entry.additionalLink || '');
    setShowModal(true);
  };

  // Get current exercise details
  const currentExercise = predefinedExercises.find(ex => ex.id === selectedExerciseId);

  return (
    <WidgetCard feature="Benchmarks" studio="Bonobo Gym" lastUpdated={computeLastUpdated()}>
      <div className="p-6 space-y-8">
        {/* Chart Placeholder */}
        <div className="p-6 border rounded-md bg-gray-100">
          <h4 className="text-2xl font-semibold mb-2">Chart Visualization</h4>
          <p className="text-base text-gray-600">[Chart will be implemented here]</p>
        </div>
        <hr className="my-4 border-t-2 border-gray-300" />
        
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Benchmark Entries</h3>
          <div className="flex space-x-2">
            <button
              className="bg-transparent border border-blue-500 text-blue-500 py-1 px-3 rounded hover:bg-blue-50 text-xl"
              onClick={openModalForNewEntry}
            >
              Add Entry
            </button>
            <button
              className="flex items-center justify-center p-1 rounded hover:bg-gray-300"
              onClick={() => setIsExpanded(prev => !prev)}
            >
              {isExpanded ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isExpanded && (
          <div className="w-full overflow-x-auto mt-4">
            {entries.length === 0 ? (
              <p className="text-base text-gray-500">No entries added yet.</p>
            ) : (
              <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Theme</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Exercise</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Performance</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Result</th>
                    <th className="px-6 py-3 text-center text-sm font-medium text-gray-700 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {entries.map(entry => {
                    const ex = predefinedExercises.find(e => e.id === entry.exerciseId);
                    return (
                      <tr key={entry.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{ex?.theme}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{ex?.exercise}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {new Date(entry.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{entry.performance || '-'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{entry.result} {ex?.measure}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
                          <div className="flex items-center justify-center space-x-3">
                            <button onClick={() => openModalForModify(entry)} title="Modify">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 hover:text-green-700" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                <path d="M4 13h1v4h4v1H4a1 1 0 01-1-1v-4a1 1 0 011-1z" />
                              </svg>
                            </button>
                            <button onClick={() => deleteEntry(entry.id)} title="Delete">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 hover:text-red-700" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6 3a1 1 0 00-.894.553L4 5H2a1 1 0 100 2h1v9a2 2 0 002 2h8a2 2 0 002-2V7h1a1 1 0 100-2h-2l-.106-.447A1 1 0 0014 3H6zm2 5a1 1 0 112 0v5a1 1 0 11-2 0V8zm4 0a1 1 0 112 0v5a1 1 0 11-2 0V8z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        )}

      </div>

      {/* Expanded Modal for Adding/Modifying Entry */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white rounded-lg p-8 w-11/12 max-w-3xl space-y-6">
            <h3 className="text-3xl font-bold">{editingEntry ? 'Modify Entry' : 'Add Entry'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column: Exercise Details */}
              <div className="space-y-4">
                <label className="block text-lg font-medium text-gray-700">Select Exercise</label>
                <select
                  className="mt-1 block w-full border border-gray-300 rounded-md p-3"
                  value={selectedExerciseId}
                  onChange={(e) => setSelectedExerciseId(e.target.value)}
                >
                  {predefinedExercises.map(exercise => (
                    <option key={exercise.id} value={exercise.id}>
                      {exercise.exercise} - {exercise.theme}
                    </option>
                  ))}
                </select>
                {currentExercise && (
                  <div className="p-4 border rounded-md bg-gray-50">
                    <p className="text-base text-gray-800"><span className="font-semibold">Instruction:</span> {currentExercise.instruction}</p>
                    <p className="text-base text-gray-800 mt-1"><span className="font-semibold">Measure:</span> {currentExercise.measure}</p>
                    {currentExercise.performanceLevels && (
                      <p className="text-base text-gray-800 mt-1"><span className="font-semibold">Performance Levels:</span> {currentExercise.performanceLevels.join(', ')}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Right Column: Entry Inputs */}
              <div className="space-y-4">
                <div>
                  <label className="block text-lg font-medium text-gray-700">Date</label>
                  <input
                    type="date"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-3"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                {currentExercise?.performanceLevels && currentExercise.performanceLevels.length > 0 && (
                  <div>
                    <label className="block text-lg font-medium text-gray-700">Performance Level</label>
                    <select
                      className="mt-1 block w-full border border-gray-300 rounded-md p-3"
                      value={performance}
                      onChange={(e) => setPerformance(e.target.value)}
                    >
                      <option value="">Select Performance Level</option>
                      {currentExercise.performanceLevels.map(level => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div>
                  <label className="block text-lg font-medium text-gray-700">Result ({currentExercise?.measure})</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-3"
                    placeholder={`Enter result in ${currentExercise?.measure}`}
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">Description</label>
                  <textarea
                    className="mt-1 block w-full border border-gray-300 rounded-md p-3"
                    placeholder="Additional details about the entry"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">Image URL</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-3"
                    placeholder="URL for an image (optional)"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">Additional Link</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-3"
                    placeholder="URL for more info (optional)"
                    value={additionalLink}
                    onChange={(e) => setAdditionalLink(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-6">
              <button
                className="bg-gray-300 text-black py-3 px-8 rounded-md"
                onClick={() => {
                  setShowModal(false);
                  setEditingEntry(null);
                  setDate('');
                  setPerformance('');
                  setResult('');
                  setDescription('');
                  setImageUrl('');
                  setAdditionalLink('');
                }}
              >
                Cancel
              </button>
              <button
                className="bg-blue-700 text-white py-3 px-8 rounded-md hover:bg-blue-800"
                onClick={handleSave}
              >
                {editingEntry ? 'Save Changes' : 'Add Entry'}
              </button>
            </div>
          </div>
        </div>
      )}
    </WidgetCard>
  );
};

export default BenchmarkWidget;

export type { Exercise, BenchmarkEntry };