import { Component } from 'react';

import Appinfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';

import './app.css'

class App1 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [
                {name: 'Ivan', salary: '100000', increase: false, employ: true, id: 123},
                {name: 'Ilya', salary: '200000', increase: true, employ: false, id: 124},
                {name: 'Ilgiz', salary: '250000', increase: false, employ: false, id: 125},
                {name: 'Ivan', salary: '100000', increase: false, employ: false, id: 126},
                {name: 'Ilya', salary: '200000', increase: true, employ: false, id: 127},
                {name: 'Ilgiz', salary: '250000', increase: false, employ: false, id: 130}
            ] 
        }
        this.maxId=230;
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {
            //const index = data.findIndex(elev => elev.id === id);
            const newArraw = data.filter(item => item.id !== id)

            return {
                data: newArraw
            }

        })
    }

    
    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            employ: false,
            id: this.maxId++
        }
        
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleIncrease = (id) => {
        console.log (`Increase this ${id}`)
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))

    }

    onToggleRise = (id) => {
        console.log (`Increase this ${id}`)
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, employ: !item.employ}
                }
                return item;
            })
        }))

    }


  


    

    render() {
        const countEmployees = this.state.data.length;
        
        
        const premiumEmployees = this.state.data.filter(item => item.increase).length;
            
        const starEmployees = this.state.data.filter(item => item.employ).length/2;
       

        return (
            
            <div className="app">
                <Appinfo 
                countEmployees={countEmployees}
                premiumem={premiumEmployees}
                star1={starEmployees}
                />

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                
                <EmployersList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease ={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}

                    />
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}
export default App1;