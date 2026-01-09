"use client"

import React, { useState } from 'react'
import { 
  LayoutDashboard, 
  Calendar as CalendarIcon, 
  BookOpen, 
  GraduationCap, 
  FolderKanban, 
  BrainCircuit, 
  MoreVertical, 
  Plus, 
  Search,
  Bell,
  CheckCircle2,
  Clock,
  ArrowUpRight
} from 'lucide-react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview')

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-zinc-800 bg-zinc-900/30 backdrop-blur-xl shrink-0 hidden md:flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <BrainCircuit className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">Study Nest</span>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <SidebarItem icon={<LayoutDashboard size={20} />} label="Overview" active />
          <SidebarItem icon={<CalendarIcon size={20} />} label="Schedule" />
          <SidebarItem icon={<BookOpen size={20} />} label="Notebooks" />
          <SidebarItem icon={<GraduationCap size={20} />} label="Grades & Exams" />
          <SidebarItem icon={<FolderKanban size={20} />} label="Projects" />
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <BrainCircuit className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-semibold text-indigo-300">AI Tutor</span>
            </div>
            <p className="text-xs text-zinc-400 mb-3">Ready to revise? Ask me anything about your notes.</p>
            <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-xs font-medium py-2 rounded-lg transition-colors">
              Start Chat
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Header */}
        <header className="h-16 border-b border-zinc-800 bg-zinc-900/30 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-20">
          <div className="flex items-center gap-4 w-1/3">
            <div className="relative w-full max-w-xs group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Search notes, assignments, or projects..." 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-full pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all placeholder:text-zinc-600"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-zinc-800 rounded-full transition-colors">
              <Bell className="w-5 h-5 text-zinc-400" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-zinc-950"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-linear-to-tr from-indigo-500 to-purple-500 border border-zinc-700"></div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white mb-1">Good Evening, Scholar</h1>
            <p className="text-zinc-400 text-sm">You have 3 assignments due this week.</p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Column 1: Schedule & Tasks */}
            <div className="space-y-6">
              <SectionHeader title="Today's Schedule" action={<Plus size={16} />} />
              <div className="space-y-3">
                <ScheduleCard time="09:00 AM" title="Data Structures Lecture" type="Class" color="indigo" />
                <ScheduleCard time="11:30 AM" title="Project 'TourVista' Sync" type="Project" color="emerald" />
                <ScheduleCard time="02:00 PM" title="Calculus Mock Exam" type="Exam" color="rose" />
              </div>

              <SectionHeader title="Pending Tasks" action={<ArrowUpRight size={16} />} />
              <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-4 backdrop-blur-sm">
                <TaskItem text="Finish React Component docs" done={true} />
                <TaskItem text="Revise Linear Algebra Ch. 3" done={false} />
                <TaskItem text="Submit History Assignment" done={false} />
              </div>
            </div>

            {/* Column 2: Projects & Grades */}
            <div className="space-y-6">
              <SectionHeader title="Active Projects" action={<FolderKanban size={16} />} />
              <div className="grid grid-cols-1 gap-4">
                <ProjectCard 
                  title="Study Nest" 
                  desc="EdTech Platform Development" 
                  progress={65} 
                  tags={['Next.js', 'AI']}
                />
                <ProjectCard 
                  title="TourVista" 
                  desc="Travel Agency Landing Page" 
                  progress={90} 
                  tags={['UI/UX', 'React']}
                />
              </div>

              <SectionHeader title="Recent Performance" />
              <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-5 backdrop-blur-sm">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-white">8.5</span>
                    <span className="text-zinc-500 text-sm ml-1">/ 10 CGPA</span>
                  </div>
                  <span className="text-emerald-400 text-xs font-medium bg-emerald-400/10 px-2 py-1 rounded-full">+0.2% vs last sem</span>
                </div>
                <div className="space-y-3">
                  <GradeRow subject="Mathematics" score="A" />
                  <GradeRow subject="Computer Science" score="A+" />
                  <GradeRow subject="Physics" score="B+" />
                </div>
              </div>
            </div>

            {/* Column 3: Notebooks & Quick AI */}
            <div className="space-y-6">
               {/* Integrated AI Assistant Widget */}
              <div className="bg-linear-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <BrainCircuit className="text-indigo-400" size={20}/>
                    <h3 className="font-semibold text-white">AI Assistant</h3>
                  </div>
                  <p className="text-zinc-400 text-sm mb-4">
                    Analyze your recent mock exam or ask for revision tips on "Linear Algebra".
                  </p>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Ask AI anything..." 
                      className="w-full bg-zinc-900/80 border border-zinc-700/50 rounded-lg pl-3 pr-10 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-indigo-600 rounded hover:bg-indigo-500 transition-colors">
                      <ArrowUpRight size={14} className="text-white"/>
                    </button>
                  </div>
                </div>
              </div>

              <SectionHeader title="Recent Notebooks" action={<BookOpen size={16} />} />
              <div className="grid grid-cols-2 gap-3">
                <NotebookCard title="React Patterns" color="bg-blue-500" time="2h ago" />
                <NotebookCard title="Calculus II" color="bg-orange-500" time="5h ago" />
                <NotebookCard title="Design Systems" color="bg-pink-500" time="1d ago" />
                <NotebookCard title="Algorithms" color="bg-emerald-500" time="2d ago" />
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}

