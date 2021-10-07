import './app-info.css';

const Appinfo = ({countEmployees, premiumem, star1}) => {


    return (
    <div className="app-info">
        <h1>
        Учет сотрудников в компании
        </h1>
        <h2>Общее число сотрудников: {countEmployees}</h2>
        <h2>Премию получат {premiumem}</h2>
        <h2>Сотрудники со звездой деленное на два {star1}</h2>
    </div>
    )
} 

export default Appinfo;






