import * as Style from "./Aside.styles.jsx";

// Props = Propriedades
const AsideAction = ({ actionIcon, actionImage, actionTitle, actionIsSelected = false, onClick }) => {
    return (
        <Style.AsideAction title={actionTitle} onClick={onClick}>
            <i className={actionIcon}></i>
            {actionImage && <img src={actionImage}/>}
        </Style.AsideAction>
    )
}

export default AsideAction; 