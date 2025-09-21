import { useNavigate } from "react-router-dom";
import { FileText, ListTodo, Scale } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  
  const features = [
    {
      name: "Upload Document",
      description: "Quickly understand key points of contracts and agreements with AI-powered analysis.",
      icon: FileText,
      path: "/dashboard/role-selection",
      color: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
      hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-900/50"
    },
    {
      name: "Document Analysis",
      description: "Step-by-step guidance for drafting and executing agreements with legal best practices.",
      icon: ListTodo,
      path: "/dashboard/process/summary",
      color: "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
      hoverColor: "hover:bg-green-100 dark:hover:bg-green-900/50"
    },
    {
      name: "Case Summary",
      description: "Search, review, and analyze landmark legal cases with detailed insights.",
      icon: Scale,
      path: "/dashboard/case/case-details",
      color: "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
      hoverColor: "hover:bg-purple-100 dark:hover:bg-purple-900/50"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 shadow-sm dark:shadow-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Legal Dashboard</h1>
              <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                Access all your legal tools and services in one place
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-slate-700 flex items-center justify-center">
                <span className="text-primary-600 dark:text-primary-400 font-medium">LK</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary-600 to-indigo-700 rounded-xl shadow-md p-6 mb-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-white mb-2">
              Welcome to LegalKlarity
            </h2>
            <p className="text-primary-100 mb-4">
              Simplify your legal journey with AI-powered document analysis and expert guidance.
            </p>
            <button 
              onClick={() => navigate("/dashboard/role-selection")}
              className="bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Legal Tools</h3>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  onClick={() => navigate(feature.path)}
                  className={`cursor-pointer rounded-xl p-8 shadow-sm transition-all bg-white border border-gray-200 ${feature.hoverColor} hover:shadow-md dark:bg-slate-800 dark:border-slate-700 dark:hover:shadow-slate-800/50`}
                >
                  <div className={`w-16 h-16 rounded-lg ${feature.color} flex items-center justify-center mb-6 mx-auto`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 text-center dark:text-white">
                    {feature.name}
                  </h2>
                  <p className="text-gray-600 text-center dark:text-slate-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
            <div className="flex items-center">
              <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/30">
                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-slate-400">Agreements Analyzed</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">24</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
            <div className="flex items-center">
              <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/30">
                <Scale className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-slate-400">Cases Reviewed</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">18</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
            <div className="flex items-center">
              <div className="rounded-lg bg-purple-50 p-3 dark:bg-purple-900/30">
                <ListTodo className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-slate-400">Processes Completed</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">32</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center dark:bg-slate-700">
                  <FileText className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Rental Agreement Analysis
                </p>
                <p className="text-sm text-gray-500 dark:text-slate-400">
                  Completed 2 hours ago
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/30">
                  <Scale className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Case: Smith vs. Corporation Ltd.
                </p>
                <p className="text-sm text-gray-500 dark:text-slate-400">
                  Viewed yesterday
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
