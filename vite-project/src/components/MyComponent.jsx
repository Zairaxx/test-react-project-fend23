import Top5List from "./Top5List"

function MyComponent(props){

    let myProfile = {
        name: "Brandon",
        age: 30
    }


    return(
        <>
            <h2 className="underrubrik">Name: {myProfile.name} Age:{myProfile.age}</h2>
            <h3>En till rubrik</h3>
            <Top5List data={props.test}/>
            {/* <ul>
                {props.test.map(num =><li>{num}</li>)}
            </ul> */}
        </>
    )
}

export default MyComponent
