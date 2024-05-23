import { useState } from "react";
import Button from "../Button/Button";
import DropList from "../DropList/DropList";
import InputField from "../InputField/InputField";
import CarCard from "../CarCard/CarCard";

const Form = ({onSubmit,classesCarros}) => {
    

    const [desc, setDesc] = useState('');
    const [modelo, setModelo] = useState('');
    const [imagem, setImagem] = useState('');
    const [classe, setClasse] = useState('');

    const onSave = (event) => {
        event.preventDefault();
        onSubmit({
            desc,
            modelo,
            imagem,
            classe,
        })
    };

    return (
        <section className="w-full h-fit relative flex flex-col items-center">
            <div className="bg-gradient-to-tr from-[#C0EEF2] to-[#9DB8F8] relative w-full h-[10px] flex justify-center items-center z-20 ring-2 ring-offset-2"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <img src='/images/GODSPEED.png' alt="form background" className="object-cover w-full h-full border-[#537FE7] border-y-4 z-10"/>
            </div>
            *<form 
                className="w-fit min-w-[400px] h-fit flex flex-col flex-wrap bg-gradient-to-t from-[#010B13] to-[#010127] rounded-[25px] p-5 relative z-30 my-[100px] ring-1 ring-offset-5 ring-[#537FE7]"
                onSubmit={onSave}
            >
                <h2 className="text-[#E9F8F9] mb-3 break-words text-xl font-cyberpunk2 text-center">
                    Adicionar carro
                </h2>
                <InputField 
                    necessary={true} 
                    label='Modelo' 
                    placeholder='insira o modelo...' 
                    value={modelo}
                    onChange={setModelo}
                />
                <InputField 
                    necessary={true} 
                    label='Descrição' 
                    placeholder='insira a descrição...'
                    value={desc}
                    onChange={setDesc}
                />
                <InputField 
                    necessary={false} 
                    label='Imagem' 
                    placeholder='insira o endereço da imagem...'
                    value={imagem}
                    onChange={setImagem} 
                />
                <DropList 
                    necessary={true} 
                    label='Classificação'
                    data={classesCarros} 
                    value={classe}
                    onChange={setClasse} 
                />
                <Button>Enviar</Button>
            </form>
            <div className="bg-gradient-to-tr from-[#C0EEF2] to-[#9DB8F8] relative w-full h-[10px] flex justify-center items-center z-20 ring-2 ring-offset-2"></div>
        </section>
    );
};

export default Form;