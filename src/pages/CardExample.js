import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import styled from "styled-components";

const StyledCard = styled(Card)`
  && {
    max-width: 400px;
    margin: 20px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const CardExample = () => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5">Material-UI Card</Typography>
        <Typography color="textSecondary">카드 내용이 여기에 표시됩니다.</Typography>
      </CardContent>
    </StyledCard>
  );
};

export default CardExample;
