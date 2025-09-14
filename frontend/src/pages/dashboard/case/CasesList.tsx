import React, { useState } from "react";
import { Search, Scale, BookOpen, ArrowRight, Loader2 } from "lucide-react";
import { caseSummaryAsync, searchCaseAsync } from "../../../store/caseSlice";
import { useAppDispatch } from "../../../hooks/redux";
import { toast } from "react-toastify";
import CaseDetail from "./CaseDetail";

function Spinner({ loading, detailLoading }: { loading: boolean; detailLoading: boolean }) {
    return (
        <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mb-4"></div>
            <p className="text-gray-600">
                {loading ? "Searching cases..." : detailLoading ? "Loading case summary..." : "Processing..."}
            </p>
        </div>
    );
}

function stripBoldTags(text: string) {
    return text.replace(/<\/?b>/g, "");
}

const CasesList: React.FC = () => {
    const dispatch = useAppDispatch();
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedCase, setSelectedCase] = useState<any | null>(null);
    const [detailLoading, setDetailLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        setSelectedCase(null); // Hide detail on new search
        if (!query || query.trim() === "") {
            setLoading(false);
            toast.error("Please enter a search query.");
            return;
        }
        try {
            const response: any = await dispatch(searchCaseAsync(query)).unwrap();

            if (response?.statusCode === 200 || response?.success === true) {
                setResults(response.data);
                setLoading(false);
                toast.success(response.message || "Search completed successfully!");
            } else {
                toast.error(response?.message || "Failed to fetch search results");
                setLoading(false);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error("Error fetching search results.");
        }
        setLoading(false);
    };

    const handleCaseSummary = async (tid: string) => {
        setDetailLoading(true);
        try {
            if (!tid) {
                toast.error("Invalid case ID.");
                setDetailLoading(false);
                return;
            }
            const response: any = await dispatch(caseSummaryAsync(tid)).unwrap();
            if (response?.statusCode === 200 || response?.success === true) {
                setSelectedCase(response.data);
                toast.success(response.message || "Case summary fetched successfully!");
                setDetailLoading(false);
            } else {
                toast.error(response?.message || "Failed to fetch case summary");
                setDetailLoading(false);
            }
        } catch (error) {
            toast.error("Error fetching case summary.");
        } finally {
            setDetailLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 text-blue-600">
                                <Scale className="h-6 w-6" />
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Legal Case Explorer
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Search and analyze landmark Indian legal cases with AI-powered summaries
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Search Section */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
                    <div className="max-w-3xl mx-auto">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Search by case title, citation, keywords, or legal topics..."
                                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                            />
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button
                                onClick={handleSearch}
                                disabled={loading}
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                                        Searching...
                                    </>
                                ) : (
                                    <>
                                        <Search className="mr-2 h-5 w-5" />
                                        Search Cases
                                    </>
                                )}
                            </button>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-sm text-gray-500">
                                Examples: <span className="text-gray-700">Article 15, Consumer Protection, Criminal Law, Constitutional Law</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Results or Detail */}
                {loading || detailLoading ? (
                    <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
                        <Spinner loading={loading} detailLoading={detailLoading} />
                    </div>
                ) : selectedCase ? (
                    <CaseDetail caseItem={selectedCase} />
                ) : (
                    <div className="space-y-6">
                        {results.length > 0 && (
                            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                                <div className="flex items-center mb-6">
                                    <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Search Results ({results.length} cases found)
                                    </h2>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {results.map((caseItem) => (
                                        <div 
                                            key={caseItem.tid}
                                            className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all duration-300 hover:border-primary-300 bg-white"
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">
                                                    {stripBoldTags(caseItem.title)}
                                                </h3>
                                            </div>
                                            
                                            <div className="space-y-2 mb-4">
                                                <p className="text-xs text-gray-500">
                                                    {caseItem.docsource}
                                                </p>
                                                <p className="text-xs text-gray-600">
                                                    {caseItem.publishdate}
                                                </p>
                                                <p className="text-xs font-medium text-primary-600">
                                                    {caseItem.citation}
                                                </p>
                                            </div>
                                            
                                            <button
                                                onClick={() => handleCaseSummary(caseItem.tid)}
                                                disabled={detailLoading}
                                                className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                                            >
                                                View Summary
                                                <ArrowRight className="ml-1 h-4 w-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {results.length === 0 && !loading && (
                            <div className="bg-white rounded-xl shadow-sm p-12 border border-gray-200 text-center">
                                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
                                    <Scale className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="mt-4 text-xl font-medium text-gray-900">Search Legal Cases</h3>
                                <p className="mt-2 text-gray-500">
                                    Enter a legal topic, case name, or citation above to explore landmark Indian court decisions.
                                </p>
                                <div className="mt-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                        {['Constitutional Law', 'Criminal Law', 'Civil Law', 'Corporate Law'].map((topic) => (
                                            <button
                                                key={topic}
                                                onClick={() => {
                                                    setQuery(topic);
                                                    setTimeout(() => handleSearch(), 100);
                                                }}
                                                className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                            >
                                                {topic}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CasesList;
