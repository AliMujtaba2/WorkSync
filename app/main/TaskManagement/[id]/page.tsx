"use client";
import React, { useState } from 'react';
import {
    DndContext,
    closestCorners,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragOverlay,
    defaultDropAnimationSideEffects,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
    useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { User, MoreVertical } from 'lucide-react';

// --- Types ---
type Task = {
    id: string;
    title: string;
    details: string;
    comment: string;
    status: 'todo' | 'inprogress' | 'pending' | 'approved';
};

const INITIAL_TASKS: Task[] = [
    { id: '1', title: 'Design System Update', details: 'Revamp the color palette', comment: 'Priority: High', status: 'todo' },
    { id: '2', title: 'API Integration', details: 'Connect user auth flow', comment: 'Using NextAuth', status: 'todo' },
    { id: '3', title: 'Client Review', details: 'Prepare demo for Monday', comment: 'Needs feedback', status: 'todo' },
];

const COLUMNS = [
    { id: 'todo', title: 'To-Do:', color: 'bg-red-500' },
    { id: 'inprogress', title: 'In-Progress:', color: 'bg-yellow-500' },
    { id: 'pending', title: 'Pending:', color: 'bg-blue-500' },
    { id: 'approved', title: 'Approved:', color: 'bg-green-500' },
];

// --- Components ---

const TaskCard = ({ task, isOverlay = false }: { task: Task; isOverlay?: boolean }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: task.id });

    const style = {
        transform: CSS.Translate.toString(transform),
        transition,
        opacity: isDragging ? 0.3 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={`bg-[#1a1c20] border border-gray-800 rounded-2xl p-4 mb-3 cursor-grab active:cursor-grabbing hover:border-gray-600 transition-colors ${isOverlay ? 'shadow-2xl ring-2 ring-yellow-500/50' : ''}`}
        >
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold border border-gray-600">G</div>
                <div className="flex-1">
                    <h4 className="text-white text-sm font-medium">{task.title}</h4>
                    <p className="text-[10px] text-gray-400 mt-1 line-clamp-1">{task.details}</p>
                    <div className="flex gap-2 mt-2">
                        <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded uppercase font-bold">Start</span>
                        {task.comment && <span className="text-[10px] text-yellow-500/80 italic">"{task.comment}"</span>}
                    </div>
                </div>
            </div>
            <div className="mt-4 flex justify-between items-end">
                <div className="text-[10px] text-gray-500">
                    <p>Assigned by:</p>
                    <p>Admin Name</p>
                </div>
                <button className="bg-[#d4af37] text-black text-[10px] px-4 py-1 rounded-full font-bold hover:bg-yellow-500">View</button>
            </div>
        </div>
    );
};

export default function TaskManagement() {
    const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
    const [activeId, setActiveId] = useState<string | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    );

    const handleDragStart = (event: any) => setActiveId(event.active.id);

    const handleDragOver = (event: any) => {
        const { active, over } = event;
        if (!over) return;

        const activeId = active.id;
        const overId = over.id;

        const activeTask = tasks.find((t) => t.id === activeId);
        const overTask = tasks.find((t) => t.id === overId);

        // If dropping over a column container instead of a task
        const isOverAColumn = COLUMNS.some((col) => col.id === overId);

        if (activeTask && overTask && activeTask.status !== overTask.status) {
            setTasks((prev) => {
                const activeIndex = prev.findIndex((t) => t.id === activeId);
                const overIndex = prev.findIndex((t) => t.id === overId);
                const updatedTasks = [...prev];
                updatedTasks[activeIndex] = { ...activeTask, status: overTask.status };
                return arrayMove(updatedTasks, activeIndex, overIndex);
            });
        } else if (activeTask && isOverAColumn && activeTask.status !== overId) {
            setTasks((prev) => {
                const activeIndex = prev.findIndex((t) => t.id === activeId);
                const updatedTasks = [...prev];
                updatedTasks[activeIndex] = { ...activeTask, status: overId as any };
                return arrayMove(updatedTasks, activeIndex, activeIndex);
            });
        }
    };

    const handleDragEnd = (event: any) => {
        const { active, over } = event;
        if (over && active.id !== over.id) {
            setTasks((items) => {
                const oldIndex = items.findIndex((t) => t.id === active.id);
                const newIndex = items.findIndex((t) => t.id === over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
        setActiveId(null);
    };

    const saveToDatabase = () => {
        console.log("Saving state to DB:", tasks);
        alert("Changes saved successfully!");
    };

    return (
        <div className="min-h-screen bg-[#0d0f14] text-gray-200 p-8 font-sans">
            {/* Top Navigation / Header */}
            <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-6">
                    <h1 className="text-3xl font-bold text-white tracking-tight">Task Management</h1>
                    <div className="h-8 w-px bg-gray-800" />
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-[#1a1c20] flex items-center justify-center overflow-hidden shadow-lg">
                            <User size={20} className="text-gray-400" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-white leading-none">Melissa Peters</p>
                            <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">Project Lead</p>
                        </div>
                    </div>
                </div>

                <button
                    onClick={saveToDatabase}
                    className="bg-green-600 hover:bg-green-500 text-white text-xs px-6 py-2.5 rounded-lg transition-all font-bold uppercase tracking-widest shadow-lg shadow-green-900/20 active:scale-95"
                >
                    Save Changes
                </button>
            </div>

            {/* Kanban Board Container */}
            <DndContext
                sensors={sensors}
                collisionDetection={closestCorners}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDragEnd={handleDragEnd}
            >
                <div className="flex gap-6 overflow-x-auto pb-8 min-h-[calc(100vh-200px)] items-start">
                    {COLUMNS.map((col) => (
                        <div key={col.id} className="bg-[#14161a] border border-gray-800 rounded-[2rem] p-6 min-w-[320px] w-[320px] flex flex-col shadow-xl">
                            <div className="flex items-center justify-between mb-6 px-2">
                                <div className="flex items-center gap-3">
                                    <div className={`w-3 h-3 rounded-full ${col.color} shadow-[0_0_10px_rgba(0,0,0,0.5)]`} />
                                    <h3 className="font-extrabold text-sm uppercase tracking-widest text-gray-400">{col.title.replace(':', '')}</h3>
                                </div>
                                <span className="bg-gray-800/50 text-[10px] px-2 py-0.5 rounded-full text-gray-400 font-bold">
                                    {tasks.filter(t => t.status === col.id).length}
                                </span>
                            </div>

                            <SortableContext items={tasks.filter(t => t.status === col.id)} strategy={verticalListSortingStrategy}>
                                <div className="flex-1 space-y-4">
                                    {tasks.filter((t) => t.status === col.id).map((task) => (
                                        <TaskCard key={task.id} task={task} />
                                    ))}
                                    {tasks.filter((t) => t.status === col.id).length === 0 && (
                                        <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-gray-800/50 rounded-2xl bg-gray-900/10">
                                            <p className="text-gray-600 text-xs font-medium italic">Drop tasks here</p>
                                        </div>
                                    )}
                                </div>
                            </SortableContext>
                        </div>
                    ))}
                </div>

                <DragOverlay dropAnimation={null}>
                    {activeId ? (
                        <div className="w-[320px]">
                            <TaskCard task={tasks.find((t) => t.id === activeId)!} isOverlay />
                        </div>
                    ) : null}
                </DragOverlay>
            </DndContext>
        </div>
    );
}
