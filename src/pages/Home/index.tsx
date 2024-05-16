import { Play } from "phosphor-react";
import {HomeContainer, FormContainer, CountdownContainer, Separator, StartCountdonwButton, TaskInput,MinutesAmountInput} from './styles'

export function Home(){
    return(
        <HomeContainer>
            <form>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput id="task" list="task-suggestions" placeholder="Dê um nome para o seu projeto"/>

                    <datalist id="task-suggestions">
                        <option value="Estudar Javascript"></option>
                        <option value="Estudar React"></option>
                        <option value="Praticar Logica"></option>
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput type="number" id="minutesAmount" placeholder="00" step={5} min={5} max={60}/>

                    <span>minutos.</span>
                </FormContainer>
            
                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountdonwButton disabled type="submit">
                    <Play size={24}/>
                    começar
                </StartCountdonwButton>
            </form>
        </HomeContainer>
    )
}