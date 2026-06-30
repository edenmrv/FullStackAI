function Nav() {
    return (
        <div id="nav">
            <span>Home</span>
            <span>About</span>
        </div>
    )
}

function LandingPage() {
    return (
        <h1>Welcome!</h1>
    )
}

export default function App() {
    return (
        <div className="app">
            <Nav />
            <LandingPage />
        </div>
    )
}
