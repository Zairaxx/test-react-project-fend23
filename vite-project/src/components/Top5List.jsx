const Top5List = (props) => {
  
    return(
        <ul>
            <li>Hej</li>
            {props.data.map((num,i) => <li key={i}>{num+10}</li>)}
        </ul>
    )
}

export default Top5List