import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { z } from "zod/v4"
import { zodResolver}  from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useCreateRoom } from "@/http/types/use-create-room";



const createRoomSchema = z.object({
    name : z.string().min(1, {message: "Inclua no mínimo 3 caracteres"}),
    description: z.string()
})

type CreateRoomFormData = z.infer<typeof createRoomSchema>
  
export function CreateRoomForm(){

    const { mutateAsync: createRoom} = useCreateRoom();

    const createRoomForm = useForm<CreateRoomFormData>({
        resolver: zodResolver(createRoomSchema),
        defaultValues: {
            name : '',
            description: ''
        }
    })

    async function handleCreateRoom({name, description}: CreateRoomFormData){
        createRoomForm.reset();
         await createRoom({name, description});
    }

    
    return (
        <Card>
            <CardHeader>
                <CardTitle> Crie uma nova sala para começar a fazer perguntas e receber respostas da I.A</CardTitle>
            </CardHeader>
            <CardContent>
               <Form {...createRoomForm}>
                    <form  
                    className="flex flex-col gap-4"
                    onSubmit={createRoomForm.handleSubmit(handleCreateRoom)}
                    >
                        <FormField control={createRoomForm.control}
                            name="name"
                            render={({field}) => {
                                return (
                                    <FormItem>
                                        <FormLabel> Nome da sala</FormLabel>
                                        <FormControl>
                                            <Input {...field} 
                                            placeholder="Digite o nome da sala..."
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )
                            }}>
                        </FormField>
                                                <FormField control={createRoomForm.control}
                            name="description"
                            render={({field}) => {
                                return (
                                    <FormItem>
                                        <FormLabel> Descrição</FormLabel>
                                        <FormControl>
                                            <Textarea {...field}/>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )
                            }}>
                        </FormField>

                        <Button className="w-full" type="submit">Criar sala</Button>
                    </form>
               </Form>
            </CardContent>
        </Card>
    )
}