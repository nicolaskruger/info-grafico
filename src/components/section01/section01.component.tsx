import { FC } from "react";
import styled from "styled-components";
import { Container, theme } from "..";
import { PieChart } from "react-minimal-pie-chart";
import { hair } from "../../assets";

const WORDS = {
    TITLE: "Alterações estruturais da haste capilar pós alisamento de Tioglicolato de amônia ou etanolamina tióis ",
    QUERETINA: "queratina(proteina)",
    LIPIDIOS: "lipídios, água e pigmentos",
    CAPILAR: "Estrutura capilar",
    FUNCAO_DO_CABELO: "Cabelo tem a função de proteger de forma não vital. ",
    NASCIMENTO: "A queratina nasce do folículo piloso (raíz, única parte viva da estrutura capilar) e está ligada a uma glândula que produz óleo. "
}

const H1 = styled.h1`
    color: ${props => props.theme.Orange};
    font-size: 20px;
    font-weight: lighter;
    text-align: center;
`;

const Pie = styled(PieChart)`
    width: 120px;
    color: ${props => props.theme.Background};
`;
const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const P00 = styled.p`
    color: ${props => props.theme.Cyan};
    margin: 0;
    text-transform: uppercase;
`;
const P01 = styled.p`
    color: ${props => props.theme.Comment};
    font-weight: bold;
    font-size: 10px;
    margin: 0;
`;

const Div00 = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 10px;
`;

const Div01 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    
`;

const Span00 = styled.div`
    color: ${porps => porps.theme.Purple};
`;
const Span01 = styled.div`
    color: ${porps => porps.theme.Pink};
`;
const P02 = styled.p`
    color: ${props => theme.Yellow};
`;

const Div02 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 40vh;
    padding-right: 10px;
`;

const Div03 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Span03 = styled.span`
    color: ${props => props.theme.Green};
    font-weight: lighter;
`;
const Span04 = styled.span`
    color: ${props => props.theme.Pink};
    font-weight: lighter;
`;

const Img = styled.img`
    
    object-fit: contain;
    height: 190px;
`;

const Section01: FC = () => {
    return (
        <Container>
            <H1>
                {WORDS.TITLE}
            </H1>
            <Div>
                <Div02>
                    <P00>
                        {WORDS.CAPILAR}
                    </P00>
                    <P01>
                        {WORDS.FUNCAO_DO_CABELO}
                    </P01>
                    <Div00>
                        <Pie
                            lineWidth={60}
                            data={
                                [
                                    { title: WORDS.QUERETINA, value: 80, color: theme.Pink },
                                    { title: WORDS.LIPIDIOS, value: 20, color: theme.Purple },
                                ]
                            }
                        />
                        <Div01>
                            <Span00>
                                20% lipídios, água e pigmentos
                            </Span00>
                            <Span01>
                                80% queratina (proteína)
                            </Span01>
                        </Div01>
                    </Div00>
                    <P02>
                        {WORDS.NASCIMENTO}
                    </P02>
                </Div02>
                <Div03>
                    <Span03>
                        <strong>Cutícula:</strong> 5 a 10 camadas de queratina;

                        Protege o córtex.
                    </Span03>
                    <Span04>
                        <strong>Córtex:</strong> Células mortas que promovem elasticidade e resistência.
                    </Span04>
                    <Img src={hair} />
                </Div03>
            </Div>
        </Container>
    )
}

export {
    Section01
}