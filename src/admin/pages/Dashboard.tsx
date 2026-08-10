import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("admin");
        navigate("/admin");
    };

    return (

        <div className="min-h-screen bg-gray-100">

            {/* Header */}

            <div className="bg-blue-700 text-white px-10 py-5 flex justify-between items-center">

                <h1 className="text-3xl font-bold">
                    Madha Dental Admin Panel
                </h1>

                <button
                    onClick={logout}
                    className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600"
                >
                    Logout
                </button>

            </div>

            <div className="max-w-7xl mx-auto p-10">

                <h2 className="text-2xl font-bold mb-8">
                    Dashboard
                </h2>

                {/* Cards */}

                <div className="grid md:grid-cols-3 gap-6">

                    <Link
                        to="/admin/add-news"
                        className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl"
                    >
                        <h3 className="text-xl font-bold text-blue-700">
                            Add News
                        </h3>

                        <p className="mt-3 text-gray-600">
                            Publish new news and events.
                        </p>

                    </Link>

                    <Link
                        to="/admin/manage-news"
                        className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl"
                    >
                        <h3 className="text-xl font-bold text-green-700">
                            Manage News
                        </h3>

                        <p className="mt-3 text-gray-600">
                            Edit or Delete News.
                        </p>

                    </Link>

                    <div className="bg-white rounded-xl shadow-lg p-8">

                        <h3 className="text-xl font-bold text-purple-700">
                            Statistics
                        </h3>

                        <p className="mt-3 text-gray-600">
                            Coming Soon...
                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}