
const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-80">
                <h1 className="text-xl font-bold mb-4"> Zaloguj się </h1>
                <input placeholder="Username" type="text"></input>
                <input placeholder="password" type="password"></input>
                <p className="text-gray-500 text-sm"> Tutaj bedzie logowanie </p>
            </div>
        </div>
    );
}

export default Login;