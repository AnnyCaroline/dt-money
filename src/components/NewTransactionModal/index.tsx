import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export function NewTransactionModal() {
    return (
        <Overlay>
            <Dialog.Overlay />                
                <Content>
                    <Dialog.Title>Nova transação</Dialog.Title>
                    
                    <CloseButton>
                        <X size={24}/>
                    </CloseButton>

                    <form action="">
                        <input type="text" placeholder="descrição" required />
                        <input type="number" placeholder="preço" required />
                        <input type="text" placeholder="categoria" required />

                        <TransactionType>
                            <TransactionTypeButton value="income" variant="income">
                                <ArrowCircleUp size={24} />
                                Entrada
                            </TransactionTypeButton>
                            <TransactionTypeButton value="outcome" variant="outcome">
                                <ArrowCircleDown size={24} />
                                Saída
                            </TransactionTypeButton>
                        </TransactionType>

                        <button type="submit">Cadastrar</button>
                    </form>
                </Content>
        </Overlay>
    )
}