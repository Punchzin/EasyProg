import * as Style from "./Code.styles";
import CodeAction from "./CodeAction";
import React, { useState } from 'react';


const CodeButtons = () => {
    const [playIsSelected, setPlayIsSelected] = useState(false);
    const [pauseIsSelected, setPauseIsSelected] = useState(false);
    const [restartIsSelected, setRestartIsSelected] = useState(false);

    return (

        <Style.CodeActions>
            <CodeAction
                actionIcon="ri-play-line"
                actionTitle="Iniciar"
                onClick={() => setPlayIsSelected((prev) => !prev)}
                actionIsSelected={playIsSelected}
            />
            <CodeAction
                actionIcon="ri-pause-fill"
                actionTitle="Pausar"
                onClick={() => setPauseIsSelected((prev) => !prev)}
                actionIsSelected={pauseIsSelected}
            />
            <CodeAction
                actionIcon="ri-restart-line"
                actionTitle="Reiniciar"
                onClick={() => setRestartIsSelected((prev) => !prev)}
                actionIsSelected={restartIsSelected}
            />
        </Style.CodeActions>
    );

};

export default CodeButtons;