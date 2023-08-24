import React from 'react'

const Authentication = () => {
    // JavaScript
    return (
        <div class="pai-vermelho">
            <div class="filho-azul">
                <div class="filho-verde">
                    <div class="filho-marrom">
                        <img src="" alt="logo EasyProg" />
                    </div>
                    <div class="filho-ciano">
                        <p>EASYPROG</p>
                        <p>A Testing Framework</p>
                    </div>
                </div>
                <div class="filho-laranja">
                    <div class="filho-azulClaro">
                        <div class="filho-verdeOliva">
                            <img src="" alt="EasyBot" />
                            <h1>Authentication</h1>
                            <p>Autentique-se na plataforma para utilizar as <strong>ferramentas</strong>.</p>
                        </div>
                        <div class="filho-amarelo">
                            <div class="input-wrapper">
                                <label htmlFor='username'>Username</label>
                                <div class="input-item">
                                    <img src="" alt="Icone Username" />
                                    <input type="text" placeholder='User' id='username' />
                                </div>
                            </div>
                            <div class="input-wrapper">
                                <label htmlFor='password'>Senha</label>
                                <div class="input-item">
                                    <img 
                                        src="" 
                                        alt="Icone Password" 
                                    />
                                    <input 
                                        type="text" 
                                        placeholder='User' 
                                        id='password' 
                                    />
                                    <img 
                                        src="" 
                                        alt="Icone ViewPassword" 
                                    />
                                </div>
                            </div>
                            <div class="filho-esmeralda">
                                <input 
                                    type="checkbox" 
                                    name='KeepConnected' 
                                    id='KeepConnected' 
                                />
                                <label htmlFor="KeepConnected">
                                    Manter-se conectado
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="filho-verdeLimon">
                        <button>
                            Cadastrar-se
                        </button>
                        <button>
                            Continuar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication;