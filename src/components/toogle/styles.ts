import styled from 'styled-components';
import Switch,{ReactSwitchProps} from 'react-switch'


export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

export const SwitchComponent = styled(Switch).attrs<ReactSwitchProps>(
  ({theme})=>({
      onColor:theme.colors.info,
      offColor:theme.colors.warning
  })
)<ReactSwitchProps>`

`;

export const SwitchLabel = styled.span`

    color:${props=>props.theme.colors.white};
    margin:0 10px;

`
