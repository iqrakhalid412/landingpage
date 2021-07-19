function Button({name,takeData}) {
    return(
  <button onClick = {() => takeData("Hello Iqra..! What's Up")}>{name}</button>
    )
}
export default Button;