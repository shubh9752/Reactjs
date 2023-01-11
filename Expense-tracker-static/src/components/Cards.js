import './assets/Cards.css';

//this function will work as an wrapper compnent which wrap other component
function Cards(props){
    const classess=" cards "+props.className;
    return(
        //children is predefined keyword by react whose values are the component which are wrapped inside this component
        <div className={classess}>{props.children}</div>)
}

export default Cards;