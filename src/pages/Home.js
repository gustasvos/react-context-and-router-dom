import { useContext } from "react"
import { useQuery } from "@tanstack/react-query"
import App, { AppContext } from "../App"
import axios from "axios"
// no need to use props anymore

const Home = () => {
    const { username } = useContext(AppContext)
    
    const { data } = useQuery(['cat'], () => {
        axios
            .get("https://catfact.ninja/fact")
            .then((res) => res.data)
    })
    // const { data } = useQuery(["cat"], () => {
    //     axios.get("https://catfact.ninja/fact").then((res) => res.data)
    // })

    return <h1> This is the home page and the user is {username} <p> {data.fact} </p></h1>
}

export default Home