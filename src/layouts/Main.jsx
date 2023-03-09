import { Outlet, useLoaderData } from "react-router-dom";

// assets
import wave from '../assets/wave.svg';

// components
import Nav from "../components/Nav";

// helper function
import { fetchData } from "../helpers"

export function mainLoader() {
    const userName = fetchData("userName");

    return { userName }
}

const MainLoader = () => {
    const { userName } = useLoaderData()


  return (
    <div className="layout">
        <Nav userName={userName}/>
        <main>
            <Outlet/>
        </main>
        <img src={wave} alt="" />
    </div>
  )
}

export default MainLoader