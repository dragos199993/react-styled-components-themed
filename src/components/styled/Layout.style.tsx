import styled from 'styled-components';
import { IContainerProps, IColProps } from '../../interfaces/styled/ILayout';

/**
 * Container styled layout component
 * @param fluid: boolean
 */
export const Container = styled.div<IContainerProps>`
  max-width: ${props => (props.fluid ? 'calc(100vw - 30px)' : '960px')};
  margin: 0 auto;
`;

/**
 * Row styled layout component
 */
export const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

/**
 * Col styled layout component
 * @param position: string
 */
export const Col = styled.div<IColProps>`
  flex:1;
  padding: ${props => (props.padding ? props.padding : '0px')};
  margin: 0 15px;
  ${props => (props.position && `justify-content: ${ props.position }`)}
  ${props => (props.position && 'display: flex')}
`;