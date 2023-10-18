import * as Style from "./Output.style.jsx";

// Props = Propriedades
// eslint-disable-next-line react/prop-types
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