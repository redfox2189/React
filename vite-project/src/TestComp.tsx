
function TestComp({address, img}:{address:string, img?:string}) {
    return (<>
    Hello World
    address: {address}
    img: {img ? <img src={img} alt="Description" /> : "No image provided"}
    </>)
}



export default TestComp