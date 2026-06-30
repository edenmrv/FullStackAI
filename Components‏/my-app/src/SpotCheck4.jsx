function SignUp() {
    return (
        <button>Sign up</button>
    )
}

function Blurb() {
    return (
        <p>Join us today, it only takes a minute!</p>
    )
}

function About() {
    return (
        <div id="about">
            <h2>About us</h2>
            <Blurb />
            <SignUp />
        </div>
    )
}

export default function App() {
    return (
        <div className="app">
            <About />
        </div>
    )
}
