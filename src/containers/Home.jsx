
import Button from "../components/Button";


import Header from "../components/Header";

const fetchData = (Greetings) => {
    alert(Greetings);
}



function Home() {
        let name = "SAY GREETINGS"
    return(
        <div>
            <Header/>
            <h1>This Is Home Page</h1>
            {/* <button>LOGIN</button> */}
            {/* <button>SIGNUP</button> */}
           <Button takeData = {fetchData} name = {name}/>
        </div>
    )
}
export default Home;
