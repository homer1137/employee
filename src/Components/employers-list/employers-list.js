import EmployeesListItem from "../employers-list-item/employers-list-item"

import './employers-list.css';

const EmployersList = ({data, onDelete, onToggleRise, onToggleIncrease}) => {

    const elements = data.map(item => {
        const {id, ...itemProps}=item;
        return(
            <EmployeesListItem key={id} 
            {...itemProps}
            onDelete={() => onDelete((id))}
            onToggleIncrease={()=>onToggleIncrease(id)}
            onToggleRise={()=>onToggleRise(id)}
            
            />
        )
    })

    return (
    <ul className="app-list list-group">
        {elements}
    </ul>

    )
}


export default EmployersList;

