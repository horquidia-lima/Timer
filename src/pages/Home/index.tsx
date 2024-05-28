import { HandPalm, Play } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'

import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";
import { HomeContainer, StartCountdownButton, StopCountdownButton } from "./styles";
import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O intervalo precisa ser de no maximo 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home(){
    const {CreateNewCycle, InterruptCurrentCycle, activeCycle} = useContext(CyclesContext)

    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        },
    });

    const {handleSubmit, watch, reset} = newCycleForm

    const task = watch('task')
    const isSubmitDisable = !task

    return(
        <HomeContainer>
            <form onSubmit={handleSubmit(CreateNewCycle)}>
                
                    <FormProvider {...newCycleForm}>
                        <NewCycleForm/>
                    </FormProvider>
                    
                    <Countdown />
                {activeCycle ? (
                    <StopCountdownButton onClick={InterruptCurrentCycle} type="button">
                        <HandPalm size={24}/>
                        Interromper
                    </StopCountdownButton>
                ): (
                    <StartCountdownButton disabled={isSubmitDisable} type="submit">
                        <Play size={24}/>
                        começar
                    </StartCountdownButton>
                )}
            </form>
        </HomeContainer>
    )
}