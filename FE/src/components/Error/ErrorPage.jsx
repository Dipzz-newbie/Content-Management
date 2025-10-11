import { Link } from "react-router";


const ErrorPage = ({statusCode = 404, message = "Page Not Found", describe ="The page you are looking for doesn't exist or has been moved.", nameButton ="Back to Page", redirectLink = "" }) => {
    return <>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center">
            <main className="container mx-auto px-4">
                <div className="flex-grow flex items-center justify-center">
                    <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in p-8 text-center">
                        <div>
                            <div className="w-32 h-32 bg-gradient rounded-full mx-auto flex items-center justify-center mb-6 shadow-lg">
                                <i className="fas fa-exclamation-triangle text-6xl text-white" />
                            </div>
                            <h1 className="text-5xl font-bold text-white mb-4">{statusCode}</h1>
                            <h2 className="text-2xl font-semibold text-white mb-4">{message}</h2>
                            <p className="text-gray-300 mb-8">{describe}</p>
                            <Link to={redirectLink} className="inline-flex items-center px-6 py-3 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5">
                                <i className="fas fa-home mr-2" /> {nameButton}
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </>
}

export default ErrorPage;