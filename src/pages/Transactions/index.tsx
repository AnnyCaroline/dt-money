import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles"

export function Transactions() {
    return (
        <div>
            <Header/>
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 17.000,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>19/07/1996</td>
                        </tr>
                        <tr>
                            <td width="50%">Alimentação</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    -R$ 59,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>19/07/1996</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}