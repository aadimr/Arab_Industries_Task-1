import style from "../header/Header.module.css"

export default function Header() {
    return (
        <div className={style.mainContainer}>
            <img src="https://media.licdn.com/dms/image/D560BAQGYXLGAepihVg/company-logo_200_200/0/1684513689890?e=2147483647&v=beta&t=z8gHTazvPqQNPihYAnIgIKa0f7dbN_foDHmOagNQpJM" alt="error" className={style.logo}/>
        </div>
    )
}
