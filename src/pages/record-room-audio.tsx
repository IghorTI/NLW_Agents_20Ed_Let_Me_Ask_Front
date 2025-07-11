import { Button } from "@/components/ui/button";
import { useState } from "react";

export function RecordRoomAudio(){

    const [isRecording, setIsRecording] = useState(false);

    function startRecording(){
        setIsRecording(true);
    }


    return (
        <div className="flex h-screen flex-col items-center justify-center gap-3">
            <Button onClick={startRecording}> Gravar áudio</Button>
            {isRecording ? <p>Gravando...</p> : <p>Pausado</p>}
        </div>
    )
}