import { useContext } from "react"
import App, { AppContext } from "../App"
import axios from "axios"
// no need to use props anymore

const Home = () => {
    const { username } = useContext(AppContext)

    return <h1> This is the home page and the user is {username} </h1>
}

export default Home