import { HandPalm, Play } from "phosphor-react";
import {HomeContainer,StartCountdonwButton, StopCountdonwButton} from './styles'
import { useState, createContext } from "react";
import { NewCycleForm } from "./NewCycleForm";
import { Countdown } from "./components/Countdown";

interface Cycle {
    id: string
    task: string
    minutesAmount: number
    startDate: Date
    interruptedDate?: Date
    finishedDate?: Date
}

interface CyclesContextType {
    activeCycle: Cycle | undefined;
    activeCycleId: string | null
    markCurrentCycleAsFinished: () => void
}

export const CyclesContext =  createContext({} as CyclesContextType)

export function Home(){
    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

    function markCurrentCycleAsFinished(){
        setCycles((state) =>
        state.map((cycle) => {
            if(cycle.id === activeCycleId){
                return {...cycle, finishedDate: new Date()}
            }else {
                return cycle
            }
        })
    )
    }

    /*function handleCreateNewCycle(data: NewCycleFormData){
        const id = String(new Date().getTime())

        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }

        setCycles((state) => [...state, newCycle]);
        setActiveCycleId(id)
        setAmountSecondsPassed(0)

        reset()
    }*/

    function handleInterruptCycle(){
        setCycles((state) =>
            state.map((cycle) => {
            if(cycle.id === activeCycleId){
                return {...cycle, interruptedDate: new Date()}
            }else {
                return cycle
            }
        }))

        setActiveCycleId(null)
    }

    //const task = watch('task')
    //const isSubmitDisabled = !task

    console.log(cycles)

    return(
        <HomeContainer>
            <form /*onSubmit={handleSubmit(handleCreateNewCycle)}*/>
                <CyclesContext.Provider value={{activeCycle, activeCycleId, markCurrentCycleAsFinished}}>
                    {/*<NewCycleForm/>*/}
                    <Countdown />
                </CyclesContext.Provider>

                {activeCycle ? (
                    <StopCountdonwButton onClick={handleInterruptCycle} type="button">
                        <HandPalm size={24}/>
                        Interromper
                    </StopCountdonwButton>
                ): (
                    <StartCountdonwButton /*disabled={isSubmitDisabled}*/ type="submit">
                        <Play size={24}/>
                        começar
                    </StartCountdonwButton>
                )}
            </form>
        </HomeContainer>
    )
}