export type GetRoomQuestionResponse = Array<{
    id: string,
    question: string, 
    answer: number | null, 
    createAt: string,
    isGeneratinAnswer ?: boolean

}>