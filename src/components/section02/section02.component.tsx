import { FC } from "react";
import { Container } from "..";
import styled from "styled-components";

const Section = styled.section`
    height: 90%;
    background-color: ${props => props.theme.CurrentLine};
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const H1 = styled.h1`
    color: ${props => props.theme.Purple};
    margin: 0;
`;

const P = styled.p`
    color: ${props => props.theme.Pink};
`;

const Section02: FC = () => {
    return (
        <Container>
            <Section>
                <H1>
                    Procedimento químico de Tioglicolato de amônia para alisamento permanente
                </H1>
                <div>

                    <P>
                        Para alisar é preciso amolecer a estrutura capilar, rompendo ligações e desgastando o fio.

                        A concentração do produto influencia seu Ph e o desgaste que ocorrerá no processo, quanto mais concentrado, mais alisa e mais danifica.
                    </P>
                    <P>
                        Os danos estão diretamente ligados a perda de força, brilho, elasticidade, porosidade, cor e textura do cabelo. Tornando o fio mais áspero e opaco.

                        Riscos extremos levam a queda do cabelo e até mesmo a alopecia. Ou a tricorrexe nodosa que pode ser proximal (próxima ao fio), distal (desgaste natural) e focal (em uma parte determinada da cabeça).
                    </P>
                    <P>
                        Danos à queratina levam a riscos de edema e tonsura do fio, ocasionando a sua quebra.

                        As células se alargam e se rompem, formando um nódulo.

                        -Sol, calor, produtos, pente, podem ocasionar em desgastes naturais.
                    </P>
                </div>
            </Section>
        </Container>
    )
}

export {
    Section02
}