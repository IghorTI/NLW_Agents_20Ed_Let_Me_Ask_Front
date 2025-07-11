// biome-ignore assist/source/organizeImports: <explanation>

import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { dayjs } from "@/lib/dayjs";
import { useRooms } from "@/http/types/user-rooms";



export function RoomList() {

        const {data, isLoading} = useRooms();
    
        return (
            <div className="min-h-screen px-4 py-8">
                <div className="mx-auto max-w-4xl">
                    <div className="grid grid-cols-2 items-start gap-8">
    
                    </div> 
    
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Salas recentes
                            </CardTitle>    
                            <CardDescription>
                                Acesso rápido para as salas criadas recentemente
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-3">
    
                            {isLoading && (
                                <p className="text-muted-foreground text-sm">
                                    Carregando salas...
                                </p>
                            )}
                            
                            {data?.map((room) => {
                                // biome-ignore assist/source/useSortedAttributes: css
                                return <Link  
                                    key={room.id} className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/50"
                                    to={`/room/${room.id}`}
                                    >
                                    
                                    <div className="flex flex-1 flex-col gap-1">
                                        <h3 className="fron-m">{room.name}</h3>
                                    
                                    <div className="flex items-center gap-2"> 
                                        <Badge className="text-xs" variant="secondary">
                                            {dayjs(room.createdAt).toNow()} 
                                        </Badge>
                                         <Badge className="text-xs" variant="secondary">
                                            {room.questionsCount} pergunta(s)
                                        </Badge>
    
                                    </div>
                                    
                                    </div>
    
                                    <span className="flex items-center gap-1 text-sm">
                                        Entrar
                                        <ArrowRight className="size-3" />
                                    </span>
                                </Link>
                            })}
    
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
}