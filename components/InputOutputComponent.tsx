import React, {useState} from 'react';
import InputComponent from "./InputComponent";
import OutputComponent from "./OutputComponent";
import {Template} from "../constants/templates";
import { ClimbingBoxLoader } from "react-spinners";



// @ts-ignore
const InputOutputComponent = ({template}) => {
    const [output, setOutput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleClearOutput = () => {
        setOutput("")
    }
    const generateOutputHandler = async (template: Template, inputsData: { [key: string]: string }) => {
        setIsLoading(true);
        const result: any = await fetch("/api/chatgpt", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                template,
                inputsData
            }),
        });
        const {reply} = await result.json()
        setOutput(reply || '');
        setIsLoading(false);
    };
    return (
        <div className="flex flex-col w-full h-full lg:flex-row">


            <InputComponent
                template={template}
                generateOutput={generateOutputHandler}
            />
            <OutputComponent
                onClearOutput={handleClearOutput}
                generatedOutput={output}/>
                {
  isLoading && (
    <div className="flex items-center justify-center w-full h-full">
      <ClimbingBoxLoader color="rgba(214, 54, 205, 1)" loading={isLoading} />
    </div>
  )
}
        </div>
    );
};

export default InputOutputComponent;
