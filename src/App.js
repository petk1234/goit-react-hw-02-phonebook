import React, {Component} from "react";
import ContactForm from "./components/ContactForm";
import Filter from './components/Filter';
import ContactList from "./components/ContactList";

export default class App extends Component{
    state = {
        contacts: [],
        filter: '',
    }
    
    // handleChangeName = name =>{
    //     this.setState(prevState =>{
    //         return {name: name_}
    //     });
    // }

    //  handleChangeNumber = e =>{
    //      let number_ = e.target.value;
    //      this.setState(prevState =>{
    //          return {number: number_}  
    //      });
    //  }

    handleChangeFinder = filter_ =>{ 
        this.setState(prevState =>{
            return {filter: filter_}
        });
    }

    handleClick = (name, number) =>{
        // const click ={
        //     id: uuidv4(),
        //     name, number,
        // } необязательно делать это объектом, можно просто использовать как переменные типа String
        this.setState(prevState =>{
            let k = 0;
            this.state.contacts.forEach(contact =>{
                if(contact === `${name}: ${number}`){
                    k = k + 1;
                }
            })
            if(k === 0){
               return {contacts: prevState.contacts.concat(`${name}: ${number}`)}
            }
            else{
                alert('KEEEEEEEEk');
            }   
        })
    }

    handleDelete = contactToDel =>{
        this.setState( prevState =>{
            return {contacts: prevState.contacts.filter(contact => contact !== contactToDel)}
        })
    }

    render(){
        let {contacts, filter} = this.state;
        return (
            <div>
              <ContactForm 
               onClickkk={this.handleClick}
            />
              <Filter 
                 onChangeFinder={this.handleChangeFinder}
              />   
              <ContactList
                 contacts={contacts}
                 filter={filter}
                 onDelete = {this.handleDelete}
              />
            </div>
        )
    }
}