/* --- Sub-Components for Cleanliness --- */

function SidebarItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${active ? 'bg-indigo-600/10 text-indigo-400' : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'}`}>
      {icon}
      {label}
    </button>
  )
}

function SectionHeader({ title, action }: { title: string, action?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between px-1">
      <h3 className="text-sm font-semibold text-zinc-300 tracking-wide uppercase">{title}</h3>
      {action && <button className="text-zinc-500 hover:text-white transition-colors">{action}</button>}
    </div>
  )
}

function ScheduleCard({ time, title, type, color }: { time: string, title: string, type: string, color: string }) {
  const colors: Record<string, string> = {
    indigo: 'border-l-indigo-500 bg-indigo-500/5',
    emerald: 'border-l-emerald-500 bg-emerald-500/5',
    rose: 'border-l-rose-500 bg-rose-500/5',
  }

  return (
    <div className={`flex items-start gap-4 p-3 rounded-r-lg border-l-2 ${colors[color]} hover:bg-zinc-800/50 transition-colors cursor-pointer`}>
      <span className="text-xs font-mono text-zinc-500 mt-1 min-w-15">{time}</span>
      <div>
        <h4 className="text-sm font-medium text-zinc-200">{title}</h4>
        <span className="text-xs text-zinc-500">{type}</span>
      </div>
    </div>
  )
}

function TaskItem({ text, done }: { text: string, done: boolean }) {
  return (
    <div className="flex items-center gap-3 py-2 group">
      <button className={`transition-colors ${done ? 'text-indigo-500' : 'text-zinc-600 group-hover:text-zinc-500'}`}>
        <CheckCircle2 size={18} />
      </button>
      <span className={`text-sm ${done ? 'text-zinc-600 line-through' : 'text-zinc-300'}`}>{text}</span>
    </div>
  )
}

function ProjectCard({ title, desc, progress, tags }: { title: string, desc: string, progress: number, tags: string[] }) {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-4 hover:border-zinc-700 transition-all cursor-pointer">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-semibold text-zinc-200">{title}</h4>
          <p className="text-xs text-zinc-500">{desc}</p>
        </div>
        <MoreVertical size={16} className="text-zinc-600" />
      </div>
      <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-3 mb-3 overflow-hidden">
        <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="flex gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded border border-zinc-700">{tag}</span>
        ))}
      </div>
    </div>
  )
}

function GradeRow({ subject, score }: { subject: string, score: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-zinc-400">{subject}</span>
      <span className="font-mono font-medium text-zinc-200">{score}</span>
    </div>
  )
}

function NotebookCard({ title, color, time }: { title: string, color: string, time: string }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 hover:bg-zinc-800 transition-colors cursor-pointer group">
      <div className={`w-8 h-8 rounded-lg ${color} bg-opacity-20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
        <BookOpen size={16} className={color.replace('bg-', 'text-')} />
      </div>
      <h4 className="text-sm font-medium text-zinc-300 truncate">{title}</h4>
      <span className="text-[10px] text-zinc-500 flex items-center gap-1 mt-1">
        <Clock size={10} /> {time}
      </span>
    </div>
  )
}