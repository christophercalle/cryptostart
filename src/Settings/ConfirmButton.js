import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';

const confirmButtonStyled = styled.div`
  margin: 20px;
  color: green; 
`
export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`
export default function(){
  return  <AppContext.Consumer>
            {({confirmFavorites}) => 
              <CenterDiv>
                <confirmButtonStyled onClick={confirmFavorites}>
                  Confirm Favorites
                </confirmButtonStyled>}
              </CenterDiv>
            }
          </AppContext.Consumer>
}