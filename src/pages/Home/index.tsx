import { Play } from "phosphor-react";
import {HomeContainer, FormContainer, CountdownContainer, Separator} from './styles'

export function Home(){
    return(
        <HomeContainer>
            <form>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <input id="task" />

                    <label htmlFor="minutesAmount">Dê um nome para o seu projeto</label>
                    <input type="number" id="minutesAmount"/>

                    <span>minutos.</span>
                </FormContainer>
            
                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <button type="submit">
                    <Play size={24}/>
                    começar
                </button>
            </form>
        </HomeContainer>
    )
}