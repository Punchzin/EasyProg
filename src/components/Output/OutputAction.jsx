import * as Style from "./Output.style.jsx";

// Props = Propriedades
const OutputAction = ({ outpuIsSelected, onClick }) => {
    return (
        outpuIsSelected ? (
            <Style.OutputActionSelected onClick={onClick}>
                
            </Style.OutputActionSelected>
        ) : (
            <Style.OutputAction onClick={onClick}>

            </Style.OutputAction>
        )
    )
}

export default OutputAction; 