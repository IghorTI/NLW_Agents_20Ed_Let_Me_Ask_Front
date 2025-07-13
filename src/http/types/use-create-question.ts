import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateQuestionRequest } from "./create-question-resquest";
import type { GetRoomQuestionResponse } from "./get-rooms-questions-response";
import type { Variable } from "lucide-react";



export function useCreateQuestion(roomId : string){

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (data : CreateQuestionRequest) =>{
        
            const response = await fetch(`http://localhost:3333/rooms/${roomId}/questions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })

            const result: CreateQuestionRequest = await response.json();

            return result; 

        },

        onMutate({question}){

            const questions = queryClient.getQueryData<GetRoomQuestionResponse>([
                'get-questions',
                roomId,
            ])

            const questionsArray = questions ?? [];
            const newQuestion = {
                    id: crypto.randomUUID(),
                    question,
                    answer: null, 
                    createAt: new Date().toISOString(),
                    isGeneratingAnswer : true

                }

            queryClient.setQueryData<GetRoomQuestionResponse>(
                ['get-questions',roomId], 
                [newQuestion, ...questionsArray]
            )

            return {newQuestion, questions}

        },



        onSuccess: (data, _variables, context) => {

           queryClient.setQueryData<GetRoomQuestionResponse>(
                    ['get-questions',roomId], 
                   questions => {

                        if(!questions){
                            return questions 
                        }

                        if(!context.newQuestion){
                            return questions
                        }

                        return questions.map(question => {
                            if(question.id === context.newQuestion.id){
                                return { ...context.newQuestion, id: data.questionId, answer: data.answer, isGeneratingAnswer: false}
                            }


                            return question
                        })
                   }
                )
        },

        onError: (_error, _variables, context) => {

            if(context?.questions){
                queryClient.setQueryData<GetRoomQuestionResponse>(
                    ['get-questions',roomId], 
                    context.questions
                )
            }

        }
    })
}