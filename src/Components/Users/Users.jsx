import React from "react";

const Users = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Users</h2>
            <table className="min-w-full bg-white shadow-md rounded-md">
                <thead>
                    <tr>
                        <th className="px-6 py-4">User ID</th>
                        <th className="px-6 py-4">Name</th>
                        <th className="px-6 py-4">Email</th>
                        <th className="px-6 py-4">Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-6 py-4">#101</td>
                        <td className="px-6 py-4">Alice Smith</td>
                        <td className="px-6 py-4">alice@example.com</td>
                        <td className="px-6 py-4">Admin</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Users;
