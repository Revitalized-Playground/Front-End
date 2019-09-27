import styled from "styled-components";

export const Box = styled.div`
    height: 12px;
    background: $erudite-purple;
    border-radius: 50px;
    @keyframes pulse {
        0% {
            width: 0;
            background: $erudite-purple;
            }
        100% {
            width: ${card.amountFunded > card.goalAmount ? 100 : (Number(card.amountFunded) / Number(card.goalAmount) * 100)}%;
                    
        }              
    }
    width: ${card.amountFunded > card.goalAmount ? 100 : (Number(card.amountFunded) / Number(card.goalAmount) * 100)}%;
    animation: 1s ease-out pulse;
`