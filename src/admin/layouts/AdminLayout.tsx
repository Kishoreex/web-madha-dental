import { Outlet, Link, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white">

        <div className="p-6 text-2xl font-bold border-b border-blue-700">
          Madha CMS
        </div>

        <nav className="p-4 space-y-3">

          <Link
            to="/admin/dashboard"
            className="block hover:bg-blue-700 p-2 rounded"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/add-news"
            className="block hover:bg-blue-700 p-2 rounded"
          >
            Add News
          </Link>

          <Link
            to="/admin/manage-news"
            className="block hover:bg-blue-700 p-2 rounded"
          >
            Manage News
          </Link>

        </nav>

      </aside>

      {/* Main */}

      <div className="flex-1">

        <header className="bg-white shadow px-8 py-4 flex justify-between">

          <h1 className="text-2xl font-bold">
            Madha Dental College CMS
          </h1>

          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>

        </header>

        <main className="p-8">

          <Outlet />

        </main>

      </div>

    </div>
  );
}