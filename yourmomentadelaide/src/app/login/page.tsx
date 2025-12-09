export default function LoginPage() {
    return(
        <main className="min-h-screen bg-gray text-white px-4 py-24 text-center">
            <div className="flex flex-col justify-center">
                <div>
                    <h1>Account Login</h1>
                </div>
                <div>
                    <form action="post">
                        <input type="text" />
                        <input type="text" />
                    </form>
                </div>
            </div>

        </main>
    );
};