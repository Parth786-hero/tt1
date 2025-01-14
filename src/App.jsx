import { useEffect, useState } from "react";
import Card from "./components/Card";
const App = () => {

    const [bag, updateBag] = useState([]);

    const [state, updateState] = useState(true);
    const [showFull , updateShowFull] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.org/posts")
            .then(obj => obj.json())
            .then(data => {
                updateBag(data);
                console.log(data);

                updateState(false);
            })
    }, []);

    function trigger(){
        updateShowFull(false);
    }
    let sal = 1500;
    return (
        <>
            <div className="container">
                <h1 className="main-heading lg-heading">Dynamic Cards Build</h1>
                <div className="father">

                    {
                        state ? <h3 className="md-heading load">loading...</h3> : bag.slice(0 , 4).map((ele, id) => {
                            return <Card Key={ele.id} {...ele} />
                        })
                    }

                    {
                        showFull ? <button className="shoot" onClick={trigger}>load more</button> : bag.slice(4 , bag.length).map((ele, id) => {
                            return <Card Key={ele.id} {...ele} />
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default App;