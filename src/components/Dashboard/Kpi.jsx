import { DataContainer, IconContainer, KpiBox } from './KpiStyle'

function Kpi({props}) {


  return (
    <KpiBox>
        <IconContainer>
            {props.icon}
        </IconContainer>
        <DataContainer>
            <p>{props.number}</p>
            <p>{props.name}</p>
        </DataContainer>
    </KpiBox>
  )
}

export default Kpi