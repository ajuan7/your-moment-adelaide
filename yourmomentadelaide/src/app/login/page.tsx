import { theSeasons } from "../fonts";

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-gray text-white px-4 py-24 text-center">
            <div className="flex flex-col justify-center">
                <div>
                    <h1>Account Login</h1>
                </div>
                <div className="flex flex-col space-x-10">
                    <form method="post">
                        <div className="text-center space-y-1">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-half rounded-lg bg-gray-900/80 border border-gray-600 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div className="text-center space-y-1">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="w-half rounded-lg bg-gray-900/80 border border-gray-600 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                                placeholder="*******"
                            />
                        </div>

                        <div className="text-center space-y-1"> 
                            <button type="submit" className="border border-gray-600 rounded w-half">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </main>
    );
